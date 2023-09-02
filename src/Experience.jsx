import { useMemo, useEffect, Suspense } from "react";
import * as THREE from "three";
import { OrbitControls, Center, Environment, useTexture } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { makeFullScreen } from "./utils";
import { gsap } from "gsap";
import {
  Gallary1,
  Gallary2,
  Gallary3,
  GallaryGlass,
  GallaryTopFloor,
  GallaryWall,
  Player,
  Collider,
} from "./components";

export default function Experience() {
  const { gl, camera } = useThree();

  //Toggle Fullscreen
  makeFullScreen(gl);

  //WALL MATERIAL
  const wallTexture = useTexture("textures/gallaryWall.jpg");
  wallTexture.flipY = false;
  wallTexture.colorSpace = THREE.SRGBColorSpace;
  const wallMaterial = new THREE.MeshBasicMaterial({
    map: wallTexture,
  });

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
        <Gallary1 />
        <Gallary2 />
        <Gallary3 />
        <GallaryGlass />
        <GallaryTopFloor />
        <GallaryWall wallMaterial={wallMaterial} />
        <Collider wallMaterial={wallMaterial} />
        <Player />
      </Center>
    </>
  );
}
