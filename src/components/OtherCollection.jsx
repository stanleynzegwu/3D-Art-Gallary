import React, { useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";

export default function OtherCollection(props) {
  const { nodes } = useGLTF("/models/other.glb");

  const glassMaterial = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0.7,
  });

  const tvVideoTexture = useVideoTexture("textures/ladySinging.mp4");

  const tvVideoMaterial = new THREE.MeshBasicMaterial({
    map: tvVideoTexture,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        name="screen001"
        geometry={nodes.screen001.geometry}
        material={tvVideoMaterial}
        position={[7.445, 1.618, 3.16]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="tvShowingNews001"
        geometry={nodes.tvShowingNews001.geometry}
        material={tvVideoMaterial}
        position={[10.261, 2.667, 4.47]}
      />
      <mesh
        name="pivotAndStairGlass"
        geometry={nodes.pivotAndStairGlass.geometry}
        material={glassMaterial}
        position={[24.515, 2.312, -21.032]}
      />
    </group>
  );
}

useGLTF.preload("/models/other.glb");
