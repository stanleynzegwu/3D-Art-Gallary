import gsap from "gsap";
import { store } from "../store";
import * as THREE from 'three'

export const toggleFullScreen = (gl) => {
  window.addEventListener("dblclick", () => {
    const canvas = gl.domElement;
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;

    if (!fullscreenElement) {
      if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
      } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  });
}

export const toggleMovement = () => {
  store.movementType === "Walking" ? (store.movementType = "Running") : (store.movementType = "Walking");
}

export const playAnimation = (keyPressed) => {
  
  const isKeyPressed = keyPressed.some(key => key === true)

    if(isKeyPressed){
      store.currentAnimation = store.movementType
    }else{
      store.currentAnimation = 'Standing'
    }
  
}

const directionOffsetFunc = (keyPressed) => {
  let directionOffset = 0 //w

  if(keyPressed[1] ){
    if(keyPressed[3]){
      directionOffset = Math.PI /4 // s + d
    }else if(keyPressed[2]){
      directionOffset = - Math.PI/4 // s + a
    }
  }else if(keyPressed[0]){
    if(keyPressed[3]){
      directionOffset = Math.PI / 4 + Math.PI / 2 //w + d
    }else if(keyPressed[2]){
      directionOffset = - Math.PI/4 - Math.PI / 2 // w + a
    }else{
      directionOffset = Math.PI //s
    }
  }else if(keyPressed[3]){
    directionOffset = Math.PI / 2 //d
  }else if(keyPressed[2]){
    directionOffset = -Math.PI / 2 //a
  }

  return directionOffset
}

const updateCameraTarget = (camera,rigidPlayer,moveX, moveZ,orbitControl) => {
  let cameraTarget = new THREE.Vector3()

  // move camera
  if(store.collision){
    camera.position.y = rigidPlayer.translation().y + 2
  }else{
    camera.position.x -= moveX
    camera.position.y = rigidPlayer.translation().y + 2 
    camera.position.z -= moveZ
  }

  // update camera target
  cameraTarget.x = rigidPlayer.translation().x
  cameraTarget.y = rigidPlayer.translation().y + 2
  cameraTarget.z = rigidPlayer.translation().z
  orbitControl.target = cameraTarget
}

export const updateCharacter = (keyPressed,camera,rigidPlayer,player,delta,control,rapier,world) => {
// temporary data
  let walkDirection = new THREE.Vector3()
  let rotateAngle = new THREE.Vector3(0, 1, 0)
  let rotateQuarternion= new THREE.Quaternion()
 
  
  const isKeyPressed = keyPressed.some(key => key === true)
  //Update whether the key is currently being pressed so that any componet that needs it will know
  store.isKeyPressed = isKeyPressed
  if(isKeyPressed){
   let angleYCameraDirection = Math.atan2(
    camera.position.x - rigidPlayer.translation().x,
    camera.position.z - rigidPlayer.translation().z
    )
    //diagonal movement angle offset
    let directionOffset = directionOffsetFunc(keyPressed)

    //rotate model
    rotateQuarternion.setFromAxisAngle(rotateAngle, angleYCameraDirection + directionOffset)
    player.quaternion.rotateTowards(rotateQuarternion, 0.2)

    // calculate direction
    camera.getWorldDirection(walkDirection)
    walkDirection.y = 0
    walkDirection.normalize()
    walkDirection.applyAxisAngle(rotateAngle, directionOffset)

    // run/walk velocity
    const velocity = store.movementType == 'Running' ? 5 : 4
      
    const moveX = walkDirection.x * velocity * delta
    const moveZ = walkDirection.z * velocity * delta

    let playerPosition = rigidPlayer.translation();
    playerPosition.x -= moveX;
    playerPosition.z -= moveZ;
    rigidPlayer.setTranslation(playerPosition, true)
    
    //call the raycast function
    raycast(rigidPlayer,player,rapier,world)
    //call the updateCameraTarget function
    updateCameraTarget(camera,rigidPlayer,moveX, moveZ, control)
        
    }

}

export const raycast = (rigidPlayer,player,rapier,world) => {
  const origin = rigidPlayer.translation()
  origin.y += 1.1
  const direction = player.getWorldDirection(new THREE.Vector3())
  direction.normalize()

  const ray = new rapier.Ray(origin, direction)
  const hit = world.castRay(ray)

  if(hit){
    //check for collision with objects
    if(hit.toi <= 0.5){
      if(!store.collision){
        store.collision = true
      }
    }else{
      if(store.collision){
        store.collision = false
      }
    }

    //check how close the player is to the selceted arts
    if((hit.toi <= 4) && (hit.collider._parent.userData !== undefined)){
      if(store.currentIntersectedObject?.frame !== hit.collider._parent.userData.frame){
        store.currentIntersectedObject = hit.collider._parent.userData
      }
    }else{
      store.currentIntersectedObject = null
    }
  }
}

export const animateToArt = (camera,controls, artPosition, direction) => {
  controls.enabled = false;
  const timeline = gsap.timeline();

  timeline.to(camera.position, {
    duration: 2,
    x: artPosition.x + direction[0],
    y: artPosition.y + direction[1],
    z: artPosition.z + direction[2],
    ease: "linear",
  });
  timeline.to(
    {},
    {
      onUpdate: () => {
        camera.lookAt(artPosition);
      },
    }
  );
  timeline.play();
};

export function handleArtClick(event, name, userData,camera,controls) {
  event.stopPropagation();

  // Check if the clicked art is already in view
  if (store.animateCameraToArt.artName === name) return;

  //stop character controls
  store.keypressIsEnabled = false

  // Get the world position of the clicked art
  const artPosition = event.eventObject.getWorldPosition(new THREE.Vector3());

  // Update the store based on the current state
  if (store.animateCameraToArt.isArtViewMode) {
    store.animateCameraToArt.artName = name;
  } else {
    store.animateCameraToArt = {
      prevCameraPosition: camera.getWorldPosition(new THREE.Vector3()),
      isArtViewMode: true,
      artName: name,
    };
  }

  // Animate the camera to the art painting
  animateToArt(camera, controls, artPosition, userData.direction);
}