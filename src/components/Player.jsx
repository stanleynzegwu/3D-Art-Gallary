import { useKeyboardControls, useGLTF, useFBX, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, CapsuleCollider, interactionGroups } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useSnapshot } from "valtio";
import * as THREE from "three";

import { store } from "../store";
import { playAnimation, playerdirection, toggleMovement } from "../utils";

//cHARACTER ANIMATION
const Player = () => {
  const snap = useSnapshot(store);
  const avatar = useGLTF("models/avatar.glb");
  const player = useRef();
  const rigidPlayer = useRef();

  const { animations: runningAnimation } = useFBX("./animations/Running.fbx");
  const { animations: standingAnimation } = useFBX("./animations/Standing Idle.fbx");
  const { animations: walkingAnimation } = useFBX("./animations/Walking.fbx");

  runningAnimation[0].name = "Running";
  standingAnimation[0].name = "Standing";
  walkingAnimation[0].name = "Walking";

  const { actions } = useAnimations(
    [runningAnimation[0], standingAnimation[0], walkingAnimation[0]],
    player
  );

  useEffect(() => {
    actions[snap.currentAnimation].reset().fadeIn(0.5).play();

    return () => {
      actions[snap.currentAnimation].reset().fadeOut(0.5);
    };
  }, [snap.currentAnimation]);

  const [subscribeKeys, getKeys] = useKeyboardControls();

  //GETTING SUBSCIPTION TO THE CHANGE MOVEMENT KEY
  useEffect(() => {
    const unsubscribeMovement = subscribeKeys(
      (state) => state.changeMovement,
      (value) => {
        if (value) {
          toggleMovement();
        }
      }
    );

    return () => {
      unsubscribeMovement();
    };
  }, []);

  useFrame(({ camera, controls }, delta) => {
    //KEYBOARDCONTROLS
    const { forward, backward, leftward, rightward } = getKeys();

    //PLAY ANIMATION BASED ON CURRENT USER INTERACTION
    playAnimation([forward, backward, leftward, rightward]);
    playerdirection(
      [forward, backward, leftward, rightward],
      camera,
      rigidPlayer.current,
      player.current,
      delta,
      controls
    );
  });
  return (
    <RigidBody
      type={"dynamic"}
      lockRotations
      gravityScale={0}
      canSleep={false}
      friction={3}
      colliders={false}
      ref={rigidPlayer}
      position={[11, 0.667, 19]}
      collisionGroups={interactionGroups(0, [0, 1, 2])}
      onCollisionEnter={() => {
        store.collision = true;
        console.log("collision");
      }}
      onCollisionExit={() => (store.collision = false)}
    >
      <CapsuleCollider args={[0.4, 0.4]} position-y={2} position={[0, 0.9, 0]} />
      <primitive ref={player} rotation-y={-Math.PI} object={avatar.scene} />
    </RigidBody>
  );
};

export default Player;
