import React from "react";
import { Detailed, useGLTF } from "@react-three/drei";

export function LOD1({ nodes, materials }) {
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l1_FLOOR.geometry}
        material={materials["Material.003"]}
        position={[-0.064, 0, 0]}
        rotation={[0, 1.571, 0]}
        scale={[1.4, 4.227, 1.502]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l1_Panel.geometry}
        material={materials.LCD06}
        position={[0.044, 5.781, -4.975]}
        scale={[1.484, 1, 1]}
      />
      <group position={[8.329, 0.301, 5.91]} rotation={[0, 0.611, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_2.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_3.geometry}
          material={materials.material0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_4.geometry}
          material={materials.material1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_5.geometry}
          material={materials.material2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_6.geometry}
          material={materials.material3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_7.geometry}
          material={materials.material4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_8.geometry}
          material={materials.material5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_9.geometry}
          material={materials.material6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_10.geometry}
          material={materials.material7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_11.geometry}
          material={materials.material8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_12.geometry}
          material={materials.material9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_13.geometry}
          material={materials.material10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_14.geometry}
          material={materials.material11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_15.geometry}
          material={materials.material12}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_16.geometry}
          material={materials.material13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_17.geometry}
          material={materials.material14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_18.geometry}
          material={materials.material15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_19.geometry}
          material={materials.material16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_20.geometry}
          material={materials.material17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_21.geometry}
          material={materials.material18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_22.geometry}
          material={materials.material19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_23.geometry}
          material={materials.material20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_24.geometry}
          material={materials.material21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_25.geometry}
          material={materials.material22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l1_Sign_Box001_26.geometry}
          material={materials.material23}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l1_Panel001.geometry}
        material={materials["Color Plastic"]}
        position={[-0.052, 5.781, -4.975]}
        scale={[1.497, 1, 1]}
      />
    </group>
  );
}

export function LOD2({ nodes, materials }) {
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_Visual_led_right001.geometry}
        material={materials["Material.052"]}
        position={[6.342, 3.697, -2.533]}
        rotation={[0, -0.422, 0]}
        scale={0.825}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l2_Visual_led_left002.geometry}
        material={materials["Material.053"]}
        position={[-6.574, 2.187, -2.461]}
        rotation={[Math.PI / 2, 0, -0.443]}
        scale={[3.459, 0.978, 2.215]}
      />
      <group
        position={[-6.574, 2.187, -2.461]}
        rotation={[Math.PI / 2, 0, -0.443]}
        scale={[3.459, 0.978, 2.215]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_Visual_led_left003_1.geometry}
          material={materials["Bamboo.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_Visual_led_left003_2.geometry}
          material={materials["white.004"]}
        />
      </group>
      <group
        position={[6.342, 3.697, -2.533]}
        rotation={[0, -0.422, 0]}
        scale={0.825}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_Visual_led_right002_1.geometry}
          material={materials["Bamboo.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l2_Visual_led_right002_2.geometry}
          material={materials["white.003"]}
        />
      </group>
    </group>
  );
}

export function LOD3({ nodes, materials }) {
  return (
    <group>
      <group position={[-4.462, 0.287, 5.432]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tu001_1.geometry}
          material={materials.fis01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tu001_2.geometry}
          material={materials["turk 01"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tu001_3.geometry}
          material={materials.sal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tu001_4.geometry}
          material={materials.sal01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tu001_5.geometry}
          material={materials["RACK - g -01"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tu001_6.geometry}
          material={materials["RACK - b -01"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tu001_7.geometry}
          material={materials["RACK - w -01"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tu001_8.geometry}
          material={materials.fis02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_tu001_9.geometry}
          material={materials.wi01}
        />
      </group>
      <group
        position={[-6.582, 0.267, 2.838]}
        rotation={[0, 1.571, 0]}
        scale={0.973}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Ice_box003_1.geometry}
          material={materials.M_Furniture}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Ice_box003_2.geometry}
          material={materials.M_Glass}
        />
      </group>
      <group
        position={[-6.582, 0.267, 0.346]}
        rotation={[0, 1.571, 0]}
        scale={0.973}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Ice_box002_1.geometry}
          material={materials.M_Furniture}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Ice_box002_2.geometry}
          material={materials.M_Glass}
        />
      </group>
      <group
        position={[-2.345, 0.255, 2.838]}
        rotation={[1.571, -1.501, 1.569]}
        scale={0.941}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Ice_box001_1.geometry}
          material={materials.M_Furniture}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Ice_box001_2.geometry}
          material={materials.M_Glass}
        />
      </group>
      <group
        position={[-2.336, 0.26, 0.464]}
        rotation={[1.571, -1.501, 1.569]}
        scale={0.941}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Ice_box_1.geometry}
          material={materials.M_Furniture}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Ice_box_2.geometry}
          material={materials.M_Glass}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l3_Fish_gold.geometry}
        material={materials.PRO}
        position={[-4.423, 1.915, 1.973]}
        rotation={[0.021, 0, 0]}
        scale={0.757}
      />
      <group position={[2.949, 1.42, 0.019]} scale={0.002}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth002_1.geometry}
          material={materials.Pole}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth002_2.geometry}
          material={materials["Ash Wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth002_3.geometry}
          material={materials.rice}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth002_4.geometry}
          material={materials.grains}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth002_5.geometry}
          material={materials.pinkbeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth002_6.geometry}
          material={materials.Redbeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth002_7.geometry}
          material={materials.greenbeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth002_8.geometry}
          material={materials.yellowbeans}
        />
      </group>
      <group position={[2.935, 0.821, 5.019]} scale={0.002}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth001_1.geometry}
          material={materials["Ash Wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth001_2.geometry}
          material={materials.rice}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth001_3.geometry}
          material={materials.grains}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth001_4.geometry}
          material={materials.pinkbeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth001_5.geometry}
          material={materials.Redbeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth001_6.geometry}
          material={materials.greenbeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth001_7.geometry}
          material={materials.yellowbeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth001_8.geometry}
          material={materials.Pole}
        />
      </group>
      <group position={[2.95, 1.211, 2.454]} scale={0.002}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth_1.geometry}
          material={materials["Ash Wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth_2.geometry}
          material={materials.rice}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth_3.geometry}
          material={materials.grains}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth_4.geometry}
          material={materials.pinkbeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth_5.geometry}
          material={materials.Redbeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth_6.geometry}
          material={materials.greenbeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth_7.geometry}
          material={materials.yellowbeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l3_Beans_booth_8.geometry}
          material={materials.Pole}
        />
      </group>
    </group>
  );
}

export function LOD4({ nodes, materials }) {
  return (
    <group>
      <group
        position={[-6.815, 1.169, 2.383]}
        rotation={[0, 1.571, 0]}
        scale={1.396}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Fish_ice003_1.geometry}
          material={materials["M_Grocery2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Fish_ice003_2.geometry}
          material={materials["fis02.001"]}
        />
      </group>
      <group
        position={[-2.138, 0.998, 2.607]}
        rotation={[3.079, -0.744, 3.047]}
        scale={0.928}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Fish_ice002_1.geometry}
          material={materials["M_Grocery2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Fish_ice002_2.geometry}
          material={materials["fis02.001"]}
        />
      </group>
      <group
        position={[-6.654, 1.315, 0.754]}
        rotation={[0, -0.493, 0]}
        scale={0.006}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Fish_ice001_1.geometry}
          material={materials["fis02.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Fish_ice001_2.geometry}
          material={materials["M_Grocery2.001"]}
        />
      </group>
      <group
        position={[-2.053, 0.504, 0.336]}
        rotation={[1.571, -1.501, 1.569]}
        scale={0.006}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Fish_ice_1.geometry}
          material={materials["fis02.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._l4_Fish_ice_2.geometry}
          material={materials["M_Grocery2.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Beans_booth_Details001.geometry}
        material={materials["47245750054.002"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Beans_booth_Details002.geometry}
        material={materials["47245750053.002"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Beans_booth_Details003.geometry}
        material={materials["47245750052.002"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Beans_booth_Details004.geometry}
        material={materials["47245750051.002"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details.geometry}
        material={materials["JianE_Mtl_202141520154576.001"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details001.geometry}
        material={materials["JianE_Mtl_202141520154576.002"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details002.geometry}
        material={materials["JianE_Mtl_202141520154576.003"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details003.geometry}
        material={materials["JianE_Mtl_202141520154576.004"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details004.geometry}
        material={materials["JianE_Mtl_202141520154576.005"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details005.geometry}
        material={materials["JianE_Mtl_202141520154576.006"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details006.geometry}
        material={materials["JianE_Mtl_202141520154576.012"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details007.geometry}
        material={materials["JianE_Mtl_202141520154577.002"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details008.geometry}
        material={materials["JianE_Mtl_202141520154577.012"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details009.geometry}
        material={materials["JianE_Mtl_202141520154577.013"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details010.geometry}
        material={materials["JianE_Mtl_202141520154577.014"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details011.geometry}
        material={materials["JianE_Mtl_202141520154577.015"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details012.geometry}
        material={materials["JianE_Mtl_202141520154577.016"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details013.geometry}
        material={materials["JianE_Mtl_202141520154577.017"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details014.geometry}
        material={materials["JianE_Mtl_202141520154577.018"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details015.geometry}
        material={materials["JianE_Mtl_202141520154577.019"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details016.geometry}
        material={materials["JianE_Mtl_202141520154577.020"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Bread_shelf_Details017.geometry}
        material={materials["JianE_Mtl_202141520154577.021"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._l4_Beans_booth_Details.geometry}
        material={materials["47245750056.002"]}
        position={[2.949, 1.42, 0.019]}
        scale={0.002}
      />
    </group>
  );
}

export default function Thuysan(props) {
  const [level1, level2, level3, level4] = useGLTF([
    "/V7/THUYSAN_LOD/thuysan_L1.glb",
    "/V7/THUYSAN_LOD/thuysan_L2.glb",
    "/V7/THUYSAN_LOD/thuysan_L3.glb",
    "/V7/THUYSAN_LOD/thuysan_L4.glb",
  ]);

  return (
    <group {...props}>
      <Detailed distances={[10, 35, 40]}>
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
  );
}

useGLTF.preload("/V7/THUYSAN_LOD/thuysan_L1.glb");
useGLTF.preload("/V7/THUYSAN_LOD/thuysan_L2.glb");
useGLTF.preload("/V7/THUYSAN_LOD/thuysan_L3.glb");
useGLTF.preload("/V7/THUYSAN_LOD/thuysan_L4.glb");
