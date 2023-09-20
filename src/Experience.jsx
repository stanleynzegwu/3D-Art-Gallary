import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls, Center, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { toggleFullScreen } from "./utils";
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
const audio = new Audio("/audio/meditation.mp3");
audio.volume = 0.3;
audio.loop = true;

export default function Experience() {
  const snap = useSnapshot(store);
  const { gl, camera, scene, controls } = useThree();

  //Fullscreen can be toggled only if Experience have started
  snap.start && toggleFullScreen(gl);

  //WALL MATERIAL
  const wallTexture = useTexture("textures/gallaryWall.jpg");
  wallTexture.flipY = false;
  wallTexture.colorSpace = THREE.SRGBColorSpace;
  const wallMaterial = new THREE.MeshBasicMaterial({
    map: wallTexture,
  });

  //EnvironmentMap
  const environmentMap = useTexture("textures/envMap.jpg");
  environmentMap.mapping = THREE.EquirectangularReflectionMapping;
  environmentMap.colorSpace = THREE.SRGBColorSpace;
  scene.background = environmentMap;
  scene.environment = environmentMap;

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

      //set orbitcontrols target to the current rigidBody position
      controls.target.copy(
        new THREE.Vector3(15.348910331726074, -2.399893760681152, 22.668846130371094)
      );
    }
  }, [snap.start]);

  useEffect(() => {
    snap.audio && audio.play();

    return () => {
      audio.pause();
    };
  }, [snap.audio]);

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls
        makeDefault
        // minAzimuthAngle={-Math.PI / 4}
        // maxAzimuthAngle={Math.PI / 4} // Maximum azimuth angle (left and right rotation)
        minPolarAngle={Math.PI / 2} // Minimum elevation angle (looking downwards)
        maxPolarAngle={Math.PI - Math.PI / 3} // Maximum elevation angle (looking upwards)
      />
      <directionalLight position={[1, 2, 3]} intensity={1.4} />
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
        <Player />
      </Center>
    </>
  );
}
