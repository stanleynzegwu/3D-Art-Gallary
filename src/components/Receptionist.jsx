import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { store } from "../store";
import { useSnapshot } from "valtio";

export default function Receptionist() {
  const snap = useSnapshot(store);
  const ladyCharacter = useRef();
  const model = useGLTF("/models/ladyAvatar.glb");
  const { animations: typingAnimation } = useFBX("/animations/Typing.fbx");
  typingAnimation[0].name = "Typing";
  const { actions } = useAnimations(typingAnimation, ladyCharacter);

  useEffect(() => {
    actions["Typing"].reset().fadeIn(0.5).play();

    return () => {
      actions["Typing"].reset().fadeOut(0.5);
    };
  }, []);

  return (
    <group position={[8.27547, 0.82, 3.2]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.17}>
      <primitive ref={ladyCharacter} object={model.scene} />
    </group>
  );
}

useGLTF.preload("/models/ladyAvatar.glb");
