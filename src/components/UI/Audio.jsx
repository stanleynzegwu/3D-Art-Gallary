import { useSnapshot } from "valtio";
import { store } from "../../store";
import volume from "/images/volume.png";
import mute from "/images/mute-speaker.png";

export default function () {
  const snap = useSnapshot(store);

  return (
    <div className="bg-white w-[4%] aspect-square p-3 rounded-full z-10 absolute top-2 right-2 cursor-pointer">
      <img
        className=""
        src={snap.audio ? volume : mute}
        alt="audio icon"
        onClick={() => (store.audio = !store.audio)}
      />
    </div>
  );
}
