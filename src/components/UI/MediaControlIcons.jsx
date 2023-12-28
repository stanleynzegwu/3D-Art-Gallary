import { useSnapshot } from "valtio";
import { store } from "../../store";
import volume from "/images/volume.png";
import mute from "/images/mute-speaker.png";
import { downloadCanvasToImage } from "../../utils";

export default function MediaControlIcons() {
  const snap = useSnapshot(store);

  return (
    <div className="absolute top-2 right-2 z-10 flex gap-2">
      <div
        className="bg-white w-[40px] aspect-square p-3 rounded-full cursor-pointer z-10 "
        onClick={downloadCanvasToImage}
        title="Screenshot"
      >
        <img className="w-full h-full" src="/images/camera.png" alt="camera" />
      </div>
      <div
        className="bg-white w-[40px] aspect-square p-3 rounded-full cursor-pointer"
        onClick={() => (store.audio = !store.audio)}
        title={store.audio ? "Mute" : "Unmute"}
      >
        <img className="h-full w-full" src={snap.audio ? volume : mute} alt="audio icon" />
      </div>
    </div>
  );
}
