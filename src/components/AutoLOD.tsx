import React, { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { LOD as ThreeLOD } from "three";

interface AutoLODProps {
  children: React.ReactNode;
  distance?: number;
  threshold?: number;
}

export function AutoLOD({
  children,
  distance = 20,
  threshold = 0.5,
}: AutoLODProps) {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    // Simplify meshes when they're far from camera
    const simplifyMeshes = () => {
      if (!groupRef.current) return;

      const worldPos = new THREE.Vector3();
      groupRef.current.getWorldPosition(worldPos);
      const dist = camera.position.distanceTo(worldPos);

      groupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.geometry) {
          const geometry = child.geometry;

          // Only simplify if we have enough vertices and we're far enough
          if (
            geometry.attributes.position &&
            geometry.attributes.position.count > 1000 &&
            dist > distance
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
    };

    // Initial simplification
    simplifyMeshes();

    // Set up an interval to check and simplify when needed
    const interval = setInterval(simplifyMeshes, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [camera, distance, threshold]);

  return <group ref={groupRef}>{children}</group>;
}
