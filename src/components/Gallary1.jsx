import React from "react";
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
              onClick={(event) => {
                event.stopPropagation();
              }}
              onPointerEnter={(event) => {
                document.body.style.cursor = "pointer";
              }}
              onPointerLeave={(event) => {
                event.stopPropagation();
                document.body.style.cursor = "default";
              }}
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
