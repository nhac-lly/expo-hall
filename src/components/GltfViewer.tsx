"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF, Html } from "@react-three/drei";
import React, {
  Suspense,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  ControlSelector,
  CameraControls,
  ControlType,
} from "./ControlSelector";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Leva, monitor, useControls } from "leva";
import { Model as FoodModel } from "../models/Food";
import { Model as TechModel } from "../models/Tech";
import { Model as WoodModel } from "../models/Wood";
import { Model as DetmayModel } from "../models/Detmay";
import { Model as ThucongModel } from "../models/Thucong";
import { Model as ThuysanModel } from "../models/Thuysan";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { create } from "zustand";

// Loading placeholder component
const LoadingPlaceholder = ({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Rotate the placeholder
    meshRef.current.rotation.y += 0.01;
    // Create a pulsing effect
    const time = state.clock.getElapsedTime();
    const scale = 1 + Math.sin(time * 2) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);

    // Add a floating effect
    meshRef.current.position.y = position[1] + Math.sin(time * 1.5) * 0.2;
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color={hovered ? "#4a9eff" : "#cccccc"}
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      {/* Add a subtle glow effect */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#4a9eff" transparent opacity={0.1} />
      </mesh>
    </group>
  );
};

// Individual model component
const SingleModel = ({
  modelName,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  isRigidBody = false,
}: {
  modelName: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  isRigidBody?: boolean;
}) => {
  const modelRef = useRef<THREE.Group>(null);

  const renderModel = () => {
    switch (modelName) {
      case "food":
        return (
          <FoodModel ref={modelRef} position={position} rotation={rotation} />
        );
      case "tech":
        return (
          <TechModel ref={modelRef} position={position} rotation={rotation} />
        );
      case "wood":
        return (
          <WoodModel ref={modelRef} position={position} rotation={rotation} />
        );
      case "detmay":
        return (
          <DetmayModel ref={modelRef} position={position} rotation={rotation} />
        );
      case "thucong":
        return (
          <ThucongModel
            ref={modelRef}
            position={position}
            rotation={rotation}
          />
        );
      case "thuysan":
        return (
          <ThuysanModel
            ref={modelRef}
            position={position}
            rotation={rotation}
          />
        );
      default:
        return null;
    }
  };

  if (isRigidBody) {
    return (
      <React.Fragment>
        <RigidBody type="fixed" colliders="cuboid">
          <CuboidCollider args={[2, 2, 2]} />
          {renderModel()}
        </RigidBody>
      </React.Fragment>
    );
  }

  return <group>{renderModel()}</group>;
};

// Replace with direct model rendering
const Model = React.memo(
  ({
    curModel,
    rotation,
  }: {
    curModel: string;
    rotation: [number, number, number];
  }) => {
    if (curModel === "home") {
      return (
        <group rotation={rotation}>
          <Suspense fallback={<LoadingPlaceholder position={[-9, 0.1, -20]} />}>
            <SingleModel
              modelName="detmay"
              position={[-9, 0.1, -20]}
              isRigidBody
            />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder position={[-8, 0.1, -1]} />}>
            <SingleModel
              modelName="tech"
              position={[-8, 0.1, -1]}
              rotation={[0, -4.7, 0]}
              isRigidBody
            />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder position={[-10, 0.1, 15]} />}>
            <SingleModel
              modelName="wood"
              position={[-10, 0.1, 15]}
              rotation={[0, -4.7, 0]}
              isRigidBody
            />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder position={[9, 0.1, -20]} />}>
            <SingleModel
              modelName="thuysan"
              position={[9, 0.1, -20]}
              rotation={[0, 4.7, 0]}
              isRigidBody
            />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder position={[9, 0.1, -4]} />}>
            <SingleModel
              modelName="thucong"
              position={[9, 0.1, -4]}
              rotation={[0, 4.7, 0]}
              isRigidBody
            />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder position={[12, 0.1, 15]} />}>
            <SingleModel
              modelName="food"
              position={[12, 0.1, 15]}
              rotation={[0, 9.41, 0]}
              isRigidBody
            />
          </Suspense>
        </group>
      );
    }

    return (
      <Suspense fallback={<LoadingPlaceholder />}>
        <SingleModel modelName={curModel} />
      </Suspense>
    );
  }
);

// Define camera positions
const DEFAULT_CAMERA_POSITIONS: Array<{
  position: [number, number, number];
  label: string;
}> = [
  { position: [0, 1, -40], label: "SanKhau" },
  { position: [-3, 1, -10], label: "Detmay" },
  { position: [-3, 1, 15], label: "Tech" },
  { position: [-3, 1, 40], label: "Wood" },
  { position: [3, 1, -10], label: "Thuysan" },
  { position: [3, 1, 15], label: "Thucong" },
  { position: [3, 1, 40], label: "Food" },
];

// Create text texture function (moved from ControlSelector)
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

// Camera point component (moved from ControlSelector)
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
      {/* Main clickable sphere */}
      <mesh onClick={onClick}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      {/* Visual indicator showing exact camera position */}
      <mesh position={[0, 0, 0]} onClick={onClick}>
        <ringGeometry args={[0.3, 0.4, 16]} />
        <meshBasicMaterial
          color="yellow"
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Label above */}
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

// Ground click effect component
const GroundClickEffect = ({
  position,
  onComplete,
}: {
  position: THREE.Vector3;
  onComplete: () => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(0.5);
  const [shouldComplete, setShouldComplete] = useState(false);

  useEffect(() => {
    if (shouldComplete) {
      onComplete();
    }
  }, [shouldComplete, onComplete]);

  useEffect(() => {
    // Expand and fade out effect
    const animate = () => {
      setOpacity((prev) => {
        if (prev <= 0) {
          setShouldComplete(true);
          return 0;
        }
        return prev - 0.02;
      });
      setScale((prev) => prev + 0.1);
    };

    const interval = setInterval(animate, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <group
      position={[position.x, 0.01, position.z]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      {/* First circle */}
      <mesh>
        <ringGeometry args={[scale, scale + 0.1, 32]} />
        <meshBasicMaterial
          color="#FFD700"
          transparent
          opacity={opacity}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Second circle (larger and more transparent) */}
      <mesh>
        <ringGeometry args={[scale + 0.2, scale + 0.3, 32]} />
        <meshBasicMaterial
          color="#FFD700"
          transparent
          opacity={opacity * 0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

// Camera manager component that runs inside Canvas
const CameraManager = ({
  onEnvironmentRadiusChange,
  onEnvironmentModeChange,
  onCharacterHeightChange,
}: {
  onEnvironmentRadiusChange: (radius: number) => void;
  onEnvironmentModeChange: (mode: string) => void;
  onCharacterHeightChange: (height: number) => void;
}) => {
  const { camera } = useThree();
  const [targetPositions, setTargetPositions] = useState<
    Array<{ id: number; position: THREE.Vector3 }>
  >([]);
  const [isMoving, setIsMoving] = useState(false);
  const targetIdCounter = useRef(0);
  const [clickEffects, setClickEffects] = useState<
    Array<{ id: number; position: THREE.Vector3 }>
  >([]);
  const effectIdCounter = useRef(0);
  const mouseDownTime = useRef<number>(0);
  const mouseDownPoint = useRef<THREE.Vector3 | null>(null);
  const cameraBody = useRef<any>(null);

  // Define movement boundaries (same as in CameraControls)
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

  // Add Leva controls for character height and asset streaming
  const {
    characterHeight,
    showEnvironmentRadius,
    environmentRadius,
    environmentMode,
    showBoundaries,
  } = useControls({
    characterHeight: {
      value: 1.7,
      min: 1,
      max: 2,
      step: 0.1,
      label: "Character Height",
    },
    showEnvironmentRadius: {
      value: false,
      label: "Show Environment Radius",
    },
    environmentRadius: {
      value: 45,
      min: 20,
      max: 2000,
      step: 10,
      label: "Environment Radius",
    },
    environmentMode: {
      value: "dome",
      options: ["background", "dome"],
      label: "Environment Mode",
    },
    showBoundaries: {
      value: false,
      label: "Show Movement Boundaries",
    },
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
  });

  // Pass the radius change to parent component
  useEffect(() => {
    onEnvironmentRadiusChange(environmentRadius);
    onEnvironmentModeChange(environmentMode);
  }, [
    environmentRadius,
    environmentMode,
    onEnvironmentRadiusChange,
    onEnvironmentModeChange,
  ]);

  // Function to stop camera movement
  const stopCameraMovement = () => {
    if (isMoving) {
      setIsMoving(false);
    }
  };

  // Move camera to a specific position
  const moveCamera = (position: [number, number, number]) => {
    console.log("moveCamera called with position:", position);
    const newTargetPosition = new THREE.Vector3(
      position[0],
      characterHeight,
      position[2]
    );
    const newId = targetIdCounter.current++;
    setTargetPositions((prev) => [
      ...prev,
      { id: newId, position: newTargetPosition },
    ]);
    setIsMoving(true);
  };

  // Remove completed target position
  const removeTargetPosition = (id: number) => {
    setTargetPositions((prev) => prev.filter((target) => target.id !== id));
  };

  // Handle ground click
  const handleGroundMouseDown = (event: any) => {
    event.stopPropagation();
    mouseDownTime.current = Date.now();
    mouseDownPoint.current = event.point.clone();
  };

  const handleGroundMouseUp = (event: any) => {
    event.stopPropagation();

    const clickDuration = Date.now() - mouseDownTime.current;
    const isQuickClick = clickDuration < 200;

    if (isQuickClick && mouseDownPoint.current) {
      const movement = event.point.distanceTo(mouseDownPoint.current);
      const isMinimalMovement = movement < 5;

      if (isMinimalMovement) {
        const targetPos = new THREE.Vector3(
          event.point.x,
          characterHeight,
          event.point.z
        );

        // Constrain target position to boundaries
        const constrainedTargetPos = constrainToBoundaries(targetPos);

        // Add new click effect
        const newEffect = {
          id: effectIdCounter.current++,
          position: event.point.clone(),
        };
        setClickEffects((prev) => [...prev, newEffect]);

        moveCamera([
          constrainedTargetPos.x,
          constrainedTargetPos.y,
          constrainedTargetPos.z,
        ]);
      }
    }
  };

  // Remove completed effect
  const removeEffect = (id: number) => {
    setClickEffects((prev) => prev.filter((effect) => effect.id !== id));
  };

  // Add event listeners for user input
  useEffect(() => {
    const handleUserInput = () => {
      stopCameraMovement();
    };

    window.addEventListener("keydown", handleUserInput);
    window.addEventListener("wheel", handleUserInput);
    window.addEventListener("touchmove", handleUserInput);
    window.addEventListener("mousedown", handleUserInput);

    return () => {
      window.removeEventListener("keydown", handleUserInput);
      window.removeEventListener("wheel", handleUserInput);
      window.removeEventListener("touchmove", handleUserInput);
      window.removeEventListener("mousedown", handleUserInput);
    };
  }, [isMoving]);

  // Animate camera movement
  useFrame((_, delta) => {
    if (targetPositions.length > 0 && isMoving && cameraBody.current) {
      const currentTarget = targetPositions[0];
      const distance = camera.position.distanceTo(currentTarget.position);

      if (distance < 0.01) {
        camera.position.copy(currentTarget.position);
        setTimeout(() => {
          removeTargetPosition(currentTarget.id);
          if (targetPositions.length <= 1) {
            stopCameraMovement();
          }
        }, 1000);
        return;
      }

      // Move camera smoothly
      camera.position.lerp(currentTarget.position, delta * 2);
      camera.updateMatrixWorld(true);
    }
  });

  return (
    <>
      {/* Camera collision body */}
      <RigidBody
        ref={cameraBody}
        type="kinematicPosition"
        colliders="cuboid"
        position={[camera.position.x, camera.position.y, camera.position.z]}
        onCollisionEnter={() => {
          console.log("Collision detected!");
          stopCameraMovement();
          setTargetPositions([]);
        }}
      >
        <CuboidCollider args={[0.5, 0.5, 0.5]} />
      </RigidBody>

      {/* Environment radius visualization */}
      {showEnvironmentRadius && environmentMode === "dome" && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
          <ringGeometry args={[environmentRadius - 2, environmentRadius, 64]} />
          <meshBasicMaterial
            color="#00ff00"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Movement boundary visualization */}
      {showBoundaries && (
        <group>
          {/* North boundary (positive Z) */}
          <mesh position={[0, 2, BOUNDARIES.maxZ]} rotation={[0, 0, 0]}>
            <planeGeometry args={[BOUNDARIES.maxX - BOUNDARIES.minX, 4]} />
            <meshBasicMaterial
              color="#ff0000"
              transparent
              opacity={0.2}
              side={THREE.DoubleSide}
              wireframe
            />
          </mesh>

          {/* South boundary (negative Z) */}
          <mesh position={[0, 2, BOUNDARIES.minZ]} rotation={[0, 0, 0]}>
            <planeGeometry args={[BOUNDARIES.maxX - BOUNDARIES.minX, 4]} />
            <meshBasicMaterial
              color="#ff0000"
              transparent
              opacity={0.2}
              side={THREE.DoubleSide}
              wireframe
            />
          </mesh>

          {/* East boundary (positive X) */}
          <mesh
            position={[BOUNDARIES.maxX, 2, 0]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <planeGeometry args={[BOUNDARIES.maxZ - BOUNDARIES.minZ, 4]} />
            <meshBasicMaterial
              color="#ff0000"
              transparent
              opacity={0.2}
              side={THREE.DoubleSide}
              wireframe
            />
          </mesh>

          {/* West boundary (negative X) */}
          <mesh
            position={[BOUNDARIES.minX, 2, 0]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <planeGeometry args={[BOUNDARIES.maxZ - BOUNDARIES.minZ, 4]} />
            <meshBasicMaterial
              color="#ff0000"
              transparent
              opacity={0.2}
              side={THREE.DoubleSide}
              wireframe
            />
          </mesh>
        </group>
      )}

      {/* Ground plane for clicking */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh
          name="ground"
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          onPointerDown={handleGroundMouseDown}
          onPointerUp={handleGroundMouseUp}
        >
          <planeGeometry args={[100, 100]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0}
            side={THREE.DoubleSide}
          />
        </mesh>
        <CuboidCollider args={[50, 0.1, 50]} />
      </RigidBody>

      {/* Ground click effects */}
      {clickEffects.map((effect) => (
        <GroundClickEffect
          key={effect.id}
          position={effect.position}
          onComplete={() => {
            removeEffect(effect.id);
            removeTargetPosition(effect.id);
            return;
          }}
        />
      ))}
    </>
  );
};
export default function GltfViewer() {
  const [controlType, setControlType] = useState<ControlType>("dragFPS");
  const [curModel, setCurModel] = useState<string>("home");
  const [cameraPositions, setCameraPositions] = useState<
    Array<{ position: [number, number, number]; label: string }>
  >(DEFAULT_CAMERA_POSITIONS);
  const [cameraPosition, setCameraPosition] = useState(
    new THREE.Vector3(-31.52, 1.7, -0.55)
  );
  const [environmentRadius, setEnvironmentRadius] = useState(45);
  const [environmentMode, setEnvironmentMode] = useState("dome");
  const [characterHeight, setCharacterHeight] = useState(1.7);

  const handleAddCameraPosition = (
    position: [number, number, number],
    label: string
  ) => {
    setCameraPositions((prev) => [...prev, { position, label }]);
  };

  const handleEnvironmentRadiusChange = (radius: number) => {
    setEnvironmentRadius(radius);
  };

  const handleEnvironmentModeChange = (mode: string) => {
    setEnvironmentMode(mode);
  };

  const SelectModel = ({
    curModel,
    setCurModel,
  }: {
    curModel: string;
    setCurModel: (model: string) => void;
  }) => (
    <div className="fixed top-4 left-4 z-10 bg-white/80 dark:bg-black/80 p-2 rounded-lg shadow-lg">
      <select
        value={curModel}
        onChange={(e) => setCurModel(e.target.value)}
        className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1 text-black dark:text-white"
      >
        <option
          value="home"
          className="bg-white dark:bg-black text-black dark:text-white"
        >
          Home
        </option>
        <option
          value="food"
          className="bg-white dark:bg-black text-black dark:text-white"
        >
          Food
        </option>
        <option
          value="tech"
          className="bg-white dark:bg-black text-black dark:text-white"
        >
          Tech
        </option>
        <option
          value="wood"
          className="bg-white dark:bg-black text-black dark:text-white"
        >
          Wood
        </option>
        <option
          value="detmay"
          className="bg-white dark:bg-black text-black dark:text-white"
        >
          Detmay
        </option>
        <option
          value="thucong"
          className="bg-white dark:bg-black text-black dark:text-white"
        >
          Thucong
        </option>
        <option
          value="thuysan"
          className="bg-white dark:bg-black text-black dark:text-white"
        >
          Thuysan
        </option>
      </select>
    </div>
  );

  return (
    <div className="w-full h-full">
      <SelectModel curModel={curModel} setCurModel={setCurModel} />
      <ControlSelector type={controlType} onChange={setControlType} />
      <Canvas
        camera={{
          position: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: false,
          stencil: false,
          depth: true,
        }}
        performance={{ min: 0.5 }}
        onCreated={({ gl, size, set }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.0;
        }}
      >
        <Physics>
          <CameraManager
            onEnvironmentRadiusChange={handleEnvironmentRadiusChange}
            onEnvironmentModeChange={handleEnvironmentModeChange}
            onCharacterHeightChange={setCharacterHeight}
          />
          <Model curModel={curModel} rotation={[0, 4.7, 0]} />
          <CameraControls
            type={controlType}
            cameraPositions={cameraPositions}
          />
          <Environment
            files="/VR2/hall.jpeg"
            {...(environmentMode === "background"
              ? { background: true }
              : {
                  ground: { height: 5, radius: environmentRadius, scale: 150 },
                })}
            environmentIntensity={0.5}
          />
        </Physics>
      </Canvas>
      <Leva />
    </div>
  );
}
