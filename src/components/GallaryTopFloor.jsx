import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { frames2 } from "../constants";

export default function GallaryTopfloor() {
  const { nodes } = useGLTF("/models/gallaryTopFloor.glb");

  const texture = useTexture("textures/gallaryTopFloor.jpg");

  const floorMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.04,
  });
  floorMaterial.map = texture;

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshBasicMaterial({
    map: texture,
  });

  return (
    <group dispose={null}>
      {frames2(nodes, textureMaterial).map(({ name, geometry, position, rotation }) => (
        <mesh
          key={geometry + name}
          name={name}
          geometry={geometry}
          material={textureMaterial}
          position={position}
          rotation={rotation}
        />
      ))}
      <mesh
        name="mergedUpper"
        geometry={nodes.mergedUpper.geometry}
        material={textureMaterial}
        position={[11.864, 6.089, -19.869]}
        rotation={[0, 1.571, 0]}
      />

      <mesh
        name="floorTile2"
        geometry={nodes.floorTile2.geometry}
        material={floorMaterial}
        position={[-8.818, 5.828, -3]}
      />
    </group>
  );
}

useGLTF.preload("/models/gallaryTopFloor.glb");
