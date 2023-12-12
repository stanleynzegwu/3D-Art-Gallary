import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { frames2 } from "../constants";
import { RigidBody } from "@react-three/rapier";
import { useSnapshot } from "valtio";
import { store } from "../store";
import InfoPopup from "./UI/InfoPopup";
import CloseAnimateIcon from "./UI/CloseAnimateIcon";
import { handleArtClick } from "../utils";
import { useThree } from "@react-three/fiber";

export default function GallaryTopfloor() {
  const snap = useSnapshot(store);
  const { nodes } = useGLTF("/models/gallaryTopFloor.glb");

  const texture = useTexture("textures/gallaryTopFloor.jpg");
  const { camera, controls } = useThree();

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
            onClick={(event) => handleArtClick(event, name, userData, camera, controls)}
            onPointerEnter={() => {
              document.body.style.cursor = "pointer";
            }}
            onPointerLeave={(event) => {
              event.stopPropagation();
              document.body.style.cursor = "default";
            }}
          >
            {/* Display the pop-up if currentIntersectedObject is not null(that means the player is near an art) */}
            {snap.currentIntersectedObject?.frame === userData.frame && <InfoPopup />}
            {/* Show close icon when in art view mode */}
            {snap.animateCameraToArt.isArtViewMode && snap.animateCameraToArt.artName === name && (
              <CloseAnimateIcon />
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
        <mesh name="upperChair" geometry={nodes.upperChair.geometry} material={textureMaterial} />
        <mesh name="pivotUpper" geometry={nodes.pivotUpper.geometry} material={textureMaterial} />
        <mesh
          name="upperPillar1"
          geometry={nodes.upperPillar1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="upperPillar2"
          geometry={nodes.upperPillar2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="displayWallUpper1"
          geometry={nodes.displayWallUpper1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="displayWallUpper2"
          geometry={nodes.displayWallUpper2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="displayWallUpper3"
          geometry={nodes.displayWallUpper3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="displayWallUpper4"
          geometry={nodes.displayWallUpper4.geometry}
          material={textureMaterial}
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
