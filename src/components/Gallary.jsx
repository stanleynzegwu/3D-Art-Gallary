/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/project1.glb -k 
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

const bakedTexture = useTexture("baked1.jpg");

bakedTexture.flipY = false;
bakedTexture.colorSpace = THREE.SRGBColorSpace;

const textureMaterial = new THREE.MeshBasicMaterial({
  map: bakedTexture,
  // transparent: true,
  // opacity: 1,
});

export function Gallary(props) {
  const { nodes, materials } = useGLTF("/project1.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="frame1001"
        geometry={nodes.frame1001.geometry}
        material={nodes.frame1001.material}
        position={[-12.008, 2.59, 9.252]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="circleFrame001"
        geometry={nodes.circleFrame001.geometry}
        material={nodes.circleFrame001.material}
        position={[20.121, 3.227, -11.606]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame2001"
        geometry={nodes.frame2001.geometry}
        material={nodes.frame2001.material}
        position={[-35.714, 2.691, 20.455]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="frame3001"
        geometry={nodes.frame3001.geometry}
        material={nodes.frame3001.material}
        position={[-31.547, 2.691, 20.455]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="frame4001"
        geometry={nodes.frame4001.geometry}
        material={nodes.frame4001.material}
        position={[-27.345, 2.691, 20.455]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="frame5001"
        geometry={nodes.frame5001.geometry}
        material={nodes.frame5001.material}
        position={[-23.281, 2.691, 20.455]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="frame6001"
        geometry={nodes.frame6001.geometry}
        material={nodes.frame6001.material}
        position={[-18.972, 2.691, 20.455]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="frame7001"
        geometry={nodes.frame7001.geometry}
        material={nodes.frame7001.material}
        position={[-14.469, 2.812, 20.455]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="frame8001"
        geometry={nodes.frame8001.geometry}
        material={nodes.frame8001.material}
        position={[-37.966, 2.806, 18.638]}
      />
      <mesh
        name="frame9001"
        geometry={nodes.frame9001.geometry}
        material={nodes.frame9001.material}
        position={[-37.966, 3.518, -9.25]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame10001"
        geometry={nodes.frame10001.geometry}
        material={nodes.frame10001.material}
        position={[-37.966, 2.576, -10.866]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame23001"
        geometry={nodes.frame23001.geometry}
        material={nodes.frame23001.material}
        position={[-7.819, 2.812, 20.455]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="frame24001"
        geometry={nodes.frame24001.geometry}
        material={nodes.frame24001.material}
        position={[24.238, 4.99, 20.455]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="frame25001"
        geometry={nodes.frame25001.geometry}
        material={nodes.frame25001.material}
        position={[19.472, 3.806, 20.494]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="frame26001"
        geometry={nodes.frame26001.geometry}
        material={nodes.frame26001.material}
        position={[17.527, 3.027, 20.494]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="frame27001"
        geometry={nodes.frame27001.geometry}
        material={nodes.frame27001.material}
        position={[15.521, 2.15, 20.494]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="frame28001"
        geometry={nodes.frame28001.geometry}
        material={nodes.frame28001.material}
        position={[28.722, 4.662, 18.948]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name="frame29001"
        geometry={nodes.frame29001.geometry}
        material={nodes.frame29001.material}
        position={[28.722, 2.541, 18.481]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name="frame30001"
        geometry={nodes.frame30001.geometry}
        material={nodes.frame30001.material}
        position={[28.722, 7.359, 18.475]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name="frame11001"
        geometry={nodes.frame11001.geometry}
        material={nodes.frame11001.material}
        position={[-27.549, 2.691, 9.252]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame12001"
        geometry={nodes.frame12001.geometry}
        material={nodes.frame12001.material}
        position={[-13.168, 2.59, 9.252]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        name="frame13001"
        geometry={nodes.frame13001.geometry}
        material={nodes.frame13001.material}
        position={[-28.712, 2.691, 9.252]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        name="frame14001"
        geometry={nodes.frame14001.geometry}
        material={nodes.frame14001.material}
        position={[-27.549, 2.59, -4.233]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame15001"
        geometry={nodes.frame15001.geometry}
        material={nodes.frame15001.material}
        position={[-28.712, 2.59, -4.233]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        name="frame16001"
        geometry={nodes.frame16001.geometry}
        material={nodes.frame16001.material}
        position={[-12.008, 2.59, -4.248]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame17001"
        geometry={nodes.frame17001.geometry}
        material={nodes.frame17001.material}
        position={[-13.168, 2.59, -4.248]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        name="frame18001"
        geometry={nodes.frame18001.geometry}
        material={nodes.frame18001.material}
        position={[-19.493, 2.608, 2.322]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="frame19001"
        geometry={nodes.frame19001.geometry}
        material={nodes.frame19001.material}
        position={[-19.493, 2.608, 3.483]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="frame31001"
        geometry={nodes.frame31001.geometry}
        material={nodes.frame31001.material}
        position={[2.738, 2.812, -27.651]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="frame32001"
        geometry={nodes.frame32001.geometry}
        material={nodes.frame32001.material}
        position={[-7.299, 2.812, -27.651]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="frame33001"
        geometry={nodes.frame33001.geometry}
        material={nodes.frame33001.material}
        position={[-37.966, 2.812, -19.36]}
      />
      <mesh
        name="frame20001"
        geometry={nodes.frame20001.geometry}
        material={nodes.frame20001.material}
        position={[-12.709, 2.581, -14.193]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame21001"
        geometry={nodes.frame21001.geometry}
        material={nodes.frame21001.material}
        position={[-12.709, 2.581, -19.653]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame22001"
        geometry={nodes.frame22001.geometry}
        material={nodes.frame22001.material}
        position={[-12.709, 2.581, -25.258]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame34001"
        geometry={nodes.frame34001.geometry}
        material={nodes.frame34001.material}
        position={[-13.193, 2.812, -19.36]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name="chair1001"
        geometry={nodes.chair1001.geometry}
        material={nodes.chair1001.material}
        position={[-6.968, 1.29, -19.913]}
        rotation={[0, -0.969, 0]}
      />
      <mesh
        name="receptionDesk001"
        geometry={nodes.receptionDesk001.geometry}
        material={nodes.receptionDesk001.material}
        position={[7.324, 1.157, 4.464]}
      />
      <mesh
        name="joinedPillar001"
        geometry={nodes.joinedPillar001.geometry}
        material={nodes.joinedPillar001.material}
        position={[-28.166, 0.833, 19.36]}
      />
      <mesh
        name="receptionDivider001"
        geometry={nodes.receptionDivider001.geometry}
        material={nodes.receptionDivider001.material}
        position={[10.261, 2.667, 4.47]}
      />
      <mesh
        name="jointStaircase001"
        geometry={nodes.jointStaircase001.geometry}
        material={nodes.jointStaircase001.material}
        position={[19.446, 1.037, 0.718]}
      />
      <mesh
        name="doorHandle"
        geometry={nodes.doorHandle.geometry}
        material={nodes.doorHandle.material}
        position={[-27.046, 2.08, -13.774]}
        rotation={[0, -1.571, 0]}
      />
    </group>
  );
}

useGLTF.preload("/project1.glb");
