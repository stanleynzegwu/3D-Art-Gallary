import { useProgress } from "@react-three/drei";
import { store } from "../../store";
import overlayImage from "/images/overlayImage.jpg";
import TypingText from "./TypingText";

export default function Overlay() {
  const progress = useProgress((state) => state.progress);
  return (
    <div className="overlay bg-white z-20">
      <div className=" w-[80%] h-[80%] xl:h-[85%] md:w-[50%] xl:w-[40%] rounded-xl shadow-lg shadow-black">
        <div className="relative w-full h-[40%] xl:h-[50%] rounded-t-xl">
          <img
            src={overlayImage}
            alt="art"
            className="w-full h-full xl:h-full object-cover rounded-t-xl"
          />
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white">
            Art Gallery
          </h2>
        </div>

        <div className="relative text-center h-[60%] xl:h-[50%] rounded-b-xl  flex flex-col items-center select-none bg-black p-5">
          <p className="py-2">Immerse Yourself in Artistry: Discover Our Interactive Gallery</p>
          {/* Instructions (smaller + subtle) */}
          <details className="text-xs text-gray-400">
            <summary className="cursor-pointer underline">Instructions</summary>
            <ul className="mt-2 space-y-1">
              <li>WASD/Arrow Keys – Move player</li>
              <li>Shift – Toggle Walk/Run</li>
            </ul>
          </details>
          {/* Quote & Author */}
          <TypingText />
          {/* CTA Button */}
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
            // className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[150px] text-md font-semibold text-black bg-white border-white border-2 px-4 py-1 rounded-lg hover:bg-black hover:text-white transition duration-500 ease-in-out"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[150px] px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            {progress < 100 ? `Loading ${Math.round(progress)}%` : "EXPLORE"}
          </button>
        </div>
      </div>
    </div>
  );
}

<div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  {/* Image */}
  <div className="relative h-56">
    <img src="your-image.jpg" alt="Art Gallery" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <h2 className="text-2xl font-bold text-white">Art Gallery</h2>
    </div>
  </div>

  {/* Content */}
  <div className="p-6 text-center space-y-4 bg-black text-white">
    {/* Subtitle */}
    <p className="text-sm text-gray-300">
      Immerse Yourself in Artistry: Discover Our Interactive Gallery
    </p>

    {/* Instructions (smaller + subtle) */}
    <details className="text-xs text-gray-400">
      <summary className="cursor-pointer underline">Instructions</summary>
      <ul className="mt-2 space-y-1">
        <li>WASD/Arrow Keys – Move player</li>
        <li>Shift – Toggle Walk/Run</li>
      </ul>
    </details>

    {/* Quote */}
    <blockquote className="italic text-sm text-gray-200 leading-relaxed">
      “A beautiful body perishes, but a work of art dies not.”
      <footer className="mt-1 text-right font-semibold text-xs text-gray-400">
        — Leonardo da Vinci
      </footer>
    </blockquote>

    {/* CTA Button */}
    <button className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
      Explore
    </button>
  </div>
</div>;
