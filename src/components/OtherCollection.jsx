import React from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";

export default function OtherCollection() {
  const { nodes } = useGLTF("/models/other.glb");

  const glassMaterial = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0.95,
  });

  const tvVideoTexture = useVideoTexture("textures/ladySinging.mp4");
  const tvVideoMaterial = new THREE.MeshBasicMaterial({
    map: tvVideoTexture,
  });

  const desktopScreenTexture = useVideoTexture("textures/realsplash.mp4");
  const desktopScreenMaterial = new THREE.MeshBasicMaterial({
    map: desktopScreenTexture,
  });

  return (
    <group dispose={null}>
      <mesh
        name="screen001"
        geometry={nodes.screen001.geometry}
        material={desktopScreenMaterial}
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
        name="pivotGlass4006"
        geometry={nodes.pivotGlass4006.geometry}
        material={glassMaterial}
        position={[23.025, 7.374, -21.328]}
      />
    </group>
  );
}

useGLTF.preload("/models/other.glb");
