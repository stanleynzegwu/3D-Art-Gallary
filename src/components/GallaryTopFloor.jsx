import React, { useRef } from "react";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { frames2 } from "../constants";
import { RigidBody } from "@react-three/rapier";
import { useSnapshot } from "valtio";
import { store } from "../store";

export default function GallaryTopfloor() {
  const snap = useSnapshot(store);
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
      {/* TOPFLOOR ART PAINTINGS */}
      {frames2(nodes, textureMaterial).map(({ name, geometry, position, rotation, userData }) => (
        <RigidBody type={"fixed"} userData={userData} key={geometry + name}>
          <mesh
            name={name}
            userData={userData}
            geometry={geometry}
            material={textureMaterial}
            position={position}
            rotation={rotation}
          >
            {/* Display the pop-up if currentIntersectedObject is not null(that means the player is near an art) */}
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

      <mesh
        name="floorTile2"
        geometry={nodes.floorTile2.geometry}
        material={floorMaterial}
        position={[-8.818, 5.828, -3]}
      />
      <RigidBody type="fixed" rotation={[0, 1.571, 0]} position={[11.864, 6.089, -19.869]}>
        <mesh
          name="upperChair"
          geometry={nodes.upperChair.geometry}
          material={textureMaterial}
          // position={[11.864, 6.089, -19.869]}
          // rotation={[0, 1.571, 0]}
        />
        <mesh
          name="pivotUpper"
          geometry={nodes.pivotUpper.geometry}
          material={textureMaterial}
          // position={[11.864, 6.089, -19.869]}
          // rotation={[0, 1.571, 0]}
        />
        <mesh
          name="upperPillar1"
          geometry={nodes.upperPillar1.geometry}
          material={textureMaterial}
          // position={[11.864, 6.089, -19.869]}
          // rotation={[0, 1.571, 0]}
        />
        <mesh
          name="upperPillar2"
          geometry={nodes.upperPillar2.geometry}
          material={textureMaterial}
          // position={[11.864, 6.089, -19.869]}
          // rotation={[0, 1.571, 0]}
        />
        <mesh
          name="displayWallUpper1"
          geometry={nodes.displayWallUpper1.geometry}
          material={textureMaterial}
          // position={[11.864, 6.089, -19.869]}
          // rotation={[0, 1.571, 0]}
        />
        <mesh
          name="displayWallUpper2"
          geometry={nodes.displayWallUpper2.geometry}
          material={textureMaterial}
          // position={[11.864, 6.089, -19.869]}
          // rotation={[0, 1.571, 0]}
        />
        <mesh
          name="displayWallUpper3"
          geometry={nodes.displayWallUpper3.geometry}
          material={textureMaterial}
          // position={[11.864, 6.089, -19.869]}
          // rotation={[0, 1.571, 0]}
        />
        <mesh
          name="displayWallUpper4"
          geometry={nodes.displayWallUpper4.geometry}
          material={textureMaterial}
          // position={[11.864, 6.089, -19.869]}
          // rotation={[0, 1.571, 0]}
        />
      </RigidBody>

      <mesh
        name="mergedUpper"
        geometry={nodes.mergedUpper.geometry}
        material={textureMaterial}
        position={[11.864, 6.089, -19.869]}
        rotation={[0, 1.571, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/gallaryTopFloor.glb");
