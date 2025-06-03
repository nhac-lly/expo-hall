"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF, Html } from "@react-three/drei";
import React, { Suspense, useState, useEffect, useRef, useMemo } from "react";
import { ControlSelector, CameraControls, ControlType } from "./ControlSelector";
import { CameraPositionForm } from "./CameraPositionForm";
import * as THREE from 'three';
import { useFrame, useThree } from "@react-three/fiber";
import { Leva, monitor, useControls } from "leva";
import { Model as HallModel } from "../models/Hall";
import { Model as FoodModel } from "../models/Food";
import { Model as TechModel } from "../models/Tech";
import { Model as WoodModel } from "../models/Wood";
import { Model as DisplayLedModel } from "../models/Display_led";
import { Model as DetmayModel } from "../models/Detmay";
import { Model as SankhauModel } from "../models/Sankhau";
import { Model as ThucongModel } from "../models/Thucong";
import { Model as BoothThuysanModel } from "../models/Booth_thuysan";
import { Model as WayModel } from "../models/Way";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { useRapier } from "@react-three/rapier";

interface CameraPositionFormProps {
  onSubmit: (position: [number, number, number], label: string) => void;
  cameraPosition: THREE.Vector3;
  onGoTo: (position: [number, number, number]) => void;
}

// Loading placeholder component
const LoadingPlaceholder = ({ position = [0, 0, 0] }: { position?: [number, number, number] }) => {
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
        <meshBasicMaterial
          color="#4a9eff"
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
};

// Individual model component
const SingleModel = ({ modelName, position = [0, 0, 0], rotation = [0, 0, 0], isRigidBody = false }: { modelName: string, position?: [number, number, number], rotation?: [number, number, number], isRigidBody?: boolean }) => {
  const modelRef = useRef<THREE.Group>(null);
  const [modelSize, setModelSize] = useState<[number, number, number]>([2, 2, 2]);

  // Calculate model bounds when it loads
  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const size = box.getSize(new THREE.Vector3());
      setModelSize([size.x, size.y, size.z]);
    }
  }, []);

  const renderModel = () => {
    switch (modelName) {
      case 'hall':
        return <HallModel ref={modelRef} position={position} rotation={rotation} />;
      case 'food':
        return <FoodModel ref={modelRef} position={position} rotation={rotation} />;
      case 'tech':
        return <TechModel ref={modelRef} position={position} rotation={rotation} />;
      case 'wood':
        return <WoodModel ref={modelRef} position={position} rotation={rotation} />;
      case 'display_led':
        return <DisplayLedModel ref={modelRef} position={position} rotation={rotation} />;
      case 'detmay':
        return <DetmayModel ref={modelRef} position={position} rotation={rotation} />;
      case 'sankhau':
        return <SankhauModel ref={modelRef} position={position} rotation={rotation} />;
      case 'thucong':
        return <ThucongModel ref={modelRef} position={position} rotation={rotation} />;
      case 'booth_thuysan':
        return <BoothThuysanModel ref={modelRef} position={position} rotation={rotation} />;
      case 'way':
        return <WayModel ref={modelRef} position={position} rotation={rotation} />;
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

  return (
    <group>
      {renderModel()}
    </group>
  );
};

const Model = React.memo(({ curModel }: { curModel: string }) => {
  if (curModel === 'home') {
    return (
      <>
        <Suspense fallback={<LoadingPlaceholder position={[0, 0, 0]} />}>
          <SingleModel modelName="hall" position={[0, 0, 0]} />
        </Suspense>
        <Suspense fallback={<LoadingPlaceholder position={[0, 0.1, -45]} />}>
          <SingleModel modelName="sankhau" position={[0, 0.1, -45]} isRigidBody />
        </Suspense>
        <Suspense fallback={<LoadingPlaceholder position={[-11, 0.1, -10]} />}>
          <SingleModel modelName="detmay" position={[-11, 0.1, -10]} isRigidBody />
        </Suspense>
        <Suspense fallback={<LoadingPlaceholder position={[-12, 0.1, 15]} />}>
          <SingleModel modelName="tech" position={[-12, 0.1, 15]} rotation={[0, -4.7, 0]} isRigidBody />
        </Suspense>
        <Suspense fallback={<LoadingPlaceholder position={[-11, 0.1, 40]} />}>
          <SingleModel modelName="wood" position={[-11, 0.1, 40]} rotation={[0, 0, 0]} isRigidBody />
        </Suspense>
        <Suspense fallback={<LoadingPlaceholder position={[11, 0.1, -10]} />}>
          <SingleModel modelName="booth_thuysan" position={[11, 0.1, -10]} rotation={[0, 4.7, 0]} isRigidBody />
        </Suspense>
        <Suspense fallback={<LoadingPlaceholder position={[10, 0.1, 13]} />}>
          <SingleModel modelName="thucong" position={[10, 0.1, 13]} rotation={[0, 4.7, 0]} isRigidBody />
        </Suspense>
        <Suspense fallback={<LoadingPlaceholder position={[12, 0.1, 40]} />}>
          <SingleModel modelName="food" position={[12, 0.1, 40]} rotation={[0, 9.41, 0]} isRigidBody />
        </Suspense>
        <Suspense fallback={<LoadingPlaceholder position={[0, 0.1, -5]} />}>
          <SingleModel modelName="way" position={[0, 0.1, -5]} rotation={[0, 0, 0]} />
        </Suspense>
      </>
    );
  }

  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <SingleModel modelName={curModel} />
    </Suspense>
  );
});

// Define camera positions
const DEFAULT_CAMERA_POSITIONS: Array<{ position: [number, number, number], label: string }> = [
  { position: [0, 1, -40], label: 'SanKhau' },
  { position: [-3, 1, -10], label: 'Detmay' },
  { position: [-3, 1, 15], label: 'Tech' },
  { position: [-3, 1, 40], label: 'Wood' },
  { position: [3, 1, -10], label: 'BoothThuysan' },
  { position: [3, 1, 15], label: 'Thucong' },
  { position: [3, 1, 40], label: 'Food' },
];

// Create text texture function (moved from ControlSelector)
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

// Camera point component (moved from ControlSelector)
function CameraPoint({ position, label, onClick }: { position: [number, number, number], label: string, onClick: () => void }) {
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
        <meshBasicMaterial color="yellow" transparent opacity={0.7} side={THREE.DoubleSide} />
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

// Target position effect component
const TargetEffect = ({ position }: { position: THREE.Vector3 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Fade out effect
    const fadeOut = () => {
      setOpacity(prev => {
        if (prev <= 0) return 0;
        return prev - 0.02;
      });
    };

    const interval = setInterval(fadeOut, 20);
    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Pulsing effect
      const time = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(time * 5) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial
        color="#4a9eff"
        transparent
        opacity={opacity}
      />
      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial
          color="#4a9eff"
          transparent
          opacity={opacity * 0.3}
        />
      </mesh>
    </mesh>
  );
};

// Ground click effect component
const GroundClickEffect = ({ position, onComplete }: { position: THREE.Vector3, onComplete: () => void }) => {
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
      setOpacity(prev => {
        if (prev <= 0) {
          setShouldComplete(true);
          return 0;
        }
        return prev - 0.02;
      });
      setScale(prev => prev + 0.1);
    };

    const interval = setInterval(animate, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <group position={[position.x, 0.01, position.z]} rotation={[-Math.PI / 2, 0, 0]}>
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
  onAddCameraPosition,
  cameraPositions
}: {
  onAddCameraPosition: (position: [number, number, number], label: string) => void;
  cameraPositions: Array<{ position: [number, number, number], label: string }>;
}) => {
  const { camera } = useThree();
  const [targetPosition, setTargetPosition] = useState<THREE.Vector3 | null>(null);
  const [isMoving, setIsMoving] = useState(false);
  const [showTargetEffect, setShowTargetEffect] = useState(false);
  const [clickEffects, setClickEffects] = useState<Array<{ id: number, position: THREE.Vector3 }>>([]);
  const effectIdCounter = useRef(0);
  const mouseDownTime = useRef<number>(0);
  const mouseDownPoint = useRef<THREE.Vector3 | null>(null);
  const cameraBody = useRef<any>(null);

  // Function to stop camera movement
  const stopCameraMovement = () => {
    if (isMoving) {
      setIsMoving(false);
      setTargetPosition(null);
    }
  };

  // Move camera to a specific position
  const moveCamera = (position: [number, number, number]) => {
    console.log('moveCamera called with position:', position);
    const newTargetPosition = new THREE.Vector3(position[0], position[1], position[2]);
    setTargetPosition(newTargetPosition);
    setIsMoving(true);
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
          1,
          event.point.z
        );
        
        // Add new click effect
        const newEffect = {
          id: effectIdCounter.current++,
          position: event.point.clone()
        };
        setClickEffects(prev => [...prev, newEffect]);
        
        moveCamera([targetPos.x, targetPos.y, targetPos.z]);
      }
    }
  };

  // Remove completed effect
  const removeEffect = (id: number) => {
    setClickEffects(prev => prev.filter(effect => effect.id !== id));
  };

  // Add event listeners for user input
  useEffect(() => {
    const handleUserInput = () => {
      stopCameraMovement();
    };

    window.addEventListener('keydown', handleUserInput);
    window.addEventListener('wheel', handleUserInput);
    window.addEventListener('touchmove', handleUserInput);
    window.addEventListener('mousedown', handleUserInput);

    return () => {
      window.removeEventListener('keydown', handleUserInput);
      window.removeEventListener('wheel', handleUserInput);
      window.removeEventListener('touchmove', handleUserInput);
      window.removeEventListener('mousedown', handleUserInput);
    };
  }, [isMoving]);

  // Animate camera movement
  useFrame((_, delta) => {
    if (targetPosition && isMoving && cameraBody.current) {
      const distance = camera.position.distanceTo(targetPosition);
      
      if (distance < 0.01) {
        camera.position.copy(targetPosition);
        setTimeout(() => {
          stopCameraMovement();
          setShowTargetEffect(false);
        }, 1000);
        return;
      }

      // Move camera smoothly
      camera.position.lerp(targetPosition, delta * 2);
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
          console.log('Collision detected!');
          stopCameraMovement();
          setShowTargetEffect(false);
        }}
      >
        <CuboidCollider args={[0.5, 0.5, 0.5]} />
      </RigidBody>

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
      {clickEffects.map(effect => (
        <GroundClickEffect
          key={effect.id}
          position={effect.position}
          onComplete={() => removeEffect(effect.id)}
        />
      ))}

      {/* Target position effect */}
      {showTargetEffect && targetPosition && (
        <TargetEffect position={targetPosition} />
      )}

      {/* Camera points */}
      {/* {cameraPositions.map((point, index) => (
        <CameraPoint
          key={`preset-${index}`}
          position={point.position as [number, number, number]}
          label={point.label}
          onClick={() => {
            setShowTargetEffect(true);
            moveCamera(point.position as [number, number, number]);
          }}
        />
      ))} */}
    </>
  );
};

export default function GltfViewer() {
  const [controlType, setControlType] = useState<ControlType>('dragFPS');
  const [curModel, setCurModel] = useState<string>('home');
  const [cameraPositions, setCameraPositions] = useState<Array<{ position: [number, number, number], label: string }>>(DEFAULT_CAMERA_POSITIONS);
  const [cameraPosition, setCameraPosition] = useState(new THREE.Vector3(2.8, 3.4, 46));

  const handleAddCameraPosition = (position: [number, number, number], label: string) => {
    setCameraPositions(prev => [...prev, { position, label }]);
  };

  const handleGoTo = (position: [number, number, number]) => {
    setCameraPosition(new THREE.Vector3(...position));
  };

  const SelectModel = ({ curModel, setCurModel }: { curModel: string, setCurModel: (model: string) => void }) => (
    <div className="fixed top-4 left-4 z-10 bg-white/80 dark:bg-black/80 p-2 rounded-lg shadow-lg">
      <select
        value={curModel}
        onChange={(e) => setCurModel(e.target.value)}
        className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1 text-black dark:text-white"
      >
        <option value="home" className="bg-white dark:bg-black text-black dark:text-white">Home</option>
        <option value="hall" className="bg-white dark:bg-black text-black dark:text-white">Hall</option>
        <option value="food" className="bg-white dark:bg-black text-black dark:text-white">Food</option>
        <option value="tech" className="bg-white dark:bg-black text-black dark:text-white">Tech</option>
        <option value="wood" className="bg-white dark:bg-black text-black dark:text-white">Wood</option>
        <option value="display_led" className="bg-white dark:bg-black text-black dark:text-white">Display LED</option>
        <option value="detmay" className="bg-white dark:bg-black text-black dark:text-white">Detmay</option>
        <option value="sankhau" className="bg-white dark:bg-black text-black dark:text-white">Sankhau</option>
        <option value="thucong" className="bg-white dark:bg-black text-black dark:text-white">Thucong</option>
        <option value="booth_thuysan" className="bg-white dark:bg-black text-black dark:text-white">Booth Thuysan</option>
      </select>
    </div>
  );

  return (
    <div className="w-full h-full">
      <SelectModel curModel={curModel} setCurModel={setCurModel} />
      <ControlSelector type={controlType} onChange={setControlType} />
      <Canvas camera={{ position: [cameraPosition.x, cameraPosition.y, cameraPosition.z], fov: 50 }}>
        <Physics>
          <CameraManager
            onAddCameraPosition={handleAddCameraPosition}
            cameraPositions={cameraPositions}
          />
          <Suspense fallback={<LoadingPlaceholder />}>
            <Model curModel={curModel} />
          </Suspense>
          <CameraControls type={controlType} cameraPositions={cameraPositions} />
          <Environment files="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/noon-grass/noon_grass_1k.hdr" background />
        </Physics>
      </Canvas>
      {/* <CameraPositionForm 
        onSubmit={handleAddCameraPosition} 
        cameraPosition={cameraPosition}
        onGoTo={handleGoTo}
      /> */}
      <Leva />
    </div>
  );
}