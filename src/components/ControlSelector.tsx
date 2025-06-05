"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  OrbitControls, 
  TrackballControls, 
  FirstPersonControls, 
  FlyControls, 
  MapControls, 
  DragControls,
  TransformControls,
  ArcballControls,
  Html
} from '@react-three/drei';
import { MOUSE } from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useAppStore } from '../stores/useAppStore';

export type ControlType = 
  | 'orbit' 
  | 'trackball' 
  | 'firstPerson' 
  | 'fly' 
  | 'map' 
  | 'drag'
  | 'pointerLock'
  | 'transform'
  | 'arcball'
  | 'dragFPS';

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
                <option value="dragFPS" className="bg-white dark:bg-black text-black dark:text-white">Drag FPS Controls</option>
        <option value="orbit" className="bg-white dark:bg-black text-black dark:text-white">Orbit Controls</option>
        {/* <option value="trackball" className="bg-white dark:bg-black text-black dark:text-white">Trackball Controls</option>
        <option value="firstPerson" className="bg-white dark:bg-black text-black dark:text-white">First Person Controls</option>
        <option value="fly" className="bg-white dark:bg-black text-black dark:text-white">Fly Controls</option>
        <option value="map" className="bg-white dark:bg-black text-black dark:text-white">Map Controls</option>
        <option value="drag" className="bg-white dark:bg-black text-black dark:text-white">Drag Controls</option>
        <option value="pointerLock" className="bg-white dark:bg-black text-black dark:text-white">Pointer Lock Controls</option>
        <option value="transform" className="bg-white dark:bg-black text-black dark:text-white">Transform Controls</option>
        <option value="arcball" className="bg-white dark:bg-black text-black dark:text-white">Arcball Controls</option> */}
      </select>
    </div>
  );
}



function createTextTexture(text: string) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return null;

  canvas.width = 256;
  canvas.height = 64;
  
  // Set background
  context.fillStyle = 'rgba(0, 0, 0, 0.5)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // Set text
  context.font = '24px Arial';
  context.fillStyle = 'white';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function CameraPoint({ position, label, onClick }: { position: [number, number, number], label: string, onClick: () => void }) {
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

export function CameraControls({ type, cameraPositions = [], characterHeight = 1.7 }: { type: ControlType, cameraPositions?: Array<{ position: [number, number, number], label: string }>, characterHeight?: number }) {
  const [isDragging, setIsDragging] = useState(false);
  const [showTransformControls, setShowTransformControls] = useState(false);
  const { camera } = useThree();
  
  // Use Zustand store for disabled state
  const { cameraMovementDisabled, selectedObject, closeObjectModal } = useAppStore();
  
  // Use ref to track current disabled state for event handlers
  const disabledRef = useRef(cameraMovementDisabled);
  disabledRef.current = cameraMovementDisabled;

  // Touch state tracking
  const lastTouchPosition = useRef<{ x: number, y: number } | null>(null);

  // Gamepad state tracking
  const gamepadRef = useRef<Gamepad | null>(null);
  const [gamepadConnected, setGamepadConnected] = useState(false);

  // Store initial camera position and rotation
  const initialCameraState = useRef({
    position: new THREE.Vector3(),
    quaternion: new THREE.Quaternion()
  });

  // Save initial camera state when component mounts
  useEffect(() => {
    initialCameraState.current = {
      position: camera.position.clone(),
      quaternion: camera.quaternion.clone()
    };
  }, [camera]);

  useEffect(() => {
    // Always add event listeners, but check disabled state inside handlers
    
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) { // Left click only
        // Don't start dragging if disabled or hovering over an object
        if (disabledRef.current) {
          return
        }
        setIsDragging(true);
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false)
    };
    const handleMouseMove = (e: MouseEvent) => {
      // If modal is open and camera starts moving, close it
      if (selectedObject && (Math.abs(e.movementX) > 1 || Math.abs(e.movementY) > 1)) {
        closeObjectModal()
        return
      }
      
      // Don't move camera if disabled or hovering over an object
      if (disabledRef.current) {
        return
      }
      
      if (isDragging && type === 'dragFPS') {
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

        // Extract the current pitch and keep Z at 0
        const euler = new THREE.Euler().setFromQuaternion(camera.quaternion);
        camera.quaternion.setFromEuler(euler);
        camera.quaternion.x = 0;
        camera.quaternion.z = 0;

        // Force the up vector to stay vertical
        camera.up.set(0, 3, 0);
      }
    };

    // Touch event handlers
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) { // Single finger only
        // Don't start dragging if disabled or hovering over an object
        if (disabledRef.current) {
          return
        }
        
        const touch = e.touches[0];
        lastTouchPosition.current = { x: touch.clientX, y: touch.clientY };
        setIsDragging(true);
        
        // Prevent default to avoid scrolling/zooming
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      setIsDragging(false);
      lastTouchPosition.current = null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && lastTouchPosition.current) {
        const touch = e.touches[0];
        const currentPosition = { x: touch.clientX, y: touch.clientY };
        
        // Calculate movement
        const movementX = currentPosition.x - lastTouchPosition.current.x;
        const movementY = currentPosition.y - lastTouchPosition.current.y;
        
        // If modal is open and camera starts moving, close it
        if (selectedObject && (Math.abs(movementX) > 1 || Math.abs(movementY) > 1)) {
          closeObjectModal();
          return;
        }
        
        // Don't move camera if disabled or hovering over an object
        if (disabledRef.current) {
          return;
        }
        
        if (isDragging && type === 'dragFPS') {
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

          // Extract the current pitch and keep Z at 0
          const euler = new THREE.Euler().setFromQuaternion(camera.quaternion);
          camera.quaternion.setFromEuler(euler);
          camera.quaternion.x = 0;
          camera.quaternion.z = 0;

          // Force the up vector to stay vertical
          camera.up.set(0, 3, 0);
        }
        
        // Update last position for next movement calculation
        lastTouchPosition.current = currentPosition;
        
        // Prevent default to avoid scrolling/zooming
        e.preventDefault();
      }
    };

    // Mouse events
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Touch events
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Gamepad event listeners
    const handleGamepadConnected = (e: GamepadEvent) => {
      console.log('Gamepad connected:', e.gamepad.id);
      gamepadRef.current = e.gamepad;
      setGamepadConnected(true);
    };

    const handleGamepadDisconnected = (e: GamepadEvent) => {
      console.log('Gamepad disconnected:', e.gamepad.id);
      gamepadRef.current = null;
      setGamepadConnected(false);
    };

    window.addEventListener('gamepadconnected', handleGamepadConnected);
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

    return () => {
      // Cleanup mouse events
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Cleanup touch events
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);

      // Cleanup gamepad event listeners
      window.removeEventListener('gamepadconnected', handleGamepadConnected);
      window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
    };
  }, [isDragging, camera, type]); // Remove cameraMovementDisabled from dependencies

  // Additional gamepad detection loop
  useEffect(() => {
    if (type === 'dragFPS') {
      const checkGamepads = () => {
        const gamepads = navigator.getGamepads();
        const connectedGamepad = gamepads[0] || gamepads[1] || gamepads[2] || gamepads[3];
        
        if (connectedGamepad && !gamepadConnected) {
          console.log('Gamepad found:', connectedGamepad.id);
          setGamepadConnected(true);
          gamepadRef.current = connectedGamepad;
        } else if (!connectedGamepad && gamepadConnected) {
          console.log('No gamepad found');
          setGamepadConnected(false);
          gamepadRef.current = null;
        }
      };

      // Check immediately
      checkGamepads();
      
      // Check periodically
      const interval = setInterval(checkGamepads, 1000);
      
      return () => clearInterval(interval);
    }
  }, [type, gamepadConnected]);

  // Gamepad input handling (runs every frame)
  useFrame(() => {
    if (type === 'dragFPS') {
      // Always check for gamepads, not just when gamepadConnected is true
      const gamepads = navigator.getGamepads();
      const gamepad = gamepads[0] || gamepads[1] || gamepads[2] || gamepads[3]; // Check all slots
      
      if (gamepad && !disabledRef.current) {
        // Update connection status if not already set
        if (!gamepadConnected) {
          console.log('Gamepad detected in frame loop:', gamepad.id);
          setGamepadConnected(true);
        }
        
        // Right stick for camera rotation (axes 2 and 3)
        const rightStickX = gamepad.axes[2]; // Horizontal rotation (yaw)
        const rightStickY = gamepad.axes[3]; // Vertical rotation (pitch)
        
        // Apply deadzone to prevent drift
        const deadzone = 0.1;
        const sensitivity = 0.03;
        
        if (Math.abs(rightStickX) > deadzone || Math.abs(rightStickY) > deadzone) {
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
          const euler = new THREE.Euler().setFromQuaternion(camera.quaternion, 'YXZ');
          euler.x = Math.max(-Math.PI/2 + 0.1, Math.min(Math.PI/2 - 0.1, euler.x)); // Limit pitch
          euler.z = 0; // Keep roll at zero
          camera.quaternion.setFromEuler(euler);

          // Keep the up vector pointing up
          camera.up.set(0, 1, 0);
          
          // Close modal if camera starts moving
          if (selectedObject) {
            closeObjectModal();
          }
        }
        
        // Left stick for movement (axes 0 and 1)
        const leftStickX = gamepad.axes[0]; // Strafe left/right
        const leftStickY = gamepad.axes[1]; // Move forward/backward
        
        if (Math.abs(leftStickX) > deadzone || Math.abs(leftStickY) > deadzone) {
          const moveSpeed = 0.1;
          
          // Get camera's forward and right vectors, but only use horizontal components
          const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
          const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
          
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
          camera.position.copy(newPosition);
          
          // Close modal if camera starts moving
          if (selectedObject) {
            closeObjectModal();
          }
        }
      } else if (gamepadConnected && !gamepad) {
        // Gamepad disconnected
        setGamepadConnected(false);
      }
    }
  });

  switch (type) {
    case 'orbit':
      return (
        <OrbitControls 
          mouseButtons={{ LEFT: MOUSE.LEFT }}
          rotateSpeed={1}
          enablePan={false}
          enableZoom={true}
          enabled={!cameraMovementDisabled}
        />
      );
    case 'trackball':
      return (
        <TrackballControls 
          mouseButtons={{ LEFT: MOUSE.LEFT, MIDDLE: MOUSE.MIDDLE, RIGHT: MOUSE.RIGHT }}
          rotateSpeed={1}
          noPan={true}
          zoomSpeed={1}
          staticMoving={cameraMovementDisabled}
        />
      );
    case 'firstPerson':
      return (
        <FirstPersonControls
          activeLook={isDragging && !cameraMovementDisabled}
          movementSpeed={(cameraMovementDisabled) ? 0 : 1.0}
          lookSpeed={(cameraMovementDisabled) ? 0 : 0.1}
          lookVertical={!cameraMovementDisabled}
          autoForward={false}
          heightCoef={1}
          constrainVertical={true}
          verticalMin={0}
          verticalMax={Math.PI}
        />
      );
    case 'fly':
      return (
        <FlyControls
          dragToLook={!cameraMovementDisabled}
          movementSpeed={(cameraMovementDisabled) ? 0 : 1.0}
          rollSpeed={(cameraMovementDisabled) ? 0 : 0.005}
        />
      );
    case 'map':
      return (
        <MapControls
          enableDamping={true}
          dampingFactor={0.05}
          screenSpacePanning={false}
          minDistance={1}
          maxDistance={100}
          maxPolarAngle={Math.PI / 2}
          enabled={!cameraMovementDisabled}
        />
      );
    case 'drag':
      return (
        <>
          <OrbitControls 
            mouseButtons={{ LEFT: MOUSE.LEFT }}
            rotateSpeed={1}
            enablePan={false}
            enableZoom={true}
            enabled={!cameraMovementDisabled}
          />
          <DragControls>
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          </DragControls>
        </>
      );
    case 'pointerLock':
      return (
        <mesh position={[0, 0, -5]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      );
    case 'transform':
      return (
        <>
          <OrbitControls 
            mouseButtons={{ LEFT: MOUSE.LEFT }}
            rotateSpeed={1}
            enablePan={false}
            enableZoom={true}
            enabled={!cameraMovementDisabled}
          />
          <mesh 
            position={[0, 0, 0]}
            onClick={() => !cameraMovementDisabled && setShowTransformControls(!showTransformControls)}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
          {showTransformControls && !cameraMovementDisabled && (
            <TransformControls>
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="hotpink" />
              </mesh>
            </TransformControls>
          )}
        </>
      );
    case 'arcball':
      return (
        <ArcballControls
          enablePan={false}
          enableZoom={true}
          enabled={!cameraMovementDisabled}
        />
      );
    case 'dragFPS':
      return (
        <>
          {cameraMovementDisabled && (
            <Html center>
              <div className="text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg pointer-events-none">
                Camera movement disabled - Modal open
              </div>
            </Html>
          )}
          {!cameraMovementDisabled && (
            <Html position={[0, -3, 0]}>
              <div className="text-white bg-black bg-opacity-70 px-3 py-1 rounded-lg pointer-events-none text-sm">
                {gamepadConnected 
                  ? "🎮 Gamepad Active - Left stick: Move | Right stick: Look" 
                  : "🖱️ Mouse/Touch - Drag to look | Click ground to move"}
              </div>
            </Html>
          )}
        </>
      );
    default:
      return null;
  }
}