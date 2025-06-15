import React from 'react'
import { Detailed, useGLTF } from '@react-three/drei'

export function LOD1({nodes,materials}) {
  return (
    <group >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l1_FLOOR.geometry}
        material={materials['Material.004']}
      />
      <group position={[0.028, 0.653, -6.094]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_panel_1.geometry}
          material={materials.M_Kitchen_Decor_1_Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_panel_2.geometry}
          material={materials.LCD05}
        />
      </group>
      <group position={[6.557, 0.001, 3.929]} rotation={[0, 0.611, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_2.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_3.geometry}
          material={materials['material0.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_4.geometry}
          material={materials['material1.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_5.geometry}
          material={materials['material2.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_6.geometry}
          material={materials['material3.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_7.geometry}
          material={materials['material4.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_8.geometry}
          material={materials['material5.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_9.geometry}
          material={materials['material6.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_10.geometry}
          material={materials['material7.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_11.geometry}
          material={materials['material8.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_12.geometry}
          material={materials['material9.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_13.geometry}
          material={materials['material10.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_14.geometry}
          material={materials['material11.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_15.geometry}
          material={materials['material12.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_16.geometry}
          material={materials['material13.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_17.geometry}
          material={materials['material14.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_18.geometry}
          material={materials['material15.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_19.geometry}
          material={materials['material16.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_20.geometry}
          material={materials['material17.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_21.geometry}
          material={materials['material18.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_22.geometry}
          material={materials['material19.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_23.geometry}
          material={materials['material20.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_24.geometry}
          material={materials['material21.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_25.geometry}
          material={materials['material22.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_26.geometry}
          material={materials['material23.001']}
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
        geometry={nodes._l2_floor.geometry}
        material={materials.M_Kitchen_Decor_1_Wood}
        position={[-10.512, 0.02, -0.963]}
      />
      <group position={[3.485, 0.038, -4.965]} scale={1.153}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_panel_1.geometry}
          material={materials['gold.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_panel_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_decor.geometry}
        material={materials['Material.071']}
        position={[-4.54, 2.004, 0.885]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.893}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_wood_decor.geometry}
        material={materials['Material.006']}
        position={[6.423, 2.38, -1.041]}
        rotation={[0, -1.571, 0]}
        scale={[0.789, 0.911, 0.911]}
      />
    </group>
  )
}


export function LOD3({nodes,materials}) {
  return (
    <group >
      <group position={[-0.416, 1.127, -4.856]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_1.geometry}
          material={materials['wood2.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_2.geometry}
          material={materials['Material.023']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_3.geometry}
          material={materials['Material.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_4.geometry}
          material={materials['Material.021']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_5.geometry}
          material={materials['Material.020']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_6.geometry}
          material={materials['Material.022']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_7.geometry}
          material={materials['Material.018']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_8.geometry}
          material={materials['Material.017']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_9.geometry}
          material={materials['wood2.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_10.geometry}
          material={materials['Material.039']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_11.geometry}
          material={materials['Material.040']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_12.geometry}
          material={materials['Material.041']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_13.geometry}
          material={materials['Material.042']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_14.geometry}
          material={materials['Material.043']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_15.geometry}
          material={materials['Material.044']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_16.geometry}
          material={materials['Material.045']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_17.geometry}
          material={materials['Material.046']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_18.geometry}
          material={materials['Material.047']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_19.geometry}
          material={materials['Material.048']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_20.geometry}
          material={materials['Material.049']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_21.geometry}
          material={materials['Material.050']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_22.geometry}
          material={materials['Material.051']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_23.geometry}
          material={materials['Material.052']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_24.geometry}
          material={materials['wood2.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_25.geometry}
          material={materials['Material.053']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_26.geometry}
          material={materials['Material.054']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_27.geometry}
          material={materials['Material.055']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_28.geometry}
          material={materials['Material.056']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_29.geometry}
          material={materials['Material.057']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_30.geometry}
          material={materials['Material.058']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_31.geometry}
          material={materials['Material.059']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_32.geometry}
          material={materials['Material.060']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_33.geometry}
          material={materials['Material.061']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_34.geometry}
          material={materials['Material.062']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_35.geometry}
          material={materials['Material.063']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_36.geometry}
          material={materials['Material.064']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_37.geometry}
          material={materials['Material.065']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_38.geometry}
          material={materials['Material.066']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_39.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_40.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_41.geometry}
          material={materials['Material.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_42.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_43.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_44.geometry}
          material={materials['Material.015']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_ke_45.geometry}
          material={materials['Material.016']}
        />
      </group>
      <group position={[0.425, 0.654, 1.988]} rotation={[0, 1.564, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao001_1.geometry}
          material={materials.M_Kitchen_Decor_1_Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao001_2.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao001_3.geometry}
          material={materials['Material.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao001_4.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao001_5.geometry}
          material={materials['Material.018']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao001_6.geometry}
          material={materials['Material.020']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_case001.geometry}
        material={materials.stoneA}
        position={[6.949, 0.561, -0.363]}
        rotation={[0, -1.571, 0]}
      />
      <group position={[6.949, 0.05, -0.363]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case_1.geometry}
          material={materials['Material.069']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case_2.geometry}
          material={materials['Material.068']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case_3.geometry}
          material={materials['glassvitrin.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case_4.geometry}
          material={materials.goldbox}
        />
      </group>
      <group position={[6.923, 0.054, 0.935]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case002_1.geometry}
          material={materials['Material.069']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case002_2.geometry}
          material={materials.goldbox}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case002_3.geometry}
          material={materials['Material.068']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case002_4.geometry}
          material={materials.stoneA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case002_5.geometry}
          material={materials['glassvitrin.002']}
        />
      </group>
      <group position={[3.242, 0.048, 3.902]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case003_1.geometry}
          material={materials['Material.069']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case003_2.geometry}
          material={materials['glassvitrin.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case003_3.geometry}
          material={materials['Material.068']}
        />
      </group>
      <group position={[4.775, 0.66, -0.548]} rotation={[0, -1.566, 0]} scale={1.382}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_product_show_1.geometry}
          material={materials['glassvitrin.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_product_show_2.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_product_show_3.geometry}
          material={materials['Material.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_case004.geometry}
        material={materials['stoneA.001']}
        position={[4.853, 0.561, 4.242]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <group position={[4.853, 0.05, 4.242]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case005_1.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case005_2.geometry}
          material={materials['Material.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case005_3.geometry}
          material={materials['glassvitrin.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_case005_4.geometry}
          material={materials['goldbox.002']}
        />
      </group>
      <group position={[0.001, 0.649, -0.364]} rotation={[-Math.PI, 1.558, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao002_1.geometry}
          material={materials['Material.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao002_2.geometry}
          material={materials['Material.025']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao002_3.geometry}
          material={materials['Material.026']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao002_4.geometry}
          material={materials['Material.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao002_5.geometry}
          material={materials['Material.028']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao002_6.geometry}
          material={materials['M_Kitchen_Decor_1_Wood.001']}
        />
      </group>
      <group position={[0.001, 0.649, 0.914]} rotation={[0, -1.558, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao003_1.geometry}
          material={materials['Material.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao003_2.geometry}
          material={materials['Material.030']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao003_3.geometry}
          material={materials['Material.031']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao003_4.geometry}
          material={materials['Material.032']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao003_5.geometry}
          material={materials['Material.033']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao003_6.geometry}
          material={materials['M_Kitchen_Decor_1_Wood.002']}
        />
      </group>
      <group position={[0.425, 0.654, 3.191]} rotation={[Math.PI, -1.564, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao004_1.geometry}
          material={materials['M_Kitchen_Decor_1_Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao004_2.geometry}
          material={materials['Material.034']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao004_3.geometry}
          material={materials['Material.035']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao004_4.geometry}
          material={materials['Material.036']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao004_5.geometry}
          material={materials['Material.037']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_sao004_6.geometry}
          material={materials['Material.038']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_light001.geometry}
        material={materials.Material}
        position={[-6.309, 2.206, 4.01]}
        scale={1.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_light003.geometry}
        material={materials['Material.076']}
        position={[-3.759, 2.206, 2.792]}
        scale={0.834}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_light004.geometry}
        material={materials['Material.077']}
        position={[-4.909, 2.206, 1.502]}
        scale={0.834}
      />
      <group position={[-2.918, 1.598, 0.151]} rotation={[Math.PI, -0.692, Math.PI]} scale={0.819}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light005_1.geometry}
          material={materials['Multi Linen Pumpkin']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light005_2.geometry}
          material={materials['WOOD::Fine::Birch Satin']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light005_3.geometry}
          material={materials['Material #3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light005_4.geometry}
          material={materials.qsovili127G3124}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light005_5.geometry}
          material={materials.qsovili129G}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light005_6.geometry}
          material={materials['Material #3213']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light005_7.geometry}
          material={materials['07 - Default12']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light005_8.geometry}
          material={materials['04 - Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light005_9.geometry}
          material={materials['09 - Default']}
        />
      </group>
      <group position={[-5.379, 1.296, 2.807]} rotation={[Math.PI, -0.692, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light002_1.geometry}
          material={materials['Multi Linen Pumpkin.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light002_2.geometry}
          material={materials['WOOD::Fine::Birch Satin.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light002_3.geometry}
          material={materials['Material #3.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light002_4.geometry}
          material={materials['qsovili127G3124.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light002_5.geometry}
          material={materials['qsovili129G.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light002_6.geometry}
          material={materials['Material #3213.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light002_7.geometry}
          material={materials['07 - Default12.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light002_8.geometry}
          material={materials['04 - Default.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light002_9.geometry}
          material={materials['09 - Default.001']}
        />
      </group>
      <group position={[-3.133, 1.23, 4.003]} rotation={[Math.PI, -0.692, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light_1.geometry}
          material={materials['Multi Linen Pumpkin.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light_2.geometry}
          material={materials['WOOD::Fine::Birch Satin.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light_3.geometry}
          material={materials['Material #3.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light_4.geometry}
          material={materials['qsovili127G3124.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light_5.geometry}
          material={materials['qsovili129G.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light_6.geometry}
          material={materials['Material #3213.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light_7.geometry}
          material={materials['07 - Default12.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light_8.geometry}
          material={materials['04 - Default.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_light_9.geometry}
          material={materials['09 - Default.002']}
        />
      </group>
    </group>
  )
}

export function LOD4({nodes,materials}) {
  return (
    <group >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_vase.geometry}
        material={materials.ceramic1}
        position={[2.959, 1.185, 3.917]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_vase001.geometry}
        material={materials.ceramic1}
        position={[2.948, 1.229, 3.641]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_vase002.geometry}
        material={materials.ceramic1}
        position={[2.937, 1.182, 3.358]}
        rotation={[0, -1.571, 0]}
      />
      <group position={[3.417, 1.185, 4.264]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase003_1.geometry}
          material={materials['wood.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase003_2.geometry}
          material={materials.vaselz}
        />
      </group>
      <group position={[3.765, 1.19, 4.247]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase004_1.geometry}
          material={materials['wood.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase004_2.geometry}
          material={materials.vaselz}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_vase005.geometry}
        material={materials.Mall_ceramic18}
        position={[6.945, 1.169, -0.361]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_tray.geometry}
        material={materials.Mall_wood2}
        position={[6.956, 0.976, -0.372]}
        rotation={[0, -1.571, 0]}
      />
      <group position={[7, 1.056, 0.758]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase006_1.geometry}
          material={materials['wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase006_2.geometry}
          material={materials['vaselz.001']}
        />
      </group>
      <group position={[6.978, 1.06, 1.575]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase007_1.geometry}
          material={materials.vaseglass5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase007_2.geometry}
          material={materials['gold.001']}
        />
      </group>
      <group position={[6.978, 1.072, 1.152]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase008_1.geometry}
          material={materials['wood.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase008_2.geometry}
          material={materials['Mall_gold1.001']}
        />
      </group>
      <group
        position={[-2.677, 0.687, -4.599]}
        rotation={[-3.123, 1.561, 3.123]}
        scale={[0.558, 0.087, 0.55]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_sofa001_1.geometry}
          material={materials.check}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_sofa001_2.geometry}
          material={materials['ipe wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_sofa001_3.geometry}
          material={materials['arm rattan']}
        />
      </group>
      <group
        position={[-4.89, 0.687, -4.611]}
        rotation={[-3.126, 1.558, 3.126]}
        scale={[0.512, 0.085, 0.54]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_sofa_1.geometry}
          material={materials['check.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_sofa_2.geometry}
          material={materials['ipe wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_sofa_3.geometry}
          material={materials['arm rattan.001']}
        />
      </group>
      <group position={[4.775, 0.66, -0.548]} rotation={[0, -1.566, 0]} scale={1.382}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase014_1.geometry}
          material={materials.M_Vase_7_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase014_2.geometry}
          material={materials.M_Vase_7}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_vase011.geometry}
        material={materials.M_Vase_5}
        position={[4.775, 0.66, -0.548]}
        rotation={[0, -1.566, 0]}
        scale={1.382}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_vase010.geometry}
        material={materials.showcaseN2_vasewhite}
        position={[4.775, 0.66, -0.548]}
        rotation={[0, -1.566, 0]}
        scale={1.382}
      />
      <group position={[4.775, 0.66, -0.548]} rotation={[0, -1.566, 0]} scale={1.382}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase016_1.geometry}
          material={materials['wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase016_2.geometry}
          material={materials['Mall_gold1.002']}
        />
      </group>
      <group position={[4.775, 0.66, -0.548]} rotation={[0, -1.566, 0]} scale={1.382}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase015_1.geometry}
          material={materials['gold.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase015_2.geometry}
          material={materials['vaseglass5.001']}
        />
      </group>
      <group position={[4.775, 0.66, -0.548]} rotation={[0, -1.566, 0]} scale={1.382}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase017_1.geometry}
          material={materials['vaselz.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase017_2.geometry}
          material={materials['wood.004']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_vase018.geometry}
        material={materials['Wave 4']}
        position={[4.775, 0.66, -0.548]}
        rotation={[0, -1.566, 0]}
        scale={1.382}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_vase012.geometry}
        material={materials['M_Vase_5.001']}
        position={[4.775, 0.66, -0.548]}
        rotation={[0, -1.566, 0]}
        scale={1.382}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_vase013.geometry}
        material={materials['M_Vase_5.002']}
        position={[4.775, 0.66, -0.548]}
        rotation={[0, -1.566, 0]}
        scale={1.382}
      />
      <group position={[6.978, 1.072, 1.152]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase009_1.geometry}
          material={materials['wood.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_vase009_2.geometry}
          material={materials['Mall_gold1.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_vase019.geometry}
        material={materials['Mall_ceramic18.001']}
        position={[4.852, 1.169, 4.237]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_tray001.geometry}
        material={materials['Mall_wood2.001']}
        position={[4.863, 0.976, 4.248]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
    </group>
  )
}

export default function ThuCong(props) {
  const [level1,level2 , level3 , level4] = useGLTF(['/V7/THUCONG_LOD/thucong_L1.glb','/V7/THUCONG_LOD/thucong_L2.glb','/V7/THUCONG_LOD/thucong_L3.glb','/V7/THUCONG_LOD/thucong_L4.glb'])

  return <group {...props}>
    <Detailed
         distances={[0, 11, 15, 25 ]}>
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
        {/* <group></group> */}
    </Detailed>
  </group>
}

// useGLTF.preload('/V7/THUCONG_LOD/thucong_L1.glb')
