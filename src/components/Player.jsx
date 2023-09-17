import { useKeyboardControls, useGLTF, useFBX, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRapier, RigidBody, CapsuleCollider } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useSnapshot } from "valtio";

import { store } from "../store";
import { playAnimation, toggleMovement, updateCharacter } from "../utils";
const audio = new Audio("/audio/footstep.mp3");

//cHARACTER ANIMATION
const Player = () => {
  const { rapier, world } = useRapier();
  const snap = useSnapshot(store);
  const avatar = useGLTF("models/avatar.glb");
  const player = useRef();
  const rigidPlayer = useRef();

  const { animations: runningAnimation } = useFBX("./animations/Running.fbx");
  const { animations: standingAnimation } = useFBX("./animations/Standing Idle.fbx");
  const { animations: walkingAnimation } = useFBX("./animations/Walking.fbx");
  const { animations: ascendingStairsAnimation } = useFBX("./animations/Ascending Stairs.fbx");
  const { animations: descendingStairsAnimation } = useFBX("./animations/Descending Stairs.fbx");

  runningAnimation[0].name = "Running";
  standingAnimation[0].name = "Standing";
  walkingAnimation[0].name = "Walking";
  ascendingStairsAnimation[0].name = "Ascending";
  descendingStairsAnimation[0].name = "Descending";

  const { actions } = useAnimations(
    [
      runningAnimation[0],
      standingAnimation[0],
      walkingAnimation[0],
      ascendingStairsAnimation[0],
      descendingStairsAnimation[0],
    ],
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

  //Play the footstep audio if the WASD/Arrow keys is/are pressed
  useEffect(() => {
    if (snap.audio && snap.isKeyPressed) {
      audio.currentTime = 0;
      audio.play();
      audio.loop = true;
      audio.volume = 0.5;
    }

    return () => {
      audio.pause();
    };
  }, [snap.audio, snap.isKeyPressed]);

  useFrame(({ camera, controls }, delta) => {
    //KEYBOARDCONTROLS
    const { forward, backward, leftward, rightward } = getKeys();
    //PLAY ANIMATION BASED ON CURRENT USER INTERACTION
    playAnimation([forward, backward, leftward, rightward]);

    if (snap.keypressIsEnabled) {
      updateCharacter(
        [forward, backward, leftward, rightward],
        camera,
        rigidPlayer.current,
        player.current,
        delta,
        controls,
        rapier,
        world
      );
    }
  });
  return (
    <>
      <RigidBody
        type={"dynamic"}
        lockRotations
        canSleep={false}
        friction={3}
        colliders={false}
        ref={rigidPlayer}
        position={[11, 2, 19]}
        onCollisionEnter={() => {
          store.collision = true;
        }}
        onCollisionExit={() => (store.collision = false)}
      >
        <CapsuleCollider args={[0.5, 0.4]} position-y={2} position={[0, 0.9, 0]} />
        <primitive ref={player} rotation-y={-Math.PI} object={avatar.scene} />
      </RigidBody>
    </>
  );
};

export default Player;
