import { Canvas, useThree } from "@react-three/fiber";
import { KeyboardControls, Loader } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Experience from "./Experience";
import Overlay from "./components/UI/Overlay";
import { store } from "./store";
import { useSnapshot } from "valtio";
import Audio from "./components/UI/Audio";
import ArtInfoCard from "./components/UI/ArtInfoCard";
import { Suspense } from "react";

export default function App() {
  const snap = useSnapshot(store);
  return (
    <main className="main bg-white">
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
          { name: "changeMovement", keys: ["Shift"] },
        ]}
      >
        <Canvas
          shadows
          camera={{
            fov: 30,
            near: 0.1,
            far: 200,
            // position: [19, -4, 47]
            position: [19, -2.399893760681152, 47],
          }}
        >
          <Physics debug>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Physics>
        </Canvas>
      </KeyboardControls>

      {/* <Loader /> */}

      {!snap.start && <Overlay />}
      {snap.displayArtInfo && <ArtInfoCard />}
      <Audio />
    </main>
  );
}
