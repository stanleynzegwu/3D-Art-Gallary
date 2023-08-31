import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function GallaryWall(props) {
  const { nodes } = useGLTF("/models/gallaryWall.glb");

  const redMaterial = new THREE.MeshBasicMaterial({ color: "#ff4242" });
  const wallTexture = useTexture("textures/gallaryWall.jpg");
  wallTexture.flipY = false;
  wallTexture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshBasicMaterial({
    map: wallTexture,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        name="wallANdFlagPipe"
        geometry={nodes.wallANdFlagPipe.geometry}
        material={textureMaterial}
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
      <mesh
        name="flag"
        geometry={nodes.flag.geometry}
        material={textureMaterial}
        position={[15.492, 3.67, 22.233]}
        rotation={[-1.114, 1.566, 1.167]}
      />
    </group>
  );
}

useGLTF.preload("/models/gallaryWall.glb");
