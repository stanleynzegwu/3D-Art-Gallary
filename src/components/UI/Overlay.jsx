import { store } from "../../store";
import TypingText from "./TypingText";

export default function Overlay() {
  return (
    <div className="overlay bg-white z-20">
      <div className="w-[80%] h-[80%] md:w-[50%] xl:w-[40%] rounded-xl bg-black shadow-lg shadow-black">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
          alt="art"
          className="h-[40%] w-full object-cover rounded-t-xl"
        />
        <div className=" h-[60%] rounded-b-xl p-5 flex flex-col justify-center items-center">
          <h1 className="overlay_text text-lg font-bold">Art Gallary</h1>
          <p className="py-2">Immerse Yourself in Artistry: Discover Our Interactive Gallery</p>
          <p className="text-sm underline">Instructions</p>
          <div className="flex flex-col">
            <span className="text-sm ">WASD/Arrow Keys - Move player</span>
            <span className="text-sm">Shift Key - Toggle Walk/Run</span>
          </div>
          <TypingText />
          <button
            onClick={() => {
              //Start The Experience
              store.start = true;
              //Enable player control
              store.keypressIsEnabled = true;
            }}
            className="text-md font-semibold text-black bg-white border-white border-2 px-4 py-1 rounded-lg hover:bg-black hover:text-white transition duration-500 ease-in-out"
          >
            EXPLORE
          </button>
        </div>
      </div>

      {/* <img className="atlas" /> */}
    </div>
  );
}
