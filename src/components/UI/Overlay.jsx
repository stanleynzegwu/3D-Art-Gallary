import { useProgress } from "@react-three/drei";
import { store } from "../../store";
import overlayImage from "/images/overlayImage.jpg";
import TypingText from "./TypingText";

export default function Overlay() {
  const progress = useProgress((state) => state.progress);
  return (
    <div className="overlay bg-white z-20">
      <div className="w-[80%] h-[80%] xl:h-[85%] md:w-[50%] xl:w-[40%] rounded-xl bg-black shadow-lg shadow-black">
        <img
          src={overlayImage}
          alt="art"
          className="w-full h-[40%] xl:h-[50%]  object-cover rounded-t-xl"
        />
        <div className=" h-[60%] xl:h-[50%] rounded-b-xl p-5 flex flex-col justify-center items-center">
          <h1 className="overlay_text text-lg font-bold">Art Gallary</h1>
          <p className="py-2">Immerse Yourself in Artistry: Discover Our Interactive Gallery</p>
          <p className="text-sm underline">Instructions</p>
          <div className="flex flex-col">
            <span className="text-sm ">WASD/Arrow Keys - Move player</span>
            <span className="text-sm">Shift Key - Toggle Walk/Run</span>
          </div>
          <TypingText />
          <button
            disabled={progress < 100}
            onClick={() => {
              //Start The Experience
              store.start = true;
              //Enable player control
              store.keypressIsEnabled = true;
              //start Audio
              store.audio = true;
            }}
            className="w-[150px] text-md font-semibold text-black bg-white border-white border-2 px-4 py-1 rounded-lg hover:bg-black hover:text-white transition duration-500 ease-in-out"
          >
            {progress < 100 ? `Loading ${Math.round(progress)}%` : "EXPLORE"}
          </button>
        </div>
      </div>
    </div>
  );
}
