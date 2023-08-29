import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <main className="main">
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
          // position: [18, -3, 33],
          position: [19, -4, 47],
        }}
      >
        <Suspense>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
    <div className="overlay">
      <h3 className="overlay_text">3D Gallary</h3>
      <p className="overlay_explore">Explore Gallary</p>
    </div>
  </main>
);
