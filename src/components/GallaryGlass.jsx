import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function GallaryGlass(props) {
  const { nodes } = useGLTF("/models/gallaryGlass.glb");

  const glassMaterial = new THREE.MeshBasicMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: 0.02,
  });

  const blueglass = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0.2,
    color: "blue",
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        name="blueGlass"
        geometry={nodes.blueGlass.geometry}
        material={blueglass}
        position={[-27.016, 1.28, -28.246]}
      />
      <mesh
        name="glass"
        geometry={nodes.glass.geometry}
        material={glassMaterial}
        position={[29.05, 1.203, 11.819]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.048, 0.859, 1]}
      />
    </group>
  );
}

useGLTF.preload("/models/gallaryGlass.glb");
