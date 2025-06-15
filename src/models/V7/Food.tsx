import React from 'react'
import { Detailed, useGLTF } from '@react-three/drei'

export function LOD1({nodes,materials}) {
  return (
    <group >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l1_Backdrop_box.geometry}
        material={materials['LCD06.002']}
        position={[-0.362, 4.93, -7.465]}
        scale={[0.738, 0.599, 0.322]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l1_Floor.geometry}
        material={materials['Material.041']}
        position={[-0.131, 0.147, 0.029]}
        rotation={[0, -1.571, 0]}
        scale={[0.932, 0.926, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l1_Main_Backdrop.geometry}
        material={materials['Ash Wood']}
        position={[-0.104, 5.892, -7.846]}
        scale={[2, 1.345, 0.414]}
      />
      <group
        position={[8.708, 2.004, 5.835]}
        rotation={[0, 0.611, 0]}
        scale={[1.005, 2.005, 0.191]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_2.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_3.geometry}
          material={materials['material0.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_4.geometry}
          material={materials['material1.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_5.geometry}
          material={materials['material2.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_6.geometry}
          material={materials['material3.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_7.geometry}
          material={materials['material4.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_8.geometry}
          material={materials['material5.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_9.geometry}
          material={materials['material6.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_10.geometry}
          material={materials['material7.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_11.geometry}
          material={materials['material8.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_12.geometry}
          material={materials['material9.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_13.geometry}
          material={materials['material10.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_14.geometry}
          material={materials['material11.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_15.geometry}
          material={materials['material12.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_16.geometry}
          material={materials['material13.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_17.geometry}
          material={materials['material14.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_18.geometry}
          material={materials['material15.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_19.geometry}
          material={materials['material16.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_20.geometry}
          material={materials['material17.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_21.geometry}
          material={materials['material18.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_22.geometry}
          material={materials['material19.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_23.geometry}
          material={materials['material20.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_24.geometry}
          material={materials['material21.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_25.geometry}
          material={materials['material22.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_26.geometry}
          material={materials['material23.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_27.geometry}
          material={materials['material24.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_28.geometry}
          material={materials['material25.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_29.geometry}
          material={materials['material26.001']}
        />
      </group>
    </group>
  )
}


export function LOD2({nodes,materials}) {
  return (
    <group >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_bamboo.geometry}
        material={materials.bamboo}
        position={[-0.131, -0.318, 0.029]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1.194, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_Circle_Banners.geometry}
        material={materials.S1}
        position={[-0.131, 9.548, 0.029]}
        rotation={[0, -1.571, 0]}
        scale={[6.431, 7.696, 6.431]}
      />
      <group
        position={[-6.667, 2.187, -4.738]}
        rotation={[Math.PI / 2, 0, -0.443]}
        scale={[3.459, 0.978, 2.215]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_Visual_led_left_1.geometry}
          material={materials['Material.043']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_Visual_led_left_2.geometry}
          material={materials['Bamboo.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_Visual_led_left_3.geometry}
          material={materials['white.001']}
        />
      </group>
      <group position={[6.249, 3.697, -4.809]} rotation={[0, -0.422, 0]} scale={0.825}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_Visual_led_right_1.geometry}
          material={materials.Bamboo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_Visual_led_right_2.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_Visual_led_right_3.geometry}
          material={materials['Material.042']}
        />
      </group>
    </group>
  )
}


export function LOD3({nodes,materials}) {
  return (
    <group >
      <group position={[-1.897, 1.298, -3.924]} scale={[0.805, 1.291, 0.003]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Meat_shelf_background_1.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Meat_shelf_background_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group position={[-3.684, 1.298, -3.924]} scale={[0.805, 1.291, 0.003]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Meat_shelf_background001_1.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Meat_shelf_background001_2.geometry}
          material={materials.Material}
        />
      </group>
      <group position={[-1.915, 1.298, -2.155]} scale={[0.805, 1.291, 0.003]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Meat_shelf_background002_1.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Meat_shelf_background002_2.geometry}
          material={materials['Material.014']}
        />
      </group>
      <group position={[-3.688, 1.298, -1.955]} scale={[0.805, 1.291, 0.003]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Meat_shelf_background003_1.geometry}
          material={materials['Material.015']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Meat_shelf_background003_2.geometry}
          material={materials['Material.016']}
        />
      </group>
      <group position={[-3.311, 0.001, 4.009]} rotation={[0, -1.571, 0]} scale={1.125}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Veges_Details_1.geometry}
          material={materials.Plywood_C_50cm}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Veges_Details_2.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Veges_Details_3.geometry}
          material={materials.Iron_Blurry_5cm}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Veges_Details_4.geometry}
          material={materials['MIROR 2']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_Veges_Details002.geometry}
        material={materials['storage basket']}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <group position={[1.986, 1.298, -2.155]} scale={[1.069, 1.291, 0.003]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Veges_shelf_background_1.geometry}
          material={materials['Material.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Veges_shelf_background_2.geometry}
          material={materials['Material.026']}
        />
      </group>
      <group position={[4.273, 1.298, -2.155]} scale={[1.069, 1.291, 0.003]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Veges_shelf_background001_1.geometry}
          material={materials['Material.028']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Veges_shelf_background001_2.geometry}
          material={materials['Material.029']}
        />
      </group>
      <group position={[4.273, 1.298, -4.097]} scale={[1.069, 1.291, 0.003]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Veges_shelf_background002_1.geometry}
          material={materials['Material.030']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Veges_shelf_background002_2.geometry}
          material={materials['Material.031']}
        />
      </group>
      <group position={[1.986, 1.298, -4.097]} scale={[1.069, 1.291, 0.003]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Veges_shelf_background003_1.geometry}
          material={materials['Material.032']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Veges_shelf_background003_2.geometry}
          material={materials['Material.033']}
        />
      </group>
      <group position={[-5.27, 0, 4.518]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['_l3_Vegestable_shelf_5&6_1'].geometry}
          material={materials['Mis-vf_black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['_l3_Vegestable_shelf_5&6_2'].geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['_l3_Vegestable_shelf_5&6_3'].geometry}
          material={materials.wood_light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['_l3_Vegestable_shelf_5&6_4'].geometry}
          material={materials.Chrome}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['_l3_Vegestable_shelf_5&6_5'].geometry}
          material={materials['Mis-vf_black-2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['_l3_Vegestable_shelf_5&6_6'].geometry}
          material={materials['Material.037']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['_l3_Vegestable_shelf_5&6_7'].geometry}
          material={materials['Material.034']}
        />
      </group>
    </group>
  )
}

export function LOD4({nodes,materials}) {
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Veges_Shelf_Details.geometry}
        material={materials['photo corn bits']}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Veges_Shelf_Details001.geometry}
        material={materials['pexels-photo-1313267']}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Veges_Shelf_Details002.geometry}
        material={materials.ee14c22e9800997a474536eadc93a1a8}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Veges_Shelf_Details003.geometry}
        material={materials['cabbage-soup-diet-1']}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Veges_Shelf_Details004.geometry}
        material={materials['photo tomato skin']}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Veges_Shelf_Details005.geometry}
        material={materials['photo {3d75f229-7087-b44d-b407-5d2c7250592e}']}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Veges_Shelf_Details006.geometry}
        material={materials['storage dark green']}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Veges_Shelf_Details007.geometry}
        material={materials['storage dark red']}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Veges_Shelf_Details008.geometry}
        material={materials['[Color_L22]1']}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Veges_Shelf_Details009.geometry}
        material={materials['storage red']}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Veges_Shelf_Details010.geometry}
        material={materials['storage orange']}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Veges_Shelf_Details011.geometry}
        material={materials['cabbage-soup-diet-1.001']}
        position={[-3.311, 0.001, 4.009]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
    </group>
  )
}

export default function DetmayModel(props) {
  const [level1,level2 , level3 , level4] = useGLTF(['/V7/FOOD_LOD/food_L1.glb','/V7/FOOD_LOD/food_L2.glb','/V7/FOOD_LOD/food_L3.glb','/V7/FOOD_LOD/food_L4.glb'])

  return <group {...props}>
    <Detailed
         distances={[0, 11, 15, 25 , 30]}>
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
        <LOD1 {...level1} />
        <group></group>
    </Detailed>
  </group>
}

useGLTF.preload('/V7/FOOD_LOD/food_L1.glb')
