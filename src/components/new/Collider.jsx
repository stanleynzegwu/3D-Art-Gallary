import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export function Collider(props) {
  const { nodes } = useGLTF("/models/rapierCollider.glb");
  const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });

  return (
    <RigidBody type="fixed">
      <group
        {...props}
        dispose={null}
        onPointerEnter={(event) => {
          event.stopPropagation();
          document.body.style.cursor = "default";
        }}
      >
        <mesh
          name="wall1"
          geometry={nodes.wall1.geometry}
          material={material}
          position={[-37.218, 1.667, 19.507]}
        />
        <mesh
          name="wall2"
          geometry={nodes.wall2.geometry}
          material={material}
          position={[-37.017, 1.667, -26.869]}
        />
        <mesh
          name="wall3"
          geometry={nodes.wall3.geometry}
          material={material}
          position={[27.898, 1.667, 19.506]}
        />
        <mesh
          name="wall4"
          geometry={nodes.wall4.geometry}
          material={material}
          position={[27.718, 1.667, 19.659]}
        />
        <mesh
          name="smallWall1"
          geometry={nodes.smallWall1.geometry}
          material={material}
          position={[-37.004, 1.667, -13.096]}
        />
        <mesh
          name="smallWall2"
          geometry={nodes.smallWall2.geometry}
          material={material}
          position={[-22.939, 1.667, -13.11]}
        />
        <mesh
          name="smallWall3"
          geometry={nodes.smallWall3.geometry}
          material={material}
          position={[-13.777, 1.667, -13.531]}
        />
        <mesh
          name="smallWall4"
          geometry={nodes.smallWall4.geometry}
          material={material}
          position={[9.711, 1.667, -26.693]}
        />
        <mesh
          name="smallWall5"
          geometry={nodes.smallWall5.geometry}
          material={material}
          position={[9.711, 1.667, -17.425]}
        />
        <mesh
          name="smallWall6"
          geometry={nodes.smallWall6.geometry}
          material={material}
          position={[10.233, 1.667, -11.809]}
        />
        <mesh
          name="smallWallup1"
          geometry={nodes.smallWallup1.geometry}
          material={material}
          position={[27.722, 6.465, -11.929]}
        />
        <mesh
          name="smallWallup2"
          geometry={nodes.smallWallup2.geometry}
          material={material}
          position={[19.073, 6.465, -11.695]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/models/rapierCollider.glb");
