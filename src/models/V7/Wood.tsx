import React from 'react'
import { Detailed, useGLTF } from '@react-three/drei'

export function LOD1({nodes,materials}) {
  return (
    <group >
      <group position={[-2.688, 0.819, -5.365]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_panel_1.geometry}
          material={materials.Display}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_panel_2.geometry}
          material={materials.LCD05}
        />
      </group>
      <group position={[-2.717, 0.2, 1.549]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_floor001_1.geometry}
          material={materials.concrete_floor_worn_001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_floor001_2.geometry}
          material={materials.wood_floor}
        />
      </group>
      <group
        position={[-8.45, 2.203, 5.523]}
        rotation={[0, -0.611, 0]}
        scale={[1.005, 2.005, 0.191]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box_2.geometry}
          material={materials['Material.003']}
        />
      </group>
    </group>
  )
}


export function LOD2({nodes,materials}) {
  return (
    <group >
      <group position={[-2.563, 4.717, -3.47]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_blocks_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_blocks_2.geometry}
          material={materials.laminate_floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_blocks_3.geometry}
          material={materials['Material.002']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_vines.geometry}
        material={materials['Material.005']}
        position={[-2.775, 2.328, -2.156]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_block.geometry}
        material={materials.concrete_floor_worn_001}
        position={[-2.717, 0.2, 0.572]}
        rotation={[0, -1.571, 0]}
      />
      <group position={[-2.861, 6.433, 2.425]} rotation={[0, -1.571, 0]} scale={1.14}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_lights_1.geometry}
          material={materials['laminate_floor.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_lights_2.geometry}
          material={materials['Material.014']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_block001.geometry}
        material={materials['concrete_floor_worn_001.001']}
        position={[-16.755, 0.2, 0.572]}
        rotation={[0, -1.571, 0]}
      />
    </group>
  )
}


export function LOD3({nodes,materials}) {
  return (
    <group >
      <group position={[3.758, 0.209, -0.08]} rotation={[0, -1.571, 0]} scale={0.263}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf003_1.geometry}
          material={materials['7ssssssssssssss']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf003_2.geometry}
          material={materials.山东色板展示03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf003_3.geometry}
          material={materials.山东色板展示10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf003_4.geometry}
          material={materials.山东色板展示02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf003_5.geometry}
          material={materials.山东色板展示11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf003_6.geometry}
          material={materials.山东色板展示01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf003_7.geometry}
          material={materials.山东色板展示08}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf003_8.geometry}
          material={materials.山东色板展示05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf003_9.geometry}
          material={materials.山东色板展示09}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf003_10.geometry}
          material={materials.山东色板展示06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf003_11.geometry}
          material={materials.山东色板展示04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf003_12.geometry}
          material={materials.山东色板展示07}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_text.geometry}
        material={materials['material0.001']}
        position={[1.106, 3.568, -1.449]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.535}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_text001.geometry}
        material={materials['material0.002']}
        position={[-5.936, 3.599, -1.458]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.535}
      />
      <group position={[1.383, 1.248, -1.34]} scale={[1.33, 1.052, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf002_1.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf002_2.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf002_3.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf002_4.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf002_5.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf002_6.geometry}
          material={materials['Material.010']}
        />
      </group>
      <group position={[-6.818, 0.172, -1.333]} scale={1.206}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf_1.geometry}
          material={materials['PhysicalMaterial.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf_2.geometry}
          material={materials['PhysicalMaterial.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf_3.geometry}
          material={materials['PhysicalMaterial.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf_4.geometry}
          material={materials['PhysicalMaterial.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf_5.geometry}
          material={materials['PhysicalMaterial.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf_6.geometry}
          material={materials['PhysicalMaterial.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf_7.geometry}
          material={materials['PhysicalMaterial.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf_8.geometry}
          material={materials['PhysicalMaterial.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf_9.geometry}
          material={materials['PhysicalMaterial.009']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_text002.geometry}
        material={materials['material0.002']}
        position={[-2.645, 1.177, 5.979]}
        rotation={[0, -0.003, 0]}
        scale={[0.789, 1.574, 0.15]}
      />
      <group position={[-6.818, 0.172, 0.284]} scale={1.206}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf004_1.geometry}
          material={materials['PhysicalMaterial.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf004_2.geometry}
          material={materials['PhysicalMaterial.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf004_3.geometry}
          material={materials['PhysicalMaterial.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf004_4.geometry}
          material={materials['PhysicalMaterial.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf004_5.geometry}
          material={materials['PhysicalMaterial.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf004_6.geometry}
          material={materials['PhysicalMaterial.015']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf004_7.geometry}
          material={materials['PhysicalMaterial.016']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf004_8.geometry}
          material={materials['PhysicalMaterial.017']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_shelf004_9.geometry}
          material={materials['PhysicalMaterial.018']}
        />
      </group>
    </group>
  )
}

export function LOD4({nodes,materials}) {
  return (
    <group >
      <group
        position={[-4.221, 0.182, 6.822]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.017}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_shelf001_1.geometry}
          material={materials['vray Material #136s']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_shelf001_2.geometry}
          material={materials['vray Material #36']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_shelf001_3.geometry}
          material={materials['vray Material #136']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_table.geometry}
        material={materials.wire_000000000}
        position={[-5.08, 0.2, 3.804]}
      />
      <group position={[-3.14, 0.2, 3.697]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_sofa_1.geometry}
          material={materials.wire_145028177}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_sofa_2.geometry}
          material={materials.wire_134006006}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_table001.geometry}
        material={materials.wire_214228153}
        position={[0.964, 0.16, 4.501]}
      />
      <group position={[0.956, 0.199, 3.566]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_chair_1.geometry}
          material={materials.wire_087225087}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_chair_2.geometry}
          material={materials.wire_088177027}
        />
      </group>
      <group position={[2.138, 0.199, 4.528]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_chair001_1.geometry}
          material={materials.wire_087225087}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_chair001_2.geometry}
          material={materials.wire_088177027}
        />
      </group>
      <group position={[-5.372, 0.2, 3.726]} rotation={[-Math.PI, 0.824, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_chair002_1.geometry}
          material={materials.wire_087225143}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_chair002_2.geometry}
          material={materials.wire_061135006}
        />
      </group>
      <group position={[3.611, 0.2, 2.956]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_cabinet_1.geometry}
          material={materials.wire_028089177}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_cabinet_2.geometry}
          material={materials['wire_028089177.001']}
        />
      </group>
    </group>
  )
}

export default function WoodModel(props) {
  const [level1,level2 , level3 , level4] = useGLTF(['/V7/WOOD_LOD/wood_L1.glb','/V7/WOOD_LOD/wood_L2.glb','/V7/WOOD_LOD/wood_L3.glb','/V7/WOOD_LOD/wood_L4.glb'])

  return <group {...props}>
    <Detailed
       distances={[10, 35, 40]}>
     <group>
          <LOD1 {...level1} />
          <LOD2 {...level2} />
          <LOD3 {...level3} />
          <LOD4 {...level4} />
        </group>
        <group>
          <LOD1 {...level1} />
          <LOD2 {...level2} />
          <LOD3 {...level3} />
        </group>
        <group>
          <LOD1 {...level1} />
          <LOD2 {...level2} />
        </group>
        {/* <LOD1 {...level1} /> */}
        {/* <group></group> */}
    </Detailed>
  </group>
}

useGLTF.preload('/V7/WOOD_LOD/wood_L1.glb')
useGLTF.preload('/V7/WOOD_LOD/wood_L2.glb')
useGLTF.preload('/V7/WOOD_LOD/wood_L3.glb')
useGLTF.preload('/V7/WOOD_LOD/wood_L4.glb')
