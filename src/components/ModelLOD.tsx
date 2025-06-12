import { useThree, useFrame } from "@react-three/fiber";
import React, { useRef, useState, Children, cloneElement } from "react";
import * as THREE from "three";

// LOD component for distance-based level switching
function ModelLOD({
  children,
  ...props
}: { children: React.ReactNode } & React.JSX.IntrinsicElements["group"]) {
  const { camera } = useThree();

  const [lodLevel, setLodLevel] = useState(0);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      const worldPos = new THREE.Vector3();
      groupRef.current.getWorldPosition(worldPos);
      const distance = camera.position.distanceTo(worldPos);
      console.log(distance);
      let lodLevel = 1; // Default to lowest detail
      if (distance < 10) {
        lodLevel = 4; // Show all levels when very close
      } else if (distance < 20) {
        lodLevel = 3; // Show up to level 3 when close
      } else if (distance < 30) {
        lodLevel = 2; // Show up to level 2 when at medium distance
      }
      setLodLevel(lodLevel);
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return cloneElement(child, { lodLevel } as any);
        }
        return child;
      })}
    </group>
  );
}

export { ModelLOD };
