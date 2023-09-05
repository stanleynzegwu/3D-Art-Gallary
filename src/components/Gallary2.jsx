import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";

export default function Gallary2(props) {
  const { nodes } = useGLTF("/models/gallaryModel2.glb");

  const texture = useTexture("textures/gallaryTexture2.jpg");

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshBasicMaterial({
    map: texture,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        name="officeChairUpper1002"
        geometry={nodes.officeChairUpper1002.geometry}
        material={textureMaterial}
        position={[8.239, 0.975, 3.171]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="monitor002"
        geometry={nodes.monitor002.geometry}
        material={textureMaterial}
        position={[7.445, 1.618, 3.16]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="customDoorFrame006"
        geometry={nodes.customDoorFrame006.geometry}
        material={textureMaterial}
        position={[8.975, 2.488, -21.477]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="customDoorFrame007"
        geometry={nodes.customDoorFrame007.geometry}
        material={textureMaterial}
        position={[-24.217, 2.514, -12.333]}
      />
      <mesh
        name="doorFramesTvDisplay"
        geometry={nodes.doorFramesTvDisplay.geometry}
        material={textureMaterial}
        position={[10.261, 2.667, 4.47]}
      />
      <mesh
        name="keyboard002"
        geometry={nodes.keyboard002.geometry}
        material={textureMaterial}
        position={[7.36, 1.62, 3.111]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="mouse002"
        geometry={nodes.mouse002.geometry}
        material={textureMaterial}
        position={[7.389, 1.628, 3.081]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="joinedChairAndComputer"
        geometry={nodes.joinedChairAndComputer.geometry}
        material={textureMaterial}
        position={[8.239, 0.975, 6.006]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="officeChairLower1002"
        geometry={nodes.officeChairLower1002.geometry}
        material={textureMaterial}
        position={[8.239, 0.975, 3.171]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <RigidBody type="fixed">
        <mesh
          name="pivot003"
          geometry={nodes.pivot003.geometry}
          material={textureMaterial}
          position={[-26.946, 0.667, 16.181]}
        />
        <mesh
          name="pivot2003"
          geometry={nodes.pivot2003.geometry}
          material={textureMaterial}
          position={[-16.946, 0.667, 16.181]}
        />
        <mesh
          name="pivot3003"
          geometry={nodes.pivot3003.geometry}
          material={textureMaterial}
          position={[-16.946, 0.667, -15.819]}
        />
        <mesh
          name="pivot4003"
          geometry={nodes.pivot4003.geometry}
          material={textureMaterial}
          position={[-25.461, 0.667, -19.882]}
        />
        <mesh
          name="pivot5003"
          geometry={nodes.pivot5003.geometry}
          material={textureMaterial}
          position={[-1.946, 0.667, 16.181]}
        />
        <mesh
          name="pivot6003"
          geometry={nodes.pivot6003.geometry}
          material={textureMaterial}
          position={[-1.946, 0.667, -15.819]}
        />
        <mesh
          name="pivot8003"
          geometry={nodes.pivot8003.geometry}
          material={textureMaterial}
          position={[24.515, 1.367, -19.029]}
        />
        <mesh
          name="pivot9003"
          geometry={nodes.pivot9003.geometry}
          material={textureMaterial}
          position={[24.515, 1.367, -20.101]}
        />
        <mesh
          name="pivot10003"
          geometry={nodes.pivot10003.geometry}
          material={textureMaterial}
          position={[24.515, 1.367, -21.032]}
        />
        <mesh
          name="pivot7003"
          geometry={nodes.pivot7003.geometry}
          material={textureMaterial}
          position={[28.434, 1.367, -16.356]}
        />
        <mesh
          name="sofa002"
          geometry={nodes.sofa002.geometry}
          material={textureMaterial}
          position={[19.041, 0.694, 13.115]}
          rotation={[Math.PI / 2, 0, -0.087]}
        />
        <mesh
          name="displayWall3003"
          geometry={nodes.displayWall3003.geometry}
          material={textureMaterial}
          position={[-13.876, 0.593, -10.413]}
        />
        <mesh
          name="displayWall5004"
          geometry={nodes.displayWall5004.geometry}
          material={textureMaterial}
          position={[-29.424, 0.593, -10.397]}
        />
        <mesh
          name="displayWall2003"
          geometry={nodes.displayWall2003.geometry}
          material={textureMaterial}
          position={[-13.876, 0.593, 3.087]}
        />

        <mesh
          name="displayWall1003"
          geometry={nodes.displayWall1003.geometry}
          material={textureMaterial}
          position={[-29.424, 0.593, 3.087]}
        />
      </RigidBody>
      <RigidBody type="fixed" position={[-25.657, 0.593, 4.191]} rotation={[0, 1.571, 0]}>
        {/* <mesh
          name="displayWall4003"
          geometry={nodes.displayWall4003.geometry}
          material={textureMaterial}
          position={[-25.657, 0.593, 4.191]}
          rotation={[0, 1.571, 0]}
        /> */}
        <mesh
          name="displayWall4003"
          geometry={nodes.displayWall4003.geometry}
          material={textureMaterial}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/gallaryModel2.glb");
