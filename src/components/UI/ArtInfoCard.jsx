import { store } from "../../store";
import closeIcon from "/images/closeIcon.png";
import { useSnapshot } from "valtio";

export default function ArtInfoCard() {
  const snap = useSnapshot(store);
  const { frame, Artist } = snap.currentIntersectedObject;
  return (
    <div className="text-white z-20 w-[100%] h-[100%] absolute top-0 flex flex-col justify-center items-center bg-transparent transition duration-500 ease-in-out">
      <div className="p-10 w-[80%] h-[80%]  rounded-xl bg-black opacity-80 relative flex gap-2">
        <img
          src={closeIcon}
          alt="closeIcon"
          className="bg-white p-2 rounded-full absolute top-[15px] right-[15px] w-[31px] aspect-square cursor-pointer"
          onClick={() => (store.displayArtInfo = false)}
        />
        <div className=" w-[55%] pointer-events-none flex flex-col gap-5">
          <h1 className="capitalize font-bold">{frame}</h1>
          <p className="">{Artist}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati fuga nihil minus
            pariatur maiores ex quaerat modi neque, fugit consectetur sapiente eaque accusamus
            reiciendis voluptas omnis quibusdam ipsum dolores corrupti.
          </p>
        </div>
        <img
          src={snap.currentIntersectedObject.img}
          alt="art-image"
          className="w-[45%] h-full object-cover rounded-sm pointer-events-none"
        />
      </div>
    </div>
  );
}
