import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { frames } from "../constants";
import { RigidBody } from "@react-three/rapier";
import { useSnapshot } from "valtio";
import { store } from "../store";
import { useThree } from "@react-three/fiber";
import InfoPopup from "./UI/InfoPopup";
import CloseAnimateIcon from "./UI/CloseAnimateIcon";
import { handleArtClick } from "../utils";

export default function Gallary1() {
  const snap = useSnapshot(store);
  const { nodes } = useGLTF("/models/gallaryModel1.glb");
  const texture = useTexture("textures/gallaryTexture1.jpg");
  const { camera, controls } = useThree();
  const yellowLedMaterial = new THREE.MeshBasicMaterial({
    color: "#FFFF33",
  });

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshBasicMaterial({
    map: texture,
  });

  return (
    <group
      dispose={null}
      onClick={(event) => event.stopPropagation()}
      onPointerEnter={(event) => event.stopPropagation()}
    >
      <group>
        {/* GROUNDFLOOR ART PAINTINGS */}
        {frames(nodes, textureMaterial).map(({ name, geometry, position, rotation, userData }) => (
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
              {/* Display the popup if currentIntersectedObject is not null(that means the player is near an art) */}
              {snap.currentIntersectedObject?.frame === userData.frame && <InfoPopup />}
              {/* Show close icon when in art view mode */}
              {snap.animateCameraToArt.isArtViewMode &&
                snap.animateCameraToArt.artName === name && <CloseAnimateIcon />}
            </mesh>
          </RigidBody>
        ))}
      </group>

      <RigidBody type={"fixed"}>
        <mesh
          name="woodenChair1"
          geometry={nodes.woodenChair1.geometry}
          material={textureMaterial}
          position={[-6.968, 1.29, -19.913]}
          rotation={[0, -0.969, 0]}
        />
        <mesh
          name="receptionDesk"
          geometry={nodes.receptionDesk.geometry}
          material={textureMaterial}
          position={[7.324, 1.157, 4.464]}
        />
        <mesh
          name="pillar2"
          geometry={nodes.pillar2.geometry}
          material={textureMaterial}
          position={[-28.166, 0.833, 19.36]}
        />
        <mesh
          name="pillar1"
          geometry={nodes.pillar1.geometry}
          material={textureMaterial}
          position={[-28.166, 0.833, 19.36]}
        />
      </RigidBody>
      <mesh
        name="jointStaircase"
        geometry={nodes.jointStaircase.geometry}
        material={textureMaterial}
        position={[19.446, 1.037, 0.718]}
      />
      <mesh
        name="jointReceptionLedLight"
        geometry={nodes.jointReceptionLedLight.geometry}
        material={yellowLedMaterial}
        position={[6.841, 1.347, 4.464]}
      />
    </group>
  );
}

useGLTF.preload("/models/gallaryModel1.glb");
