import { store } from "../../store";
import closeIcon from "/images/closeIcon.png";
import { useSnapshot } from "valtio";

export default function ArtInfoCard() {
  const snap = useSnapshot(store);
  const { name, Artist, description, image } = snap.currentIntersectedObject;

  return (
    <div className="text-white z-20 w-[100%] h-[100%] absolute top-0 flex flex-col justify-center items-center bg-black bg-opacity-20 transition duration-200 ease-in-out">
      <div className="p-8 xl:px-16 w-[95%] h-[95%]  md:w-[90%] lg:w-[90%] lg:h-[85%] xl:w-[80%]  rounded-xl bg-black  relative flex flex-col md:flex-row gap-2">
        <img
          src={closeIcon}
          alt="closeIcon"
          className="bg-white p-2 rounded-full absolute top-[15px] right-[15px] w-[31px] aspect-square cursor-pointer"
          onClick={() => {
            store.displayArtInfo = false;
            store.keypressIsEnabled = true;
          }}
        />
        <div className=" w-[100%] md:w-[55%] h-full pointer-events-none flex flex-col gap-5 justify-center">
          <h1 className="capitalize font-bold">{name}</h1>
          <p className="">
            Artist- <span className="font-semibold">{Artist}</span>
          </p>
          <p className="pointer-events-none text-sm md:text-base ">{description}</p>
        </div>
        <p className="hidden w-[100%] md:w-[45%] h-full rounded-sm pointer-events-none sm:flex items-center justify-center overflow-hidden">
          <i
            className={`${image.url} bg-no-repeat block w-[400px] h-[400px]`}
            style={{
              backgroundPosition: `${image["background-position"]}`,
            }}
          />
        </p>
        {/* <p className="w-[45%] h-full rounded-sm pointer-events-none flex items-center justify-center">
          <img
            src={image.url} // Make sure to provide the image URL
            alt="Your Image"
            className={`${image.url} bg-no-repeat block w-[400px] h-[400px] aspect-square`}
            style={{
              backgroundPosition: `${image["background-position"]}`,
              // maxWidth: "100%", // Make the image responsive
              // height: "auto", // Maintain aspect ratio
            }}
          />
        </p> */}
        <div className="italic text-gray-400 absolute bottom-[5px] left-[29px] right-[29px] xl:left-[60px] xl:right-[50px] text-sm font-light">
          <span className="font-semibold">PS:</span>{" "}
          <p className="inline">
            Art info is not related to the images but generated for demo purposes only. Enjoy the
            gallery!
          </p>
        </div>
      </div>
    </div>
  );
}
