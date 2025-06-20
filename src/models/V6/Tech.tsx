/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { JSX, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useThree, useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_0_1: THREE.Mesh;
    _l2_decor: THREE.Mesh;
    mesh_2: THREE.Mesh;
    mesh_2_1: THREE.Mesh;
    mesh_3: THREE.Mesh;
    mesh_3_1: THREE.Mesh;
    mesh_4: THREE.Mesh;
    mesh_4_1: THREE.Mesh;
    _l2_text: THREE.Mesh;
    _l2_text001: THREE.Mesh;
    mesh_7: THREE.Mesh;
    mesh_7_1: THREE.Mesh;
    mesh_7_2: THREE.Mesh;
    mesh_7_3: THREE.Mesh;
    mesh_7_4: THREE.Mesh;
    mesh_7_5: THREE.Mesh;
    mesh_7_6: THREE.Mesh;
    mesh_8: THREE.Mesh;
    mesh_8_1: THREE.Mesh;
    mesh_9: THREE.Mesh;
    mesh_9_1: THREE.Mesh;
    _l3_laptop001: THREE.Mesh;
    mesh_11: THREE.Mesh;
    mesh_11_1: THREE.Mesh;
    mesh_11_2: THREE.Mesh;
    mesh_11_3: THREE.Mesh;
    mesh_11_4: THREE.Mesh;
    mesh_11_5: THREE.Mesh;
    mesh_11_6: THREE.Mesh;
    mesh_11_7: THREE.Mesh;
    mesh_11_8: THREE.Mesh;
    mesh_11_9: THREE.Mesh;
    mesh_11_10: THREE.Mesh;
    mesh_11_11: THREE.Mesh;
    mesh_12: THREE.Mesh;
    mesh_12_1: THREE.Mesh;
    mesh_13: THREE.Mesh;
    mesh_13_1: THREE.Mesh;
    mesh_14: THREE.Mesh;
    mesh_14_1: THREE.Mesh;
    mesh_14_2: THREE.Mesh;
    mesh_14_3: THREE.Mesh;
    mesh_14_4: THREE.Mesh;
    mesh_14_5: THREE.Mesh;
    mesh_14_6: THREE.Mesh;
    mesh_14_7: THREE.Mesh;
    mesh_14_8: THREE.Mesh;
    _l3_box002: THREE.Mesh;
    _l3_box003: THREE.Mesh;
    _l3_box004: THREE.Mesh;
    _l3_box005: THREE.Mesh;
    _l3_box006: THREE.Mesh;
    _l3_box007: THREE.Mesh;
    mesh_21: THREE.Mesh;
    mesh_21_1: THREE.Mesh;
    mesh_21_2: THREE.Mesh;
    mesh_22: THREE.Mesh;
    mesh_22_1: THREE.Mesh;
    mesh_22_2: THREE.Mesh;
    mesh_22_3: THREE.Mesh;
    mesh_23: THREE.Mesh;
    mesh_23_1: THREE.Mesh;
    mesh_23_2: THREE.Mesh;
    _l3_box008: THREE.Mesh;
    _l3_box009: THREE.Mesh;
    _l3_box010: THREE.Mesh;
    mesh_27: THREE.Mesh;
    mesh_27_1: THREE.Mesh;
    mesh_27_2: THREE.Mesh;
    mesh_27_3: THREE.Mesh;
    mesh_27_4: THREE.Mesh;
    _l4_roomba: THREE.Mesh;
    _l3_box011: THREE.Mesh;
    _l3_box012: THREE.Mesh;
    _l3_box013: THREE.Mesh;
    _l1_floor: THREE.Mesh;
    _l2_text002: THREE.Mesh;
    mesh_31: THREE.Mesh;
    mesh_31_1: THREE.Mesh;
    mesh_31_2: THREE.Mesh;
    mesh_32: THREE.Mesh;
    mesh_32_1: THREE.Mesh;
    mesh_32_2: THREE.Mesh;
    mesh_32_3: THREE.Mesh;
    mesh_32_4: THREE.Mesh;
    _l3_box016: THREE.Mesh;
    _l3_box017: THREE.Mesh;
    _l2_decor001: THREE.Mesh;
    _l2_decor002: THREE.Mesh;
    mesh_35: THREE.Mesh;
    mesh_35_1: THREE.Mesh;
    mesh_35_2: THREE.Mesh;
    mesh_35_3: THREE.Mesh;
    mesh_35_4: THREE.Mesh;
    _l3_box018: THREE.Mesh;
    _l3_box019: THREE.Mesh;
    _l3_box020: THREE.Mesh;
    _l3_box021: THREE.Mesh;
    mesh_36: THREE.Mesh;
    mesh_36_1: THREE.Mesh;
    _l3_Speaker: THREE.Mesh;
  };
  materials: {
    ["Bumped Metal.002"]: THREE.MeshPhysicalMaterial;
    ["Artboard 3.003"]: THREE.MeshStandardMaterial;
    ["Blue_01.003"]: THREE.MeshStandardMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
    ["Blue Light"]: THREE.MeshStandardMaterial;
    ["Artboard 3.004"]: THREE.MeshStandardMaterial;
    ["Display.001"]: THREE.MeshStandardMaterial;
    ["LCD06.001"]: THREE.MeshStandardMaterial;
    ["3D TEXT AREA - KHU VỰC ĐIỆN TỬ GIA DỤNG-01"]: THREE.MeshStandardMaterial;
    ["THIET BI GIA DUNG-01"]: THREE.MeshStandardMaterial;
    ["6565650057"]: THREE.MeshPhysicalMaterial;
    ["6565650055"]: THREE.MeshPhysicalMaterial;
    ["6565650054"]: THREE.MeshPhysicalMaterial;
    ["6565650053"]: THREE.MeshPhysicalMaterial;
    ["6565650056"]: THREE.MeshPhysicalMaterial;
    ["6565650045"]: THREE.MeshPhysicalMaterial;
    ["6565650046"]: THREE.MeshPhysicalMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["laptop.001"]: THREE.MeshStandardMaterial;
    body_color: THREE.MeshPhysicalMaterial;
    body_color_glossy_aniso2: THREE.MeshPhysicalMaterial;
    body_color_glossy_aniso: THREE.MeshPhysicalMaterial;
    front_panel: THREE.MeshPhysicalMaterial;
    radial_aniso_steel: THREE.MeshPhysicalMaterial;
    glass_dark: THREE.MeshPhysicalMaterial;
    metall_inside: THREE.MeshPhysicalMaterial;
    black_plastic: THREE.MeshPhysicalMaterial;
    rubber_grey: THREE.MeshPhysicalMaterial;
    metall_selector: THREE.MeshStandardMaterial;
    led_screen: THREE.MeshPhysicalMaterial;
    back__simple_texture: THREE.MeshPhysicalMaterial;
    Base_paint: THREE.MeshPhysicalMaterial;
    ["Chrome.001"]: THREE.MeshPhysicalMaterial;
    Brushed_steel_base: THREE.MeshPhysicalMaterial;
    Brushed_steel_base_ice: THREE.MeshPhysicalMaterial;
    Text_water_cubed_crushed: THREE.MeshPhysicalMaterial;
    Black_parts: THREE.MeshPhysicalMaterial;
    Glass_ice: THREE.MeshPhysicalMaterial;
    Grey_plastic: THREE.MeshPhysicalMaterial;
    Black_parts_ice: THREE.MeshPhysicalMaterial;
    ["electrolux HOC620f"]: THREE.MeshPhysicalMaterial;
    ["Material.012"]: THREE.MeshPhysicalMaterial;
    ["Material.013"]: THREE.MeshPhysicalMaterial;
    ["Bosch plane.001"]: THREE.MeshPhysicalMaterial;
    ["black glass.001"]: THREE.MeshPhysicalMaterial;
    ["ribs.001"]: THREE.MeshPhysicalMaterial;
    ["bottom.001"]: THREE.MeshPhysicalMaterial;
    ["dianfanguo.001"]: THREE.MeshStandardMaterial;
    ["3.001"]: THREE.MeshStandardMaterial;
    ["dami.001"]: THREE.MeshStandardMaterial;
    ["Metal (3)"]: THREE.MeshPhysicalMaterial;
    ["Metal.002"]: THREE.MeshPhysicalMaterial;
    ["Custom (1)"]: THREE.MeshPhysicalMaterial;
    Custom: THREE.MeshPhysicalMaterial;
    ["Metal (1)"]: THREE.MeshPhysicalMaterial;
    aeneoclsbdg000031: THREE.MeshPhysicalMaterial;
    ["Flood.001"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["material0.002"]: THREE.MeshPhysicalMaterial;
    ["black.001"]: THREE.MeshStandardMaterial;
    ["vornoi black"]: THREE.MeshStandardMaterial;
    glass: THREE.MeshStandardMaterial;
    ["Color Plastic.001"]: THREE.MeshStandardMaterial;
    leather: THREE.MeshStandardMaterial;
    ["leather.001"]: THREE.MeshStandardMaterial;
    TextKey: THREE.MeshStandardMaterial;
    ["TZ素材网-厨卫篇-200020.001"]: THREE.MeshPhysicalMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/V4/tech-t.glb"
  ) as unknown as GLTFResult;

  const { camera } = useThree();
  const [lodLevel, setLodLevel] = useState(0);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      const worldPos = new THREE.Vector3();
      groupRef.current.getWorldPosition(worldPos);
      const distance = camera.position.distanceTo(worldPos);
      setLodLevel(
        distance <= 12 ? 3 : distance <= 20 ? 2 : distance <= 30 ? 1 : 0
      );
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      {/* Level 1 Components */}
      <group name="_l1_panel" position={[0.0469, 8.35, -6.543]} scale={1.4387}>
        <mesh
          name="mesh_4"
          castShadow
          receiveShadow
          geometry={nodes.mesh_4.geometry}
          material={materials["Display.001"]}
        />
        <mesh
          name="mesh_4_1"
          castShadow
          receiveShadow
          geometry={nodes.mesh_4_1.geometry}
          material={materials["LCD06.001"]}
        />
      </group>
      <mesh
        name="_l1_floor"
        castShadow
        receiveShadow
        geometry={nodes._l1_floor.geometry}
        material={materials["Flood.001"]}
        position={[-0.4866, 0.0081, -0.1645]}
        scale={[1, 1, 1.1503]}
      />
      <group
        name="_l1_Sign_Box002"
        position={[-8.124, 0.1043, 4.7614]}
        rotation={[0, -0.6109, 0]}
        scale={1.0878}
      >
        <mesh
          name="mesh_31"
          castShadow
          receiveShadow
          geometry={nodes.mesh_31.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          name="mesh_31_1"
          castShadow
          receiveShadow
          geometry={nodes.mesh_31_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="mesh_31_2"
          castShadow
          receiveShadow
          geometry={nodes.mesh_31_2.geometry}
          material={materials["material0.002"]}
        />
      </group>

      {/* Level 2 Components */}
      {lodLevel > 0 && (
        <>
          <group name="_l2_panel" position={[6.2979, 0.3927, 0.368]}>
            <mesh
              name="mesh_0"
              castShadow
              receiveShadow
              geometry={nodes.mesh_0.geometry}
              material={materials["Bumped Metal.002"]}
            />
            <mesh
              name="mesh_0_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_0_1.geometry}
              material={materials["Artboard 3.003"]}
            />
          </group>
          <mesh
            name="_l2_decor"
            castShadow
            receiveShadow
            geometry={nodes._l2_decor.geometry}
            material={materials["Blue_01.003"]}
            position={[9.2277, 2.103, -0.1763]}
            rotation={[0, 0.0373, 0]}
          />
          <group name="_l2_booth" position={[10.2886, 0.0081, -0.8795]}>
            <mesh
              name="mesh_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_2.geometry}
              material={materials["Material.019"]}
            />
            <mesh
              name="mesh_2_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_2_1.geometry}
              material={materials["Blue Light"]}
            />
          </group>
          <group name="_l2_panel001" position={[-0.7576, 2.7538, -2.2629]}>
            <mesh
              name="mesh_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh_3.geometry}
              material={materials["Bumped Metal.002"]}
            />
            <mesh
              name="mesh_3_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_3_1.geometry}
              material={materials["Artboard 3.004"]}
            />
          </group>
          <mesh
            name="_l2_text"
            castShadow
            receiveShadow
            geometry={nodes._l2_text.geometry}
            material={materials["3D TEXT AREA - KHU VỰC ĐIỆN TỬ GIA DỤNG-01"]}
            position={[-6.977, 4.333, -1.45]}
            rotation={[Math.PI / 2, 0, 0.0751]}
            scale={0.7304}
          />
          <mesh
            name="_l2_text001"
            castShadow
            receiveShadow
            geometry={nodes._l2_text001.geometry}
            material={materials["THIET BI GIA DUNG-01"]}
            position={[-0.5439, 4.4914, -1.9278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.9}
          />
          <mesh
            name="_l2_text002"
            castShadow
            receiveShadow
            geometry={nodes._l2_text002.geometry}
            material={materials["Blue_01.003"]}
            position={[6.4093, 4.6119, 4.0102]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.6758, 0.551, 0.6758]}
          />
          <mesh
            name="_l2_decor001"
            castShadow
            receiveShadow
            geometry={nodes._l2_decor001.geometry}
            material={materials["Blue_01.003"]}
            position={[-5.8576, 3.5491, -1.667]}
          />
          <mesh
            name="_l2_decor002"
            castShadow
            receiveShadow
            geometry={nodes._l2_decor002.geometry}
            material={materials["Blue_01.003"]}
            position={[2.7941, 2.103, -1.6634]}
            rotation={[0, -0.1105, 0]}
          />
        </>
      )}

      {/* Level 3 Components */}
      {lodLevel > 1 && (
        <>
          <group
            name="_l3_tv"
            position={[-1.111, 1.0266, 2.5951]}
            rotation={[0.0383, 1.1621, -0.0117]}
          >
            <mesh
              name="mesh_7"
              castShadow
              receiveShadow
              geometry={nodes.mesh_7.geometry}
              material={materials["6565650057"]}
            />
            <mesh
              name="mesh_7_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_7_1.geometry}
              material={materials["6565650055"]}
            />
            <mesh
              name="mesh_7_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_7_2.geometry}
              material={materials["6565650054"]}
            />
            <mesh
              name="mesh_7_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh_7_3.geometry}
              material={materials["6565650053"]}
            />
            <mesh
              name="mesh_7_4"
              castShadow
              receiveShadow
              geometry={nodes.mesh_7_4.geometry}
              material={materials["6565650056"]}
            />
            <mesh
              name="mesh_7_5"
              castShadow
              receiveShadow
              geometry={nodes.mesh_7_5.geometry}
              material={materials["6565650045"]}
            />
            <mesh
              name="mesh_7_6"
              castShadow
              receiveShadow
              geometry={nodes.mesh_7_6.geometry}
              material={materials["6565650046"]}
            />
          </group>
          <group
            name="_l3_box"
            position={[-0.2054, 0.5192, 2.6211]}
            rotation={[0, -1.5705, 0]}
          >
            <mesh
              name="mesh_8"
              castShadow
              receiveShadow
              geometry={nodes.mesh_8.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              name="mesh_8_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_8_1.geometry}
              material={materials["Material.004"]}
            />
          </group>
          <group
            name="_l3_box001"
            position={[-0.2054, 0.6561, 1.598]}
            rotation={[0, -1.5705, 0]}
          >
            <mesh
              name="mesh_9"
              castShadow
              receiveShadow
              geometry={nodes.mesh_9.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              name="mesh_9_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_9_1.geometry}
              material={materials["Material.004"]}
            />
          </group>
          <mesh
            name="_l3_laptop001"
            castShadow
            receiveShadow
            geometry={nodes._l3_laptop001.geometry}
            material={materials["laptop.001"]}
            position={[0.7898, 1.2923, 1.5026]}
          />
          <group
            name="_l3_box014"
            position={[-1.2623, 0.19, 0.4648]}
            rotation={[0, 1.5705, 0]}
          >
            <mesh
              name="mesh_12"
              castShadow
              receiveShadow
              geometry={nodes.mesh_12.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              name="mesh_12_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_12_1.geometry}
              material={materials["Material.004"]}
            />
          </group>
          <group
            name="_l3_box015"
            position={[0.3022, 0.19, 0.461]}
            rotation={[0, 1.5705, 0]}
          >
            <mesh
              name="mesh_13"
              castShadow
              receiveShadow
              geometry={nodes.mesh_13.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              name="mesh_13_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_13_1.geometry}
              material={materials["Material.004"]}
            />
          </group>
          <mesh
            name="_l3_box002"
            castShadow
            receiveShadow
            geometry={nodes._l3_box002.geometry}
            material={materials["Material.004"]}
            position={[-4.6281, 0.1399, 2.5271]}
            rotation={[0, 1.5705, 0]}
          />
          <mesh
            name="_l3_box003"
            castShadow
            receiveShadow
            geometry={nodes._l3_box003.geometry}
            material={materials["Material.004"]}
            position={[-5.9552, 0.1399, 2.5271]}
            rotation={[0, 1.5705, 0]}
          />
          <mesh
            name="_l3_box004"
            castShadow
            receiveShadow
            geometry={nodes._l3_box004.geometry}
            material={materials["Material.003"]}
            position={[-4.6281, 0.4267, 2.5271]}
            rotation={[0, 1.5705, 0]}
          />
          <mesh
            name="_l3_box005"
            castShadow
            receiveShadow
            geometry={nodes._l3_box005.geometry}
            material={materials["Material.003"]}
            position={[-5.9552, 0.4267, 2.5271]}
            rotation={[0, 1.5705, 0]}
          />
          <mesh
            name="_l3_box006"
            castShadow
            receiveShadow
            geometry={nodes._l3_box006.geometry}
            material={materials["Material.003"]}
            position={[-7.2823, 0.4267, 2.5271]}
            rotation={[0, 1.5705, 0]}
          />
          <mesh
            name="_l3_box007"
            castShadow
            receiveShadow
            geometry={nodes._l3_box007.geometry}
            material={materials["Material.004"]}
            position={[-7.2823, 0.1399, 2.5271]}
            rotation={[0, 1.5705, 0]}
          />
          <group
            name="_l3_electrolux"
            position={[-4.5959, 0.9829, 2.4774]}
            rotation={[0.9997, 0, 0]}
          >
            <mesh
              name="mesh_21"
              castShadow
              receiveShadow
              geometry={nodes.mesh_21.geometry}
              material={materials["electrolux HOC620f"]}
            />
            <mesh
              name="mesh_21_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_21_1.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              name="mesh_21_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_21_2.geometry}
              material={materials["Material.013"]}
            />
          </group>
          <group
            name="_l3_bep001"
            position={[-7.2879, 0.9953, 2.4809]}
            rotation={[1.0131, 0, 0]}
          >
            <mesh
              name="mesh_22"
              castShadow
              receiveShadow
              geometry={nodes.mesh_22.geometry}
              material={materials["Bosch plane.001"]}
            />
            <mesh
              name="mesh_22_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_22_1.geometry}
              material={materials["black glass.001"]}
            />
            <mesh
              name="mesh_22_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_22_2.geometry}
              material={materials["ribs.001"]}
            />
            <mesh
              name="mesh_22_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh_22_3.geometry}
              material={materials["bottom.001"]}
            />
          </group>
          <group
            name="_l3_bep"
            position={[-5.9553, 0.9953, 2.4809]}
            rotation={[1.0131, 0, 0]}
          >
            <mesh
              name="mesh_22"
              castShadow
              receiveShadow
              geometry={nodes.mesh_22.geometry}
              material={materials["Bosch plane.001"]}
            />
            <mesh
              name="mesh_22_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_22_1.geometry}
              material={materials["black glass.001"]}
            />
            <mesh
              name="mesh_22_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_22_2.geometry}
              material={materials["ribs.001"]}
            />
            <mesh
              name="mesh_22_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh_22_3.geometry}
              material={materials["bottom.001"]}
            />
          </group>
          <mesh
            name="_l3_box008"
            castShadow
            receiveShadow
            geometry={nodes._l3_box008.geometry}
            material={materials["Material.003"]}
            position={[-4.6373, 0.7921, 1.198]}
            rotation={[0, 1.5705, 0]}
          />
          <mesh
            name="_l3_box009"
            castShadow
            receiveShadow
            geometry={nodes._l3_box009.geometry}
            material={materials["Material.003"]}
            position={[-5.956, 0.7921, 1.198]}
            rotation={[0, 1.5705, 0]}
          />
          <mesh
            name="_l3_box010"
            castShadow
            receiveShadow
            geometry={nodes._l3_box010.geometry}
            material={materials["Material.003"]}
            position={[-7.2747, 0.7921, 1.198]}
            rotation={[0, 1.5705, 0]}
          />
          <mesh
            name="_l3_box011"
            castShadow
            receiveShadow
            geometry={nodes._l3_box011.geometry}
            material={materials["Material.004"]}
            position={[-4.6281, 0.1399, 1.1963]}
            rotation={[0, 1.5705, 0]}
          />
          <mesh
            name="_l3_box012"
            castShadow
            receiveShadow
            geometry={nodes._l3_box012.geometry}
            material={materials["Material.004"]}
            position={[-5.9552, 0.1399, 1.1963]}
            rotation={[0, 1.5705, 0]}
          />
          <mesh
            name="_l3_box013"
            castShadow
            receiveShadow
            geometry={nodes._l3_box013.geometry}
            material={materials["Material.004"]}
            position={[-7.2823, 0.1399, 1.1963]}
            rotation={[0, 1.5705, 0]}
          />
          <group
            name="_l3_Headphone001"
            position={[7.4574, 1.7502, 2.9108]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={0.2283}
          >
            <mesh
              name="mesh_32"
              castShadow
              receiveShadow
              geometry={nodes.mesh_32.geometry}
              material={materials["black.001"]}
            />
            <mesh
              name="mesh_32_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_32_1.geometry}
              material={materials["vornoi black"]}
            />
            <mesh
              name="mesh_32_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_32_2.geometry}
              material={materials.glass}
            />
            <mesh
              name="mesh_32_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh_32_3.geometry}
              material={materials["Color Plastic.001"]}
            />
            <mesh
              name="mesh_32_4"
              castShadow
              receiveShadow
              geometry={nodes.mesh_32_4.geometry}
              material={materials.leather}
            />
          </group>
          <mesh
            name="_l3_box016"
            castShadow
            receiveShadow
            geometry={nodes._l3_box016.geometry}
            material={materials["Material.003"]}
            position={[7.4678, 0.7681, 2.7298]}
            rotation={[0, 1.5705, 0]}
            scale={[0.6431, 2.3541, 0.6431]}
          />
          <mesh
            name="_l3_box017"
            castShadow
            receiveShadow
            geometry={nodes._l3_box017.geometry}
            material={materials["Material.004"]}
            position={[7.4678, 0.1264, 2.7298]}
            rotation={[0, 1.5705, 0]}
            scale={0.6431}
          />
          <mesh
            name="_l3_box018"
            castShadow
            receiveShadow
            geometry={nodes._l3_box018.geometry}
            material={materials["Material.004"]}
            position={[6.2335, 0.1264, 2.7298]}
            rotation={[0, 1.5705, 0]}
            scale={0.6431}
          />
          <mesh
            name="_l3_box019"
            castShadow
            receiveShadow
            geometry={nodes._l3_box019.geometry}
            material={materials["Material.003"]}
            position={[6.2335, 0.7681, 2.7298]}
            rotation={[0, 1.5705, 0]}
            scale={[0.6431, 2.3541, 0.6431]}
          />
          <mesh
            name="_l3_box020"
            castShadow
            receiveShadow
            geometry={nodes._l3_box020.geometry}
            material={materials["Material.003"]}
            position={[4.9238, 0.7681, 2.7298]}
            rotation={[0, 1.5705, 0]}
            scale={[0.6431, 2.3541, 0.6431]}
          />
          <mesh
            name="_l3_box021"
            castShadow
            receiveShadow
            geometry={nodes._l3_box021.geometry}
            material={materials["Material.004"]}
            position={[4.9238, 0.1264, 2.7298]}
            rotation={[0, 1.5705, 0]}
            scale={0.6431}
          />
          <group
            name="_l3_KeyboardBaru"
            position={[6.2095, 1.4865, 2.8751]}
            rotation={[-2.4457, 0, Math.PI]}
            scale={[0.2714, 0.01, 0.1116]}
          >
            <mesh
              name="mesh_36"
              castShadow
              receiveShadow
              geometry={nodes.mesh_36.geometry}
              material={materials.glass}
            />
            <mesh
              name="mesh_36_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_36_1.geometry}
              material={materials.TextKey}
            />
          </group>
          <mesh
            name="_l3_Speaker"
            castShadow
            receiveShadow
            geometry={nodes._l3_Speaker.geometry}
            material={materials["TZ素材网-厨卫篇-200020.001"]}
            position={[4.8341, 1.7285, 2.7181]}
            rotation={[-Math.PI, 0.0076, -Math.PI]}
            scale={0.0007}
          />
        </>
      )}

      {/* Level 4 Components */}
      {lodLevel > 2 && (
        <>
          <group
            name="_l4_wm"
            position={[-1.2661, 1.7511, 0.6294]}
            rotation={[0, -1.5705, 0]}
          >
            <mesh
              name="mesh_11"
              castShadow
              receiveShadow
              geometry={nodes.mesh_11.geometry}
              material={materials.body_color}
            />
            <mesh
              name="mesh_11_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_1.geometry}
              material={materials.body_color_glossy_aniso2}
            />
            <mesh
              name="mesh_11_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_2.geometry}
              material={materials.body_color_glossy_aniso}
            />
            <mesh
              name="mesh_11_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_3.geometry}
              material={materials.front_panel}
            />
            <mesh
              name="mesh_11_4"
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_4.geometry}
              material={materials.radial_aniso_steel}
            />
            <mesh
              name="mesh_11_5"
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_5.geometry}
              material={materials.glass_dark}
            />
            <mesh
              name="mesh_11_6"
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_6.geometry}
              material={materials.metall_inside}
            />
            <mesh
              name="mesh_11_7"
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_7.geometry}
              material={materials.black_plastic}
            />
            <mesh
              name="mesh_11_8"
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_8.geometry}
              material={materials.rubber_grey}
            />
            <mesh
              name="mesh_11_9"
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_9.geometry}
              material={materials.metall_selector}
            />
            <mesh
              name="mesh_11_10"
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_10.geometry}
              material={materials.led_screen}
            />
            <mesh
              name="mesh_11_11"
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_11.geometry}
              material={materials.back__simple_texture}
            />
          </group>
          <group name="_l4_fridge" position={[0.3226, 1.141, 0.4752]}>
            <mesh
              name="mesh_14"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14.geometry}
              material={materials.Base_paint}
            />
            <mesh
              name="mesh_14_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_1.geometry}
              material={materials["Chrome.001"]}
            />
            <mesh
              name="mesh_14_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_2.geometry}
              material={materials.Brushed_steel_base}
            />
            <mesh
              name="mesh_14_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_3.geometry}
              material={materials.Brushed_steel_base_ice}
            />
            <mesh
              name="mesh_14_4"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_4.geometry}
              material={materials.Text_water_cubed_crushed}
            />
            <mesh
              name="mesh_14_5"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_5.geometry}
              material={materials.Black_parts}
            />
            <mesh
              name="mesh_14_6"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_6.geometry}
              material={materials.Glass_ice}
            />
            <mesh
              name="mesh_14_7"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_7.geometry}
              material={materials.Grey_plastic}
            />
            <mesh
              name="mesh_14_8"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_8.geometry}
              material={materials.Black_parts_ice}
            />
          </group>
          <group name="_l4_rc" position={[-5.9738, 1.4371, 1.2633]}>
            <mesh
              name="mesh_23"
              castShadow
              receiveShadow
              geometry={nodes.mesh_23.geometry}
              material={materials["dianfanguo.001"]}
            />
            <mesh
              name="mesh_23_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_23_1.geometry}
              material={materials["3.001"]}
            />
            <mesh
              name="mesh_23_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_23_2.geometry}
              material={materials["dami.001"]}
            />
          </group>
          <group
            name="_l4_fryer"
            position={[-4.6927, 1.6392, 1.2152]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              name="mesh_27"
              castShadow
              receiveShadow
              geometry={nodes.mesh_27.geometry}
              material={materials["Metal (3)"]}
            />
            <mesh
              name="mesh_27_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_27_1.geometry}
              material={materials["Metal.002"]}
            />
            <mesh
              name="mesh_27_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_27_2.geometry}
              material={materials["Custom (1)"]}
            />
            <mesh
              name="mesh_27_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh_27_3.geometry}
              material={materials.Custom}
            />
            <mesh
              name="mesh_27_4"
              castShadow
              receiveShadow
              geometry={nodes.mesh_27_4.geometry}
              material={materials["Metal (1)"]}
            />
          </group>
          <mesh
            name="_l4_roomba"
            castShadow
            receiveShadow
            geometry={nodes._l4_roomba.geometry}
            material={materials.aeneoclsbdg000031}
            position={[-7.2611, 1.4765, 1.2157]}
          />
          <group
            name="_l4_Headphone"
            position={[7.4574, 1.7502, 2.5545]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={0.2283}
          >
            <mesh
              name="mesh_35"
              castShadow
              receiveShadow
              geometry={nodes.mesh_35.geometry}
              material={materials["black.001"]}
            />
            <mesh
              name="mesh_35_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_35_1.geometry}
              material={materials["vornoi black"]}
            />
            <mesh
              name="mesh_35_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_35_2.geometry}
              material={materials.glass}
            />
            <mesh
              name="mesh_35_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh_35_3.geometry}
              material={materials["Color Plastic.001"]}
            />
            <mesh
              name="mesh_35_4"
              castShadow
              receiveShadow
              geometry={nodes.mesh_35_4.geometry}
              material={materials["leather.001"]}
            />
          </group>
          <group
            name="_l4_KeyboardBaru001"
            position={[6.2089, 1.5294, 2.6429]}
            rotation={[-2.4457, 0, Math.PI]}
            scale={[0.2714, 0.01, 0.1116]}
          >
            <mesh
              name="mesh_36"
              castShadow
              receiveShadow
              geometry={nodes.mesh_36.geometry}
              material={materials.glass}
            />
            <mesh
              name="mesh_36_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_36_1.geometry}
              material={materials.TextKey}
            />
          </group>
        </>
      )}
    </group>
  );
}
