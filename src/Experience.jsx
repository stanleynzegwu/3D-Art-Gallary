import { useMemo, useEffect, useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { useGLTF, OrbitControls, useTexture, Center, Environment } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { Glass } from "./components/Glass";
import { WallFlag } from "./components/WallFlag";
import { BakedBig } from "./components/BakedBig";
import Player from "./components/Player";
import { makeFullScreen } from "./utils";
import { gsap } from "gsap";

export default function Experience() {
  const { gl, camera } = useThree();
  const gallary = useGLTF("project1.glb");
  const gallary2 = useGLTF("baked2.glb");
  const gallary3 = useGLTF("upper.glb");

  const bakedTexture = useTexture("baked1Noise.jpg");
  const baked2Texture = useTexture("bakedNoise2.jpg");
  const baked3Texture = useTexture("UpperBakedNoise.jpg");

  const glassMaterial = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0.95,
  });

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;

  baked2Texture.flipY = false;
  baked2Texture.colorSpace = THREE.SRGBColorSpace;

  baked3Texture.flipY = false;
  baked3Texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshBasicMaterial({
    map: bakedTexture,
  });
  const textureMaterial2 = new THREE.MeshBasicMaterial({
    map: baked2Texture,
  });

  const textureMaterial3 = new THREE.MeshBasicMaterial({
    map: baked3Texture,
  });

  gallary.scene.children.map((child) => (child.material = textureMaterial));
  gallary2.scene.children.map((child) => (child.material = textureMaterial2));
  gallary3.scene.children.map((child) => (child.material = textureMaterial3));

  const g = gallary2.scene.children
    .filter(({ name }) => name.includes("pivotGlass"))
    .map((child) => (child.material = glassMaterial));

  //Toggle Fullscreen
  makeFullScreen(gl);

  useEffect(() => {
    const timeline = gsap.timeline();
    // Define different paths for the camera to follow
    timeline
      .to(
        camera.position,
        {
          z: camera.position.z - 16,
          x: camera.position.x - 2,
          ease: "linear",
          duration: 3,
        },
        "-=1"
      )
      .to(camera.position, {
        y: "+=1",

        ease: "linear",
        duration: 3,
      });
  }, []);

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls
        makeDefault
        // maxPolarAngle={Math.PI / 2 - 0.02} // Maximum elevation angle (looking upwards)
        // minPolarAngle={0} // Minimum elevation angle (looking downwards)
        // maxAzimuthAngle={Math.PI / 2} // Maximum azimuth angle (left and right rotation)
        // minAzimuthAngle={-Math.PI / 2} // Minim
      />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      {/* <Environment
        preset="city"
        ground={{
          height: 7,
          radius: 28,
          scale: 100,
        }}
      /> */}
      <ambientLight intensity={0.5} />

      <Center>
        <RigidBody type="fixed" colliders={"trimesh"} friction={1}>
          <primitive object={gallary.scene} />

          <primitive object={gallary2.scene} />

          <primitive object={gallary3.scene} />
          <WallFlag />

          <Glass />
        </RigidBody>
        <BakedBig />

        <Player />
      </Center>
    </>
  );
}
