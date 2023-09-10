import { store } from "../../store";
import closeIcon from "/images/closeIcon.png";
import { useSnapshot } from "valtio";

export default function ArtInfoCard() {
  const snap = useSnapshot(store);
  const { frame, Artist, image } = snap.currentIntersectedObject;

  return (
    <div className="text-white z-20 w-[100%] h-[100%] absolute top-0 flex flex-col justify-center items-center bg-black bg-opacity-20 transition duration-500 ease-in-out">
      <div className="p-10 w-[80%] h-[80%]  rounded-xl bg-black  relative flex gap-2">
        <img
          src={closeIcon}
          alt="closeIcon"
          className="bg-white p-2 rounded-full absolute top-[15px] right-[15px] w-[31px] aspect-square cursor-pointer"
          onClick={() => {
            store.displayArtInfo = false;
            store.keypressIsEnabled = true;
          }}
        />
        <div className=" w-[55%] pointer-events-none flex flex-col gap-5">
          <h1 className="capitalize font-bold">{frame}</h1>
          <p className="">{Artist}</p>
          <p className="pointer-events-none">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati fuga nihil minus
            pariatur maiores ex quaerat modi neque, fugit consectetur sapiente eaque accusamus
            reiciendis voluptas omnis quibusdam ipsum dolores corrupti.
          </p>
        </div>
        {/* <img
          src={snap.currentIntersectedObject.img}
          alt="art-image"
          className="w-[45%] h-full object-cover rounded-sm pointer-events-none"
        /> */}
        {/* <p className="w-[45%] bg-white h-full object-cover rounded-sm pointer-events-none  flex items-center justify-center">
          <i className="sprite " />
        </p> */}
        <p className="w-[45%] h-full  rounded-sm pointer-events-none  flex items-center justify-center">
          <i
            className={`${image.url} bg-no-repeat block  w-[400px] h-[400px]`}
            style={{
              backgroundPosition: `${image["background-position"]}`,
            }}
          />
        </p>
      </div>
    </div>
  );
}
