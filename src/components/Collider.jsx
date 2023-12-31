import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";

export default function Collider({ wallMaterial }) {
  const { nodes } = useGLTF("/models/collider.glb");
  const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
  return (
    <group dispose={null}>
      <RigidBody type="fixed">
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
        <mesh
          name="groundFloorCollider"
          geometry={nodes.groundFloorCollider.geometry}
          material={material}
          position={[15.68, -0.333, 7.016]}
        />
        <mesh
          name="topGroundCollider"
          geometry={nodes.topGroundCollider.geometry}
          material={material}
          position={[-8.818, 5.828, -3]}
        />
        <mesh
          name="smallWallup3"
          geometry={nodes.smallWallup3.geometry}
          material={material}
          position={[19.073, 6.465, -38.123]}
        />
        <mesh
          name="topGroundCollider2"
          geometry={nodes.topGroundCollider2.geometry}
          material={material}
          position={[-8.818, 5.828, -3]}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={material}
          position={[9.565, 2.443, -21.599]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plane007"
          geometry={nodes.Plane007.geometry}
          material={material}
          position={[-24.215, 2.443, -13.09]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="Plane008"
          geometry={nodes.Plane008.geometry}
          material={material}
          position={[-27.042, 2.443, -13.057]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="Plane009"
          geometry={nodes.Plane009.geometry}
          material={material}
          position={[9.63, 2.443, -18.706]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plane010"
          geometry={nodes.Plane010.geometry}
          material={material}
          position={[12.718, 2.443, 20.087]}
          rotation={[Math.PI / 2, 0, -0.876]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders={"hull"}>
        <mesh
          name="roundPillarCollider"
          geometry={nodes.roundPillarCollider.geometry}
          material={wallMaterial}
          position={[19.573, 3.956, 0.504]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders={"trimesh"}>
        <mesh
          name="stairGlassCollider"
          geometry={nodes.stairGlassCollider.geometry}
          material={material}
          position={[19.43, 1.037, 0.718]}
        />
        <mesh
          name="staircaseCollider"
          geometry={nodes.staircaseCollider.geometry}
          material={material}
          position={[19.446, 1.037, 0.718]}
        />
        <mesh
          name="staircaseColliderFoot"
          geometry={nodes.staircaseColliderFoot.geometry}
          material={material}
          position={[20.076, 0.852, 4.391]}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/collider.glb");
