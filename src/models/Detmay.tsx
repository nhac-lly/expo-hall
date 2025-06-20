/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\Detmay\Detmay.gltf --transform --types -s 
Files: .\Detmay\Detmay.gltf [191.05KB] > C:\Users\zatag\assets\Detmay-transformed.glb [6.91MB] (-3519%)
*/

import * as THREE from 'three'
import React, { JSX, useState } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    BP_Rack_Clothes_01: THREE.Mesh
    BP_Rack_Clothes_13: THREE.Mesh
    Circle003: THREE.Mesh
    Cube002: THREE.Mesh
    Cube001: THREE.Mesh
    Cube001_1: THREE.Mesh
    Man_shoes: THREE.Mesh
    Mannequin_man: THREE.Mesh
    Plane010: THREE.Mesh
    Plane041: THREE.Mesh
    Plane041_1: THREE.Mesh
    Plane041_2: THREE.Mesh
    Plane041_3: THREE.Mesh
    Plane041_4: THREE.Mesh
    Adidas_cloth_set_014001: THREE.Mesh
    Adidas_cloth_set_014001_1: THREE.Mesh
    SM_Bag_04001: THREE.Mesh
    SM_Bag_06001: THREE.Mesh
    SM_Bag_015: THREE.Mesh
    SM_Clothes_02003: THREE.Mesh
    SM_Clothes_04: THREE.Mesh
    SM_Clothes_06: THREE.Mesh
    SM_Clothes_011002: THREE.Mesh
    SM_Clothes_024001: THREE.Mesh
    SM_Clothes_027001: THREE.Mesh
    SM_Clothes_035008: THREE.Mesh
    SM_Clothes_035009: THREE.Mesh
    SM_Clothes_040001: THREE.Mesh
    SM_Clothes_045007: THREE.Mesh
    SM_Hat_011001: THREE.Mesh
    SM_Hat_013001: THREE.Mesh
    SM_Mannequin_03: THREE.Mesh
    SM_Mannequin_03_1: THREE.Mesh
    SM_Merged_RackBag: THREE.Mesh
  }
  materials: {
    ['Inst_Rack_01.001']: THREE.MeshStandardMaterial
    ['Inst_Rack_02.002']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['mood(2).001']: THREE.MeshStandardMaterial
    ['mood(2)']: THREE.MeshStandardMaterial
    PaletteMaterial001: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    PaletteMaterial004: THREE.MeshStandardMaterial
    PaletteMaterial005: THREE.MeshStandardMaterial
    Inst_Boots_02: THREE.MeshStandardMaterial
    Inst_Boots_01: THREE.MeshStandardMaterial
    Inst_Hats_02: THREE.MeshStandardMaterial
    Inst_Clothes_02: THREE.MeshStandardMaterial
    ['Inst_Clothes_03.002']: THREE.MeshStandardMaterial
    ['Inst_Clothes_01.002']: THREE.MeshStandardMaterial
    Inst_Clothes_04: THREE.MeshStandardMaterial
    Inst_Clothes_05: THREE.MeshStandardMaterial
    Inst_Clothes_06: THREE.MeshStandardMaterial
    Inst_Clothes_08: THREE.MeshStandardMaterial
    ['Inst_Clothes_12.001']: THREE.MeshStandardMaterial
    ['Inst_Clothes_07.001']: THREE.MeshStandardMaterial
    Inst_Clothes_09: THREE.MeshStandardMaterial
    ['Inst_Hats_03.003']: THREE.MeshStandardMaterial
    ['Inst_Hats_01.003']: THREE.MeshStandardMaterial
    ['Inst_Plastic_03.001']: THREE.MeshStandardMaterial
    ['Inst_Clothes_10.001']: THREE.MeshStandardMaterial
    Inst_Hats_04: THREE.MeshStandardMaterial
  }
  animations: any[]
}

export function Model(props: JSX.IntrinsicElements['group'] & { onSelect?: (info: { name: string, cost: number, details: string }) => void }) {
  const { nodes, materials } = useGLTF('/VR/detmay-transformed.glb') as unknown as GLTFResult
  const { onSelect, ...rest } = props;
  console.log(nodes)

  return (
    <group {...rest} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.BP_Rack_Clothes_01.geometry} material={materials['Inst_Rack_01.001']} position={[-4.89, -0.037, 1.233]} rotation={[0, 1.571, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.BP_Rack_Clothes_13.geometry} material={materials['Inst_Rack_02.002']} position={[-3.366, 0.1, 6.738]} />
      <mesh castShadow receiveShadow geometry={nodes.Circle003.geometry} material={materials['Material.001']} position={[-4.609, 0.346, 1.95]} rotation={[0, 0, -Math.PI / 2]} scale={[0.312, 0.265, 0.386]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials['mood(2).001']} position={[-4.668, 2.309, -0.617]} rotation={[Math.PI, 0, Math.PI]} scale={[0.03, 0.375, 0.719]} />
      <group position={[4.226, 1.351, -2.406]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0.041, 0.842, 1.147]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials['mood(2)']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube001_1.geometry} material={materials.PaletteMaterial001} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Man_shoes.geometry} material={materials.PaletteMaterial002} position={[2.872, 0, 5.554]} rotation={[-Math.PI, 1.564, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.Mannequin_man.geometry} material={materials.PaletteMaterial003} position={[2.872, 0, 5.554]} rotation={[-Math.PI, 1.564, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane010.geometry} material={materials['Material.008']} />
      <group position={[-6.98, 2.336, 5.843]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={[0.081, 1.536, 2.334]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane041.geometry} material={materials['Material.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane041_1.geometry} material={materials['Material.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane041_2.geometry} material={materials['Material.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane041_3.geometry} material={materials['Material.005']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane041_4.geometry} material={materials['Material.006']} />
      </group>
      <group position={[2.872, 0, 5.554]} rotation={[-Math.PI, 1.564, -Math.PI]}>
        <mesh castShadow receiveShadow geometry={nodes.Adidas_cloth_set_014001.geometry} material={materials.PaletteMaterial004} />
        <mesh castShadow receiveShadow geometry={nodes.Adidas_cloth_set_014001_1.geometry} material={materials.PaletteMaterial005} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.SM_Bag_04001.geometry} material={materials.Inst_Boots_02} position={[-4.565, 0.435, -4.182]} rotation={[-Math.PI, 1.259, -Math.PI]} scale={[0.823, 0.752, 0.906]} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Bag_06001.geometry} material={materials.Inst_Boots_01} position={[-4.549, 0.439, -4.571]} rotation={[-Math.PI, 1.259, -Math.PI]} scale={[0.775, 0.828, 0.856]} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Bag_015.geometry} material={materials.Inst_Hats_02} position={[3.916, 0.962, -5.131]} rotation={[Math.PI, -1.526, 0]} scale={[-1, -0.985, -1.008]} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Clothes_02003.geometry} material={materials.Inst_Clothes_02} position={[-4.265, 2.084, -2.945]} rotation={[-Math.PI, 1.521, -Math.PI]} scale={0.892} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Clothes_04.geometry} material={materials['Inst_Clothes_03.002']} position={[-4.437, 1.572, 0.586]} rotation={[0, 0.175, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Clothes_06.geometry} material={materials['Inst_Clothes_01.002']} position={[-4.432, 1.575, -0.242]} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Clothes_011002.geometry} material={materials.Inst_Clothes_04} position={[-4.515, 1.756, -5.611]} rotation={[-Math.PI, 1.512, -Math.PI]} scale={[0.892, 0.872, 0.892]} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Clothes_024001.geometry} material={materials.Inst_Clothes_05} position={[-4.297, 1.756, -5.059]} rotation={[-Math.PI, 1.512, -Math.PI]} scale={[0.892, 0.872, 0.892]} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Clothes_027001.geometry} material={materials.Inst_Clothes_06} position={[-4.236, 1.928, -4.561]} rotation={[-Math.PI, 1.521, -Math.PI]} scale={0.759} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Clothes_035008.geometry} material={materials.Inst_Clothes_08} position={[-2.514, 1.635, 2.185]} rotation={[-Math.PI, 1.487, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Clothes_035009.geometry} material={materials['Inst_Clothes_12.001']} position={[4.362, 1.633, -3.766]} rotation={[-Math.PI, 1.487, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Clothes_040001.geometry} material={materials['Inst_Clothes_07.001']} position={[-0.627, 1.633, 6.42]} rotation={[0, 1.321, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Clothes_045007.geometry} material={materials.Inst_Clothes_09} position={[4.416, 1.633, -4.393]} rotation={[-Math.PI, 1.34, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Hat_011001.geometry} material={materials['Inst_Hats_03.003']} position={[3.943, 0.961, -5.678]} rotation={[0, -0.979, -Math.PI]} scale={[-0.992, -0.977, -1]} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Hat_013001.geometry} material={materials['Inst_Hats_01.003']} position={[3.962, 0.962, -6.247]} rotation={[0, -1.067, -Math.PI]} scale={[-0.992, -0.977, -1]} />
      <group position={[0.598, 1.292, -0.083]} rotation={[0, 1.469, 0]} scale={1.038}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_Mannequin_03.geometry}
          material={materials['Inst_Plastic_03.001']}
          onClick={(e) => {
            e.stopPropagation();
            onSelect?.({ name: 'Mannequin', cost: 120, details: 'A stylish mannequin for display.' });
          }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_Mannequin_03_1.geometry}
          material={materials['Inst_Clothes_10.001']}
          onClick={(e) => {
            e.stopPropagation();
            onSelect?.({ name: 'Mannequin Clothes', cost: 40, details: 'Clothes for the mannequin.' });
          }}
        />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.SM_Merged_RackBag.geometry} material={materials.Inst_Hats_04} position={[-2.854, -0.018, -2.205]} rotation={[0, 1.571, 0]} />
    </group>
  )
}

