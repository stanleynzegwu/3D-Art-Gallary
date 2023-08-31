import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { RigidBody, interactionGroups } from "@react-three/rapier";

export default function Gallary3() {
  const { nodes } = useGLTF("/models/gallaryModel3.glb");

  const texture = useTexture("textures/gallaryTexture3.jpg");

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshBasicMaterial({
    map: texture,
  });

  const floorMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.04,
  });

  return (
    <group dispose={null}>
      <RigidBody
        type="fixed"
        friction={3}
        name="groundFloor"
        collisionGroups={interactionGroups(5, [5, 6, 7])}
      >
        <mesh
          name="groundFloorTile"
          geometry={nodes.groundFloorTile.geometry}
          material={floorMaterial}
          position={[-4.508, 0.667, -3.698]}
        />
      </RigidBody>
      <mesh
        name="ceillingAndOutsideGrass"
        geometry={nodes.ceillingAndOutsideGrass.geometry}
        material={textureMaterial}
        position={[-8.818, 5.828, -3]}
      />
    </group>
  );
}

useGLTF.preload("/models/gallaryModel3.glb");
