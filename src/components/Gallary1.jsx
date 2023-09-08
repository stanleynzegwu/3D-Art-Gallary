import React, { useEffect, useRef } from "react";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { frames } from "../constants";
import { RigidBody } from "@react-three/rapier";
import { useSnapshot } from "valtio";
import { store } from "../store";

export default function Gallary1(props) {
  const snap = useSnapshot(store);
  const { nodes } = useGLTF("/models/gallaryModel1.glb");
  const texture = useTexture("textures/gallaryTexture1.jpg");

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
        {frames(nodes, textureMaterial).map(({ name, geometry, position, rotation, userData }) => (
          <RigidBody type={"fixed"} userData={userData} key={geometry + name}>
            <mesh
              name={name}
              userData={userData}
              geometry={geometry}
              material={textureMaterial}
              position={position}
              rotation={rotation}
              onClick={(event) => {
                event.stopPropagation();
                console.log(event);
              }}
              onPointerEnter={(event) => {
                document.body.style.cursor = "pointer";
              }}
              onPointerLeave={(event) => {
                event.stopPropagation();
                document.body.style.cursor = "default";
              }}
            >
              {snap.currentIntersectedObject?.frame === name && (
                <Html zIndexRange={[10, 0]}>
                  <div className="z-10 text-white bg-black bg-opacity-70 w-60 h-10 rounded-full px-4 py-2 flex flex-col justify-center cursor-pointer">
                    <h1 className="text-xs ">{`Name: ${snap.currentIntersectedObject.frame}`}</h1>
                    <p className="text-xs">{`Artist: ${snap.currentIntersectedObject.Artist}`}</p>
                  </div>
                </Html>
              )}
            </mesh>
          </RigidBody>
        ))}
      </group>
      <RigidBody type={"fixed"}>
        <mesh
          name="receptionDesk"
          geometry={nodes.receptionDesk.geometry}
          material={textureMaterial}
          position={[7.324, 1.157, 4.464]}
        />
        {/* </RigidBody> */}
        <mesh
          name="receptionDivider"
          geometry={nodes.receptionDivider.geometry}
          material={textureMaterial}
          position={[10.261, 2.667, 4.47]}
        />
      </RigidBody>
      <mesh
        name="handlePillarAndChair"
        geometry={nodes.handlePillarAndChair.geometry}
        material={textureMaterial}
        position={[-27.046, 2.08, -13.774]}
        rotation={[0, -1.571, 0]}
      />

      <mesh
        name="jointReceptionLedLight"
        geometry={nodes.jointReceptionLedLight.geometry}
        material={yellowLedMaterial}
        position={[6.841, 1.347, 4.464]}
      />
      {/* <RigidBody type={"fixed"} colliders={"hull"}> */}
      <mesh
        name="jointStaircase"
        geometry={nodes.jointStaircase.geometry}
        material={textureMaterial}
        position={[19.446, 1.037, 0.718]}
      />
      {/* </RigidBody> */}
    </group>
  );
}

useGLTF.preload("/models/gallaryModel1.glb");
