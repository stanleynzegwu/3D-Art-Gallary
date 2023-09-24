import { Html } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { store } from "../../store";

const InfoPopup = () => {
  const snap = useSnapshot(store);
  return (
    <Html zIndexRange={[10, 0]}>
      <div
        className={`${
          snap.displayArtInfo ? "hidden" : "block"
        } z-10 text-white bg-black bg-opacity-70 w-60 h-10 rounded-full px-4 py-2 flex flex-col justify-center cursor-pointer`}
        onClick={(event) => {
          event.stopPropagation();
          store.displayArtInfo = true;
          store.keypressIsEnabled = false;
        }}
      >
        <h1 className="text-xs ">{`Name: ${snap.currentIntersectedObject.name}`}</h1>
        <p className="text-xs">{`Artist: ${snap.currentIntersectedObject.Artist}`}</p>
      </div>
    </Html>
  );
};

export default InfoPopup;
