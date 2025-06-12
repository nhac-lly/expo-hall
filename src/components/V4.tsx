import React, { useState, useRef, useMemo, Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";
import { Model as DetmayModel } from "../models/Detmay2";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Environment } from "@react-three/drei";

// Loading placeholder component
const LoadingPlaceholder = ({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

// AutoLOD component for mesh optimization
function AutoLOD({
  children,
  distance = 20,
  threshold = 0.5,
}: {
  children: React.ReactNode;
  distance?: number;
  threshold?: number;
}) {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;

    const worldPos = new THREE.Vector3();
    groupRef.current.getWorldPosition(worldPos);
    const dist = camera.position.distanceTo(worldPos);

    if (dist > distance) {
      groupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.geometry) {
          const geometry = child.geometry;

          // Only simplify if we have enough vertices
          if (
            geometry.attributes.position &&
            geometry.attributes.position.count > 1000
          ) {
            // Create a simplified version of the geometry
            const simplified = new THREE.BufferGeometry();
            const positions = geometry.attributes.position;
            const indices = geometry.index;

            if (positions && indices) {
              // Sample vertices based on distance
              const sampleRate = Math.floor(1 / threshold);
              const newIndices = [];

              for (let i = 0; i < indices.count; i += sampleRate) {
                newIndices.push(indices.getX(i));
              }

              simplified.setIndex(newIndices);
              simplified.setAttribute("position", positions);

              if (geometry.attributes.normal) {
                simplified.setAttribute("normal", geometry.attributes.normal);
              }
              if (geometry.attributes.uv) {
                simplified.setAttribute("uv", geometry.attributes.uv);
              }

              // Replace the geometry
              child.geometry.dispose(); // Clean up old geometry
              child.geometry = simplified;
            }
          }
        }
      });
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

function V4({ empty }: { empty?: boolean }) {
  const [controlType, setControlType] = useState("orbit");
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 1, z: -40 });
  const [cameraPositions, setCameraPositions] = useState<
    Array<{ position: [number, number, number]; label: string }>
  >([]);
  const [selectedModel, setSelectedModel] = useState<{
    name: string;
    cost: number;
    details: string;
  } | null>(null);
  const [selectedHotSpot, setSelectedHotSpot] = useState<{
    name: string;
    cost: number;
    details: string;
  } | null>(null);
  const [environmentRadius, setEnvironmentRadius] = useState(100);
  const [environmentMode, setEnvironmentMode] = useState("background");
  const [characterHeight, setCharacterHeight] = useState(1.7);

  // Quality settings based on device
  const isMobile = useMemo(
    () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
    []
  );

  const qualitySettings = useMemo(
    () => ({
      dpr: isMobile ? 0.5 : 1,
      antialias: !isMobile,
      shadows: !isMobile,
      precision: "lowp", // Using lowp for better performance
      performance: { min: isMobile ? 0.1 : 0.5 },
    }),
    [isMobile]
  );

  return (
    <div className="w-full h-full" style={{ position: "relative" }}>
      <Canvas
        camera={{
          position: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: qualitySettings.antialias,
          powerPreference: "high-performance",
          alpha: false,
          stencil: false,
          depth: true,
          precision: qualitySettings.precision,
          preserveDrawingBuffer: true,
        }}
        shadows={qualitySettings.shadows}
        dpr={qualitySettings.dpr}
        performance={qualitySettings.performance}
        onCreated={({ gl, size, set }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.0;
          if (qualitySettings.shadows) {
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }
        }}
      >
        <Physics>
          <group rotation={[0, -4.7, 0]}>
            <Suspense
              fallback={<LoadingPlaceholder position={[-9, 0.1, -20]} />}
            >
              {empty ? (
                <></>
              ) : (
                <group position={[-9, 0.1, -20]} rotation={[0, -4.7, 0]}>
                  <AutoLOD distance={20} threshold={0.5}>
                    <DetmayModel
                      castShadow
                      receiveShadow
                      onSelect={setSelectedModel}
                      onSelectHotSpot={setSelectedHotSpot}
                    />
                  </AutoLOD>
                </group>
              )}
            </Suspense>
          </group>
          <Environment
            files="/VR2/hall.hdr"
            {...(environmentMode === "background"
              ? { background: true }
              : {
                  ground: {
                    height: 5,
                    radius: environmentRadius,
                    scale: 150,
                  },
                })}
            environmentIntensity={0.5}
          />
        </Physics>
      </Canvas>

      {/* 2D Popup Overlay */}
      {selectedModel && (
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            background: "white",
            border: "1px solid #333",
            borderRadius: 8,
            padding: 24,
            zIndex: 10,
            minWidth: 250,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <h3>{selectedModel.name}</h3>
          <div>{selectedModel.details}</div>
          <div style={{ marginTop: 12, fontWeight: "bold" }}>
            Cost: ${selectedModel.cost}
          </div>
          <button
            style={{ marginTop: 16 }}
            onClick={() => setSelectedModel(null)}
          >
            Close
          </button>
        </div>
      )}
      {selectedHotSpot && (
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            background: "white",
            border: "1px solid #333",
            borderRadius: 8,
            padding: 24,
            zIndex: 10,
            minWidth: 250,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <h3>{selectedHotSpot.name}</h3>
          <div>{selectedHotSpot.details}</div>
          <div style={{ marginTop: 12, fontWeight: "bold" }}>
            Cost: ${selectedHotSpot.cost}
          </div>
          <button
            style={{ marginTop: 16 }}
            onClick={() => setSelectedHotSpot(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export const V4V = React.memo(V4);
