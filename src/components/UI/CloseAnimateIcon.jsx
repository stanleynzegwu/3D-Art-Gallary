import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useSnapshot } from "valtio";

import { store } from "../../store";
import closeIcon from "/images/closeIcon.png";
import { useEffect } from "react";

const CloseAnimateIcon = () => {
  const snap = useSnapshot(store);
  const { camera, controls } = useThree();

  const resetArtViewState = () => {
    store.animateCameraToArt = {
      prevCameraPosition: null,
      isArtViewMode: false,
      artName: "",
    };
    controls.enabled = true;

    const timeline = gsap.timeline();
    timeline.to(camera.position, {
      duration: 2,
      x: snap.animateCameraToArt.prevCameraPosition.x,
      y: snap.animateCameraToArt.prevCameraPosition.y,
      z: snap.animateCameraToArt.prevCameraPosition.z,
      ease: "linear",
    });

    // Enable player controls
    store.keypressIsEnabled = true;
  };

  //Use ESC key to close aswell
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && snap.animateCameraToArt.isArtViewMode) {
        resetArtViewState();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [snap.animateCameraToArt.isArtViewMode]);

  return (
    <Html fullscreen>
      <div
        className={`z-20 absolute top-20 right-10 h-8 w-8 p-2 rounded-full bg-white cursor-pointer`}
        onClick={(event) => {
          event.stopPropagation();
          resetArtViewState();
        }}
      >
        <img className="w-[100%] h-[100%]" src={closeIcon} alt="close_Icon" />
      </div>
    </Html>
  );
};

export default CloseAnimateIcon;
