import { useEffect, useRef } from "react";
import { LOD, Mesh } from "three";

export const useDispose = () => {
  const lodRef = useRef<LOD>(null);

  useEffect(() => {
    return () => {
      const lod = lodRef.current;
      if (lod) {
        // Dispose all children geometries and materials
        lod.children.forEach((child) => {
          const mesh = child as Mesh;
          mesh.geometry?.dispose?.();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose?.());
          } else {
            mesh.material?.dispose?.();
          }
        });
      }
    };
  }, []);
  return lodRef;
};
