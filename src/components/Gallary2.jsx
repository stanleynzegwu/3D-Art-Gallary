import React from "react";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";
import { pivots } from "../constants";
import { store } from "../store";
import { useSnapshot } from "valtio";

export default function Gallary2() {
  const snap = useSnapshot(store);
  const { nodes } = useGLTF("/models/gallaryModel2.glb");

  const texture = useTexture("textures/gallaryTexture2.jpg");

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshBasicMaterial({
    map: texture,
  });

  return (
    <group dispose={null}>
      {pivots(nodes, textureMaterial).map(({ name, geometry, position, userData }) => (
        <RigidBody type={"fixed"} userData={userData} key={geometry + name}>
          <mesh
            name={name}
            userData={userData}
            geometry={geometry}
            material={textureMaterial}
            position={position}
          >
            {/* Display the popup if currentIntersectedObject is not null(that means the player is near an art) */}
            {snap.currentIntersectedObject?.frame === userData.frame && (
              <Html zIndexRange={[10, 0]}>
                <div
                  className={`${
                    snap.displayArtInfo ? "hidden" : "block"
                  } z-10 text-white bg-black bg-opacity-70 w-60 h-10 rounded-full px-4 py-2 flex flex-col justify-center cursor-pointer`}
                  onClick={(event) => {
                    event.stopPropagation();
                    store.displayArtInfo = true;
                    store.keypressIsEnabled = false;
                  }}
                >
                  <h1 className="text-xs ">{`Name: ${snap.currentIntersectedObject.name}`}</h1>
                  <p className="text-xs">{`Artist: ${snap.currentIntersectedObject.Artist}`}</p>
                </div>
              </Html>
            )}
          </mesh>
        </RigidBody>
      ))}
      <RigidBody type="fixed">
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
        <mesh
          name="displayWall4003"
          geometry={nodes.displayWall4003.geometry}
          material={textureMaterial}
        />
      </RigidBody>
      <mesh
        name="joinedChairAndComputer"
        geometry={nodes.joinedChairAndComputer.geometry}
        material={textureMaterial}
        position={[8.239, 0.975, 6.006]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="officeChairLowpoly"
        geometry={nodes.officeChairLowpoly.geometry}
        material={textureMaterial}
        position={[8.239, 0.995, 3.171]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="keyboardLowPoly"
        geometry={nodes.keyboardLowPoly.geometry}
        material={textureMaterial}
        position={[7.36, 1.62, 3.111]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="mouseLowPoly"
        geometry={nodes.mouseLowPoly.geometry}
        material={textureMaterial}
        position={[7.389, 1.628, 3.081]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("/models/gallaryModel2.glb");
