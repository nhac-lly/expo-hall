"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import { MOUSE } from "three";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useControls, monitor } from "leva";
import { KTX2Loader, GLTFLoader } from "three/examples/jsm/Addons.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";

export type ControlType =
  | "orbit"
  | "trackball"
  | "firstPerson"
  | "fly"
  | "map"
  | "drag"
  | "pointerLock"
  | "transform"
  | "arcball"
  | "dragFPS";

interface ControlSelectorProps {
  type: ControlType;
  onChange: (type: ControlType) => void;
}

export function ControlSelector({ type, onChange }: ControlSelectorProps) {
  return (
    <div className="fixed top-4 left-48 z-20 bg-white/80 dark:bg-black/80 p-2 rounded-lg shadow-lg">
      <select
        value={type}
        onChange={(e) => onChange(e.target.value as ControlType)}
        className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1 text-black dark:text-white"
      >
        <option
          value="dragFPS"
          className="bg-white dark:bg-black text-black dark:text-white"
        >
          Drag FPS Controls
        </option>
        <option
          value="orbit"
          className="bg-white dark:bg-black text-black dark:text-white"
        >
          Orbit Controls
        </option>
      </select>
    </div>
  );
}

function createTextTexture(text: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return null;

  canvas.width = 256;
  canvas.height = 64;

  // Set background
  context.fillStyle = "rgba(0, 0, 0, 0.5)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Set text
  context.font = "24px Arial";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function CameraPoint({
  position,
  label,
  onClick,
}: {
  position: [number, number, number];
  label: string;
  onClick: () => void;
}) {
  const texture = useMemo(() => createTextTexture(label), [label]);

  return (
    <group position={position}>
      <mesh onClick={onClick}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      {texture && (
        <mesh position={[0, 0.5, 0]}>
          <planeGeometry args={[1, 0.25]} />
          <meshBasicMaterial
            map={texture}
            transparent={true}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
}

interface CameraPositionFormProps {
  onSubmit: (position: [number, number, number], label: string) => void;
}

export function CameraControls({
  type,
  cameraPositions = [],
  characterHeight = 1.7,
}: {
  type: ControlType;
  cameraPositions?: Array<{
    position: [number, number, number];
    label: string;
  }>;
  characterHeight?: number;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [showTransformControls, setShowTransformControls] = useState(false);
  const { camera } = useThree();
  const perspectiveCamera = camera as THREE.PerspectiveCamera;

  // Touch state tracking
  const lastTouchPosition = useRef<{ x: number; y: number } | null>(null);
  const lastPinchDistance = useRef<number | null>(null);
  const initialFOV = useRef(50); // Store initial FOV
  const lastWheelTime = useRef(0);
  const wheelZoomFactor = useRef(1);

  // Gamepad state tracking
  const gamepadRef = useRef<Gamepad | null>(null);
  const [gamepadConnected, setGamepadConnected] = useState(false);

  // Store initial camera position and rotation
  const initialCameraState = useRef({
    position: new THREE.Vector3(),
    quaternion: new THREE.Quaternion(),
  });

  // Define movement boundaries (based on expo hall layout)
  const BOUNDARIES = {
    minX: -60,
    maxX: 60,
    minZ: -50,
    maxZ: 50,
  };

  // Function to check and constrain position within boundaries
  const constrainToBoundaries = (position: THREE.Vector3): THREE.Vector3 => {
    const constrainedPosition = position.clone();
    constrainedPosition.x = Math.max(
      BOUNDARIES.minX,
      Math.min(BOUNDARIES.maxX, constrainedPosition.x)
    );
    constrainedPosition.z = Math.max(
      BOUNDARIES.minZ,
      Math.min(BOUNDARIES.maxZ, constrainedPosition.z)
    );
    return constrainedPosition;
  };

  // Save initial camera state and FOV when component mounts
  useEffect(() => {
    initialCameraState.current = {
      position: camera.position.clone(),
      quaternion: camera.quaternion.clone(),
    };
    initialFOV.current = perspectiveCamera.fov;
  }, [camera, perspectiveCamera]);

  useEffect(() => {
    // Always add event listeners, but check disabled state inside handlers

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        // Left click only
        // Don't start dragging if disabled or hovering over an object
        setIsDragging(true);
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    const handleMouseMove = (e: MouseEvent) => {
      // If modal is open and camera starts moving, close it
      // if (selectedObject && (Math.abs(e.movementX) > 1 || Math.abs(e.movementY) > 1)) {
      //   closeObjectModal()
      //   return
      // }

      // Don't move camera if disabled or hovering over an object

      if (isDragging && type === "dragFPS") {
        // Create quaternions for pitch and yaw
        const pitchQuat = new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(1, 0, 0),
          e.movementY * 0.002
        );
        const yawQuat = new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(0, 1, 0),
          e.movementX * 0.002
        );

        // Apply rotations in order: yaw first, then pitch
        camera.quaternion.multiply(yawQuat);
        camera.quaternion.multiply(pitchQuat);

        // Extract the current pitch and limit it to 30 degrees up and down
        const euler = new THREE.Euler().setFromQuaternion(
          camera.quaternion,
          "YXZ"
        );
        euler.x = Math.max(-Math.PI / 6, Math.min(Math.PI / 6, euler.x)); // Limit to 30 degrees
        euler.z = 0; // Keep roll at zero
        camera.quaternion.setFromEuler(euler);

        // Force the up vector to stay vertical
        camera.up.set(0, 1, 0);
      }
    };

    // Touch event handlers
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        // Single finger
        const touch = e.touches[0];
        lastTouchPosition.current = { x: touch.clientX, y: touch.clientY };
        setIsDragging(true);
        e.preventDefault();
      } else if (e.touches.length === 2) {
        // Two fingers for pinch
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        lastPinchDistance.current = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length === 0) {
        setIsDragging(false);
        lastTouchPosition.current = null;
        lastPinchDistance.current = null;
      } else if (e.touches.length === 1) {
        lastPinchDistance.current = null;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && lastTouchPosition.current) {
        const touch = e.touches[0];
        const currentPosition = { x: touch.clientX, y: touch.clientY };

        // Calculate movement
        const movementX = currentPosition.x - lastTouchPosition.current.x;
        const movementY = currentPosition.y - lastTouchPosition.current.y;

        // If modal is open and camera starts moving, close it
        // if (selectedObject && (Math.abs(movementX) > 1 || Math.abs(movementY) > 1)) {
        //   closeObjectModal();
        //   return;
        // }

        // Don't move camera if disabled or hovering over an object
        if (isDragging && type === "dragFPS") {
          // Create quaternions for pitch and yaw (same logic as mouse)
          const pitchQuat = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(1, 0, 0),
            movementY * 0.002
          );
          const yawQuat = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(0, 1, 0),
            movementX * 0.002
          );

          // Apply rotations in order: yaw first, then pitch
          camera.quaternion.multiply(yawQuat);
          camera.quaternion.multiply(pitchQuat);

          // Extract the current pitch and limit it to 30 degrees up and down
          const euler = new THREE.Euler().setFromQuaternion(
            camera.quaternion,
            "YXZ"
          );
          euler.x = Math.max(-Math.PI / 6, Math.min(Math.PI / 6, euler.x)); // Limit to 30 degrees
          euler.z = 0; // Keep roll at zero
          camera.quaternion.setFromEuler(euler);

          // Force the up vector to stay vertical
          camera.up.set(0, 1, 0);
        }

        // Update last position for next movement calculation
        lastTouchPosition.current = currentPosition;

        e.preventDefault();
      } else if (e.touches.length === 2 && lastPinchDistance.current !== null) {
        // Handle pinch-to-zoom
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );

        // Calculate zoom factor (pinch in = zoom out, pinch out = zoom in)
        const zoomFactor = lastPinchDistance.current / currentDistance;

        // Adjust FOV (smaller FOV = more zoom)
        const newFOV = perspectiveCamera.fov * zoomFactor;

        // Limit FOV between 30 and 120 degrees
        perspectiveCamera.fov = Math.max(30, Math.min(120, newFOV));
        perspectiveCamera.updateProjectionMatrix();

        // Update last pinch distance
        lastPinchDistance.current = currentDistance;

        e.preventDefault();
      }
    };

    // Mouse events
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    // Touch events
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Gamepad event listeners
    const handleGamepadConnected = (e: GamepadEvent) => {
      console.log("Gamepad connected:", e.gamepad.id);
      gamepadRef.current = e.gamepad;
      setGamepadConnected(true);
    };

    const handleGamepadDisconnected = (e: GamepadEvent) => {
      console.log("Gamepad disconnected:", e.gamepad.id);
      gamepadRef.current = null;
      setGamepadConnected(false);
    };

    window.addEventListener("gamepadconnected", handleGamepadConnected);
    window.addEventListener("gamepaddisconnected", handleGamepadDisconnected);

    // Add wheel event handler for trackpad gestures
    const handleWheel = (e: WheelEvent) => {
      if (type === "dragFPS") {
        // Check if this is a pinch gesture (ctrlKey is set for MacOS trackpad gestures)
        if (e.ctrlKey) {
          e.preventDefault();

          // Get current time for debouncing
          const now = Date.now();
          if (now - lastWheelTime.current < 16) {
            // ~60fps
            return;
          }
          lastWheelTime.current = now;

          // Calculate zoom factor (deltaY is negative for zoom in, positive for zoom out)
          const zoomSpeed = 0.1;
          const zoomDelta = -e.deltaY * zoomSpeed;
          wheelZoomFactor.current = 1 + zoomDelta;

          // Apply zoom
          const newFOV = perspectiveCamera.fov * wheelZoomFactor.current;

          // Limit FOV between 30 and 120 degrees
          perspectiveCamera.fov = Math.max(30, Math.min(120, newFOV));
          perspectiveCamera.updateProjectionMatrix();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      // Cleanup mouse events
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);

      // Cleanup touch events
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchmove", handleTouchMove);

      // Cleanup gamepad event listeners
      window.removeEventListener("gamepadconnected", handleGamepadConnected);
      window.removeEventListener(
        "gamepaddisconnected",
        handleGamepadDisconnected
      );

      // Cleanup wheel event handler
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isDragging, camera, type, perspectiveCamera]);

  // Additional gamepad detection loop
  useEffect(() => {
    if (type === "dragFPS") {
      const checkGamepads = () => {
        const gamepads = navigator.getGamepads();
        const connectedGamepad =
          gamepads[0] || gamepads[1] || gamepads[2] || gamepads[3];

        if (connectedGamepad && !gamepadConnected) {
          console.log("Gamepad found:", connectedGamepad.id);
          setGamepadConnected(true);
          gamepadRef.current = connectedGamepad;
        } else if (!connectedGamepad && gamepadConnected) {
          console.log("No gamepad found");
          setGamepadConnected(false);
          gamepadRef.current = null;
        }
      };

      // Check immediately
      checkGamepads();

      // Check periodically
      const interval = setInterval(checkGamepads, 1500);

      return () => clearInterval(interval);
    }
  }, [type, gamepadConnected]);

  // Gamepad input handling (runs every frame)
  useFrame(() => {
    if (type === "dragFPS") {
      // Always check for gamepads, not just when gamepadConnected is true
      const gamepads = navigator.getGamepads();
      const gamepad = gamepads[0] || gamepads[1] || gamepads[2] || gamepads[3]; // Check all slots

      if (gamepad) {
        // Update connection status if not already set
        if (!gamepadConnected) {
          console.log("Gamepad detected in frame loop:", gamepad.id);
          setGamepadConnected(true);
        }

        // Right stick for camera rotation (axes 2 and 3)
        const rightStickX = gamepad.axes[2]; // Horizontal rotation (yaw)
        const rightStickY = gamepad.axes[3]; // Vertical rotation (pitch)

        // Apply deadzone to prevent drift
        const deadzone = 0.1;
        const sensitivity = 0.03;

        if (
          Math.abs(rightStickX) > deadzone ||
          Math.abs(rightStickY) > deadzone
        ) {
          // Create quaternions for pitch and yaw with proper orientation
          const pitchQuat = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(1, 0, 0),
            -rightStickY * sensitivity // Invert Y for natural camera control
          );
          const yawQuat = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(0, 1, 0),
            -rightStickX * sensitivity // Invert X for natural camera control
          );

          // Apply rotations in order: yaw first, then pitch
          camera.quaternion.multiply(yawQuat);
          camera.quaternion.multiply(pitchQuat);

          // Limit pitch to prevent camera flipping, but don't lock it completely
          const euler = new THREE.Euler().setFromQuaternion(
            camera.quaternion,
            "YXZ"
          );
          euler.x = Math.max(
            -Math.PI / 2 + 0.1,
            Math.min(Math.PI / 2 - 0.1, euler.x)
          ); // Limit pitch
          euler.z = 0; // Keep roll at zero
          camera.quaternion.setFromEuler(euler);

          // Keep the up vector pointing up
          camera.up.set(0, 1, 0);

          // Close modal if camera starts moving
          // if (selectedObject) {
          //   closeObjectModal();
          // }
        }

        // Left stick for movement (axes 0 and 1)
        const leftStickX = gamepad.axes[0]; // Strafe left/right
        const leftStickY = gamepad.axes[1]; // Move forward/backward

        if (
          Math.abs(leftStickX) > deadzone ||
          Math.abs(leftStickY) > deadzone
        ) {
          const moveSpeed = 0.1;

          // Get camera's forward and right vectors, but only use horizontal components
          const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(
            camera.quaternion
          );
          const right = new THREE.Vector3(1, 0, 0).applyQuaternion(
            camera.quaternion
          );

          // Flatten vectors to horizontal plane only
          forward.y = 0;
          right.y = 0;
          forward.normalize();
          right.normalize();

          // Apply movement only in X and Z directions
          const movement = new THREE.Vector3();
          movement.addScaledVector(forward, -leftStickY * moveSpeed);
          movement.addScaledVector(right, leftStickX * moveSpeed);

          // Add movement but keep Y position at character height
          const newPosition = camera.position.clone().add(movement);
          newPosition.y = characterHeight; // Use characterHeight parameter

          // Constrain position to boundaries
          const constrainedPosition = constrainToBoundaries(newPosition);
          camera.position.copy(constrainedPosition);

          // Close modal if camera starts moving
          // if (selectedObject) {
          //   closeObjectModal();
          // }
        }
      } else if (gamepadConnected && !gamepad) {
        // Gamepad disconnected
        setGamepadConnected(false);
      }
    }
  });

  // Update monitoring controls
  useControls({
    "Camera Position": monitor(() => {
      const x =
        typeof camera.position.x === "number"
          ? camera.position.x.toFixed(2)
          : "0.00";
      const y =
        typeof camera.position.y === "number"
          ? camera.position.y.toFixed(2)
          : "0.00";
      const z =
        typeof camera.position.z === "number"
          ? camera.position.z.toFixed(2)
          : "0.00";
      return `x: ${x}, y: ${y}, z: ${z}`;
    }),
    "Camera Rotation": monitor(() => {
      const x =
        typeof camera.rotation.x === "number"
          ? camera.rotation.x.toFixed(2)
          : "0.00";
      const y =
        typeof camera.rotation.y === "number"
          ? camera.rotation.y.toFixed(2)
          : "0.00";
      const z =
        typeof camera.rotation.z === "number"
          ? camera.rotation.z.toFixed(2)
          : "0.00";
      return `x: ${x}, y: ${y}, z: ${z}`;
    }),
    "Camera Quaternion": monitor(() => {
      const x =
        typeof camera.quaternion.x === "number"
          ? camera.quaternion.x.toFixed(2)
          : "0.00";
      const y =
        typeof camera.quaternion.y === "number"
          ? camera.quaternion.y.toFixed(2)
          : "0.00";
      const z =
        typeof camera.quaternion.z === "number"
          ? camera.quaternion.z.toFixed(2)
          : "0.00";
      const w =
        typeof camera.quaternion.w === "number"
          ? camera.quaternion.w.toFixed(2)
          : "0.00";
      return `x: ${x}, y: ${y}, z: ${z}, w: ${w}`;
    }),
    "Field of View": monitor(() => {
      return `${perspectiveCamera.fov.toFixed(1)}°`;
    }),
  });

  switch (type) {
    case "orbit":
      return (
        <OrbitControls
          mouseButtons={{ LEFT: MOUSE.LEFT }}
          rotateSpeed={1}
          enablePan={false}
          enableZoom={true}
        />
      );
    case "dragFPS":
      return null;
    default:
      return null;
  }
}
