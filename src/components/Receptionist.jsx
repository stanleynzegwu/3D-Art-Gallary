import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

export default function Receptionist() {
  const ladyCharacter = useRef();
  const model = useGLTF("/models/ladyAvatar.glb");
  const { animations: typingAnimation } = useFBX("./animations/Typing.fbx");
  typingAnimation[0].name = "Typing";
  const { actions } = useAnimations(typingAnimation, ladyCharacter);

  useEffect(() => {
    actions["Typing"].reset().play();
  }, []);

  return (
    <group position={[8.27547, 0.82, 3.2]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.17}>
      <primitive ref={ladyCharacter} object={model.scene} />
    </group>
  );
}

useGLTF.preload("/models/ladyAvatar.glb");
