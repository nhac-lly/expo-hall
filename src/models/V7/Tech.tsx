import React from 'react'
import { Detailed, useGLTF } from '@react-three/drei'

export function LOD1({nodes,materials}) {
  return (
    <group >
      <group position={[0.047, 8.35, -6.543]} scale={1.439}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_panel_1.geometry}
          material={materials['Display.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_panel_2.geometry}
          material={materials['LCD06.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l1_floor.geometry}
        material={materials['Flood.001']}
        position={[-0.487, 0.008, -0.165]}
        scale={[1, 1, 1.15]}
      />
      <group position={[-8.124, 0.104, 4.761]} rotation={[0, -0.611, 0]} scale={1.088}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_1.geometry}
          material={materials['Material.015']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_2.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_3.geometry}
          material={materials['material0.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_4.geometry}
          material={materials.material1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_5.geometry}
          material={materials.material2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_6.geometry}
          material={materials.material3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_7.geometry}
          material={materials.material4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_8.geometry}
          material={materials.material5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_9.geometry}
          material={materials.material6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_10.geometry}
          material={materials.material7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_11.geometry}
          material={materials.material8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_12.geometry}
          material={materials.material9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_13.geometry}
          material={materials.material10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_14.geometry}
          material={materials.material11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_15.geometry}
          material={materials.material12}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_16.geometry}
          material={materials.material13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_17.geometry}
          material={materials.material14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_18.geometry}
          material={materials.material15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_19.geometry}
          material={materials.material16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_20.geometry}
          material={materials.material17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_21.geometry}
          material={materials.material18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_22.geometry}
          material={materials.material19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_23.geometry}
          material={materials.material20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_24.geometry}
          material={materials.material21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_25.geometry}
          material={materials.material22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_26.geometry}
          material={materials.material23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_27.geometry}
          material={materials.material24}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_28.geometry}
          material={materials.material25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_29.geometry}
          material={materials.material26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_30.geometry}
          material={materials.material27}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_31.geometry}
          material={materials.material28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_32.geometry}
          material={materials.material29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_33.geometry}
          material={materials.material30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_34.geometry}
          material={materials.material31}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_35.geometry}
          material={materials.material32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box002_36.geometry}
          material={materials.material33}
        />
      </group>
    </group>
  )
}


export function LOD2({nodes,materials}) {
  return (
    <group >
      <group position={[6.298, 0.393, 0.368]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_panel_1.geometry}
          material={materials['Bumped Metal.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_panel_2.geometry}
          material={materials['Artboard 3.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_decor.geometry}
        material={materials['Blue_01.003']}
        position={[9.228, 2.103, -0.176]}
        rotation={[0, 0.037, 0]}
      />
      <group position={[10.289, 0.008, -0.879]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_booth_1.geometry}
          material={materials['Material.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_booth_2.geometry}
          material={materials['Material.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_booth_3.geometry}
          material={materials['Material.018']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_booth_4.geometry}
          material={materials['Blue Light']}
        />
      </group>
      <group position={[-0.758, 2.754, -2.263]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_panel001_1.geometry}
          material={materials['Bumped Metal.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_panel001_2.geometry}
          material={materials['Artboard 3.004']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_text.geometry}
        material={materials['3D TEXT AREA - KHU VỰC ĐIỆN TỬ GIA DỤNG-01']}
        position={[-6.977, 4.333, -1.45]}
        rotation={[Math.PI / 2, 0, 0.075]}
        scale={0.73}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_text001.geometry}
        material={materials['THIET BI GIA DUNG-01']}
        position={[-0.544, 4.491, -1.928]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_text002.geometry}
        material={materials['Blue_01.006']}
        position={[6.409, 4.612, 4.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.676, 0.551, 0.676]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_decor001.geometry}
        material={materials['Blue_01.001']}
        position={[-5.858, 3.549, -1.667]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_decor002.geometry}
        material={materials['Blue_01.001']}
        position={[2.794, 2.103, -1.663]}
        rotation={[0, -0.111, 0]}
      />
    </group>
  )
}


export function LOD3({nodes,materials}) {
  return (
    <group >
      <group position={[-1.111, 1.027, 2.595]} rotation={[0.038, 1.162, -0.012]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tv_1.geometry}
          material={materials['6565650057']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tv_2.geometry}
          material={materials['6565650055']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tv_3.geometry}
          material={materials['6565650054']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tv_4.geometry}
          material={materials['6565650053']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tv_5.geometry}
          material={materials['6565650056']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tv_6.geometry}
          material={materials['6565650045']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tv_7.geometry}
          material={materials['6565650044']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tv_8.geometry}
          material={materials['6565650046']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tv_9.geometry}
          material={materials['6565650047']}
        />
      </group>
      <group position={[-0.205, 0.519, 2.621]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_box_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_box_2.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group position={[-0.205, 0.656, 1.598]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_box001_1.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_box001_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group position={[0.79, 1.292, 1.503]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_laptop001_1.geometry}
          material={materials['laptop.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_laptop001_2.geometry}
          material={materials['laptop.002']}
        />
      </group>
      <group position={[-1.262, 0.19, 0.465]} rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_box014_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_box014_2.geometry}
          material={materials['Material.001']}
        />
      </group>
      <group position={[0.302, 0.19, 0.461]} rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_box015_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_box015_2.geometry}
          material={materials['Material.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box002.geometry}
        material={materials['Material.005']}
        position={[-4.628, 0.14, 2.527]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box003.geometry}
        material={materials['Material.005']}
        position={[-5.955, 0.14, 2.527]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box004.geometry}
        material={materials['Material.006']}
        position={[-4.628, 0.427, 2.527]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box005.geometry}
        material={materials['Material.006']}
        position={[-5.955, 0.427, 2.527]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box006.geometry}
        material={materials['Material.006']}
        position={[-7.282, 0.427, 2.527]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box007.geometry}
        material={materials['Material.005']}
        position={[-7.282, 0.14, 2.527]}
        rotation={[0, 1.571, 0]}
      />
      <group position={[-4.596, 0.983, 2.477]} rotation={[1, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_electrolux_1.geometry}
          material={materials['electrolux HOC620f']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_electrolux_2.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_electrolux_3.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group position={[-7.288, 0.995, 2.481]} rotation={[1.013, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_bep001_1.geometry}
          material={materials['Bosch plane.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_bep001_2.geometry}
          material={materials['black glass.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_bep001_3.geometry}
          material={materials['ribs.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_bep001_4.geometry}
          material={materials['bottom.001']}
        />
      </group>
      <group position={[-5.955, 0.995, 2.481]} rotation={[1.013, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_bep_1.geometry}
          material={materials['Bosch plane.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_bep_2.geometry}
          material={materials['black glass.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_bep_3.geometry}
          material={materials['ribs.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_bep_4.geometry}
          material={materials['bottom.002']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box008.geometry}
        material={materials['Material.010']}
        position={[-4.637, 0.792, 1.198]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box009.geometry}
        material={materials['Material.010']}
        position={[-5.956, 0.792, 1.198]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box010.geometry}
        material={materials['Material.010']}
        position={[-7.275, 0.792, 1.198]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box011.geometry}
        material={materials['Material.011']}
        position={[-4.628, 0.14, 1.196]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box012.geometry}
        material={materials['Material.011']}
        position={[-5.955, 0.14, 1.196]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box013.geometry}
        material={materials['Material.011']}
        position={[-7.282, 0.14, 1.196]}
        rotation={[0, 1.571, 0]}
      />
      <group
        position={[7.457, 1.75, 2.911]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.228}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Headphone001_1.geometry}
          material={materials['black.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Headphone001_2.geometry}
          material={materials['vornoi black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Headphone001_3.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Headphone001_4.geometry}
          material={materials['vornoi black.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Headphone001_5.geometry}
          material={materials['Color Plastic.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Headphone001_6.geometry}
          material={materials.leather}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Headphone001_7.geometry}
          material={materials['vornoii.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box016.geometry}
        material={materials['Material.017']}
        position={[7.468, 0.768, 2.73]}
        rotation={[0, 1.571, 0]}
        scale={[0.643, 2.354, 0.643]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box017.geometry}
        material={materials['Material.020']}
        position={[7.468, 0.126, 2.73]}
        rotation={[0, 1.571, 0]}
        scale={0.643}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box018.geometry}
        material={materials['Material.022']}
        position={[6.233, 0.126, 2.73]}
        rotation={[0, 1.571, 0]}
        scale={0.643}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box019.geometry}
        material={materials['Material.023']}
        position={[6.233, 0.768, 2.73]}
        rotation={[0, 1.571, 0]}
        scale={[0.643, 2.354, 0.643]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box020.geometry}
        material={materials['Material.024']}
        position={[4.924, 0.768, 2.73]}
        rotation={[0, 1.571, 0]}
        scale={[0.643, 2.354, 0.643]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_box021.geometry}
        material={materials['Material.025']}
        position={[4.924, 0.126, 2.73]}
        rotation={[0, 1.571, 0]}
        scale={0.643}
      />
      <group
        position={[6.21, 1.486, 2.875]}
        rotation={[-2.446, 0, Math.PI]}
        scale={[0.271, 0.01, 0.112]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_KeyboardBaru_1.geometry}
          material={materials.Key}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_KeyboardBaru_2.geometry}
          material={materials.BadanKeyboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_KeyboardBaru_3.geometry}
          material={materials.Laser}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_KeyboardBaru_4.geometry}
          material={materials.LobangCas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_KeyboardBaru_5.geometry}
          material={materials.Hjau}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_KeyboardBaru_6.geometry}
          material={materials.TextKey}
        />
      </group>
      <group position={[4.834, 1.729, 2.718]} rotation={[-Math.PI, 0.008, -Math.PI]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Speaker_1.geometry}
          material={materials['TZ素材网-厨卫篇-200020.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Speaker_2.geometry}
          material={materials['TZ素材网-厨卫篇-200020.002']}
        />
      </group>
    </group>
  )
}

export function LOD4({nodes,materials}) {
  return (
    <group >
      <group position={[-1.266, 1.751, 0.629]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_wm_1.geometry}
          material={materials.body_color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_wm_2.geometry}
          material={materials.body_color_glossy_aniso2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_wm_3.geometry}
          material={materials.body_color_glossy_aniso}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_wm_4.geometry}
          material={materials.front_panel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_wm_5.geometry}
          material={materials.radial_aniso_steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_wm_6.geometry}
          material={materials.glass_dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_wm_7.geometry}
          material={materials.metall_inside}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_wm_8.geometry}
          material={materials.black_plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_wm_9.geometry}
          material={materials.rubber_grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_wm_10.geometry}
          material={materials.metall_selector}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_wm_11.geometry}
          material={materials.led_screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_wm_12.geometry}
          material={materials.back__simple_texture}
        />
      </group>
      <group position={[0.323, 1.141, 0.475]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fridge_1.geometry}
          material={materials.Base_paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fridge_2.geometry}
          material={materials['Chrome.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fridge_3.geometry}
          material={materials.Brushed_steel_base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fridge_4.geometry}
          material={materials.Brushed_steel_base_ice}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fridge_5.geometry}
          material={materials.Text_water_cubed_crushed}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fridge_6.geometry}
          material={materials.Black_parts}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fridge_7.geometry}
          material={materials.Glass_ice}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fridge_8.geometry}
          material={materials.Grey_plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fridge_9.geometry}
          material={materials.Black_parts_ice}
        />
      </group>
      <group position={[-5.974, 1.437, 1.263]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_rc_1.geometry}
          material={materials['dianfanguo.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_rc_2.geometry}
          material={materials['3.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_rc_3.geometry}
          material={materials['dami.001']}
        />
      </group>
      <group position={[-4.693, 1.639, 1.215]} rotation={[0, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fryer_1.geometry}
          material={materials['Metal (3)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fryer_2.geometry}
          material={materials['Metal.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fryer_3.geometry}
          material={materials['Custom (1)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fryer_4.geometry}
          material={materials.Custom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_fryer_5.geometry}
          material={materials['Metal (1)']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_roomba.geometry}
        material={materials.aeneoclsbdg000031}
        position={[-7.261, 1.477, 1.216]}
      />
      <group
        position={[7.457, 1.75, 2.554]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.228}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Headphone_1.geometry}
          material={materials['black.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Headphone_2.geometry}
          material={materials['vornoi black.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Headphone_3.geometry}
          material={materials['glass.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Headphone_4.geometry}
          material={materials['vornoi black.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Headphone_5.geometry}
          material={materials['Color Plastic.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Headphone_6.geometry}
          material={materials['leather.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Headphone_7.geometry}
          material={materials['vornoii.003']}
        />
      </group>
      <group
        position={[6.209, 1.529, 2.643]}
        rotation={[-2.446, 0, Math.PI]}
        scale={[0.271, 0.01, 0.112]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_KeyboardBaru001_1.geometry}
          material={materials['Key.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_KeyboardBaru001_2.geometry}
          material={materials['BadanKeyboard.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_KeyboardBaru001_3.geometry}
          material={materials['Laser.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_KeyboardBaru001_4.geometry}
          material={materials['LobangCas.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_KeyboardBaru001_5.geometry}
          material={materials['Hjau.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_KeyboardBaru001_6.geometry}
          material={materials['TextKey.001']}
        />
      </group>
    </group>
  )
}

export default function Tech(props) {
  const [level1,level2 , level3 , level4] = useGLTF(['/V7/TECH_LOD/tech_l1.glb','/V7/TECH_LOD/tech_l2.glb','/V7/TECH_LOD/tech_l3.glb','/V7/TECH_LOD/tech_l4.glb'])

  return <group {...props}>
    <Detailed
         distances={[0, 11, 15, 25]}>
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

// useGLTF.preload('/V7/TECH_LOD/tech_L1.glb')
