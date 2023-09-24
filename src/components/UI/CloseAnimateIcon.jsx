import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useSnapshot } from "valtio";

import { store } from "../../store";
import closeIcon from "/images/closeIcon.png";

const CloseAnimateIcon = () => {
  const snap = useSnapshot(store);
  const { camera, controls } = useThree();
  return (
    <Html fullscreen>
      <div
        className={`z-20 absolute top-20 right-10 h-8 w-8 p-2 rounded-full bg-white cursor-pointer`}
        onClick={(event) => {
          event.stopPropagation();
          store.animateCameraToArt = {
            prevCameraPosition: null,
            isArtViewMode: false,
            artName: "name",
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

          //Enable player controls
          store.keypressIsEnabled = true;
        }}
      >
        <img className="w-[100%] h-[100%]" src={closeIcon} alt="close_Icon" />
      </div>
    </Html>
  );
};

export default CloseAnimateIcon;
