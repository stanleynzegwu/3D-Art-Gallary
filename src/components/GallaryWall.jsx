import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function GallaryWall({ wallMaterial }) {
  const { nodes } = useGLTF("/models/gallaryWall.glb");
  const redMaterial = new THREE.MeshBasicMaterial({ color: "#ff4242" });

  return (
    <group dispose={null}>
      <mesh
        name="wall"
        geometry={nodes.wall.geometry}
        material={wallMaterial}
        position={[19.243, 0.109, -2.278]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="Gallary_Text"
        geometry={nodes.Gallary_Text.geometry}
        material={redMaterial}
        position={[5.594, 3.051, 20.505]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("/models/gallaryWall.glb");
