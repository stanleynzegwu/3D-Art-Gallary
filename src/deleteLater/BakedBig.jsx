import React, { useRef } from "react";
import { MeshReflectorMaterial, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { RigidBody, interactionGroups } from "@react-three/rapier";

export function BakedBig(props) {
  const { nodes, materials } = useGLTF("/BakedBig.glb");

  const texture = useTexture("BakedBigNoise.jpg");
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  const ceilingAndOutsideTexture = new THREE.MeshBasicMaterial({
    map: texture,
  });
  const floorMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    // reflectivity: 0.5,
    roughness: 0.04,
    // metalness: 0.2,
  });

  return (
    <group {...props} dispose={null}>
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
        name="joined"
        geometry={nodes.joined.geometry}
        material={ceilingAndOutsideTexture}
        position={[-8.818, 5.828, -3]}
      />
    </group>
  );
}

useGLTF.preload("/BakedBig.glb");
