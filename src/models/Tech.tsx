/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\Tech_v6\tech.gltf -t -s -T -S 
Files: .\Tech_v6\tech.gltf [27.59KB] > C:\Users\dev\assets\tech-transformed.glb [279.96KB] (-915%)
*/

import * as THREE from 'three'
import React, { JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane002: THREE.Mesh
    Plane003: THREE.Mesh
    Plane005: THREE.Mesh
    Plane008: THREE.Mesh
    Plane009: THREE.Mesh
    Plane010: THREE.Mesh
    Plane011: THREE.Mesh
    ['3D_TEXT_AREA_-_KHU_VỰC_ĐIỆN_TỬ_GIA_DỤNG-01']: THREE.Mesh
    ['THIET_BI_GIA_DUNG-01']: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
    ['Artboard 3.001']: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
    ['LCD06.002']: THREE.MeshStandardMaterial
    ['Artboard05.002']: THREE.MeshStandardMaterial
    ['Artboard 3.002']: THREE.MeshStandardMaterial
    ['3D TEXT AREA - KHU VỰC ĐIỆN TỬ GIA DỤNG-01.001']: THREE.MeshStandardMaterial
    ['THIET BI GIA DUNG-01.001']: THREE.MeshStandardMaterial
  }
  animations: any[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/VR/tech-transformed.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plane002.geometry} material={materials.PaletteMaterial001} position={[6.057, 0.393, 0.356]} scale={[0.609, 0.495, 0.266]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane003.geometry} material={materials['Artboard 3.001']} position={[6.057, 0.393, 0.356]} scale={[0.609, 0.495, 0.266]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane005.geometry} material={materials.PaletteMaterial002} position={[6.057, 0.393, 0.356]} scale={[0.609, 0.495, 0.266]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane008.geometry} material={materials.PaletteMaterial003} position={[6.057, 0.393, 0.356]} scale={[0.609, 0.495, 0.266]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane009.geometry} material={materials['LCD06.002']} position={[-0.059, 4.807, -6.322]} scale={[0.688, 0.559, 0.3]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane010.geometry} material={materials['Artboard05.002']} position={[6.057, 0.393, 0.356]} scale={[0.609, 0.495, 0.266]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane011.geometry} material={materials['Artboard 3.002']} position={[6.057, 0.393, 0.356]} scale={[0.609, 0.495, 0.266]} />
      <mesh castShadow receiveShadow geometry={nodes['3D_TEXT_AREA_-_KHU_VỰC_ĐIỆN_TỬ_GIA_DỤNG-01'].geometry} material={materials['3D TEXT AREA - KHU VỰC ĐIỆN TỬ GIA DỤNG-01.001']} position={[-6.676, 3.584, -1.382]} rotation={[Math.PI / 2, 0, 0.075]} scale={1.689} />
      <mesh castShadow receiveShadow geometry={nodes['THIET_BI_GIA_DUNG-01'].geometry} material={materials['THIET BI GIA DUNG-01.001']} position={[-1.019, 4.858, -1.955]} rotation={[Math.PI / 2, 0, 0]} scale={0.751} />
    </group>
  )
}