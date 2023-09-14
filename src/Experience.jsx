import { useMemo, useEffect, Suspense } from "react";
import * as THREE from "three";
import { OrbitControls, Center, Environment, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { makeFullScreen } from "./utils";
import { gsap } from "gsap";
import { store } from "./store";
import { useSnapshot } from "valtio";
import {
  Gallary1,
  Gallary2,
  Gallary3,
  GallaryGlass,
  GallaryTopFloor,
  GallaryWall,
  Player,
  Collider,
  OtherCollection,
  Receptionist,
} from "./components";
import { Test } from "./components/Test";
const audio = new Audio("/audio/meditation.mp3");
audio.volume = 0.3;
audio.loop = true;

export default function Experience() {
  const snap = useSnapshot(store);
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
    if (snap.start) {
      const timeline = gsap.timeline();
      // Define different paths for the camera to follow
      timeline.to(
        camera.position,
        {
          z: camera.position.z - 16,
          x: camera.position.x - 2,
          y: camera.position.y - 1,
          ease: "linear",
          duration: 3,
        },
        "-=1"
      );
    }
  }, [snap.start]);

  useEffect(() => {
    if (snap.audio) {
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, [snap.audio]);

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <OrbitControls
        makeDefault
        // minAzimuthAngle={-Math.PI / 4}
        // maxAzimuthAngle={Math.PI / 4} // Maximum azimuth angle (left and right rotation)
        minPolarAngle={Math.PI / 2} // Minimum elevation angle (looking downwards)
        maxPolarAngle={Math.PI - Math.PI / 3} // Maximum elevation angle (looking upwards)
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
        <OtherCollection />
        <Receptionist />
        {/* <Test /> */}
        <Player />
      </Center>
    </>
  );
}
