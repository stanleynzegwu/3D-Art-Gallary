import { store } from "../store";
import * as THREE from 'three'

export const makeFullScreen = (gl) => {
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

export const isCollision = (collision) => {
  let playerCollided = false

  collision ? playerCollided = true : playerCollided = false

  return playerCollided
}

export const playAnimation = (keyPressed) => {
  
  const isKeyPressed = keyPressed.some(key => key === true)

    if(isKeyPressed){
      store.currentAnimation = store.movementType
    }else{
      store.currentAnimation = 'Standing'
    }
  
}


const updateCameraTarget = (camera,rigidPlayer,moveX, moveZ,orbitControl) => {
  let cameraTarget = new THREE.Vector3()

  // move camera
  camera.position.x -= moveX
  camera.position.z -= moveZ

  // update camera target
  cameraTarget.x = rigidPlayer.translation().x
  cameraTarget.y = rigidPlayer.translation().y + 2
  cameraTarget.z = rigidPlayer.translation().z
  orbitControl.target = cameraTarget
}

export const playerdirection = (keyPressed,camera,rigidPlayer,player,delta,control,rapier,world) => {
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

   // temporary data
  let walkDirection = new THREE.Vector3()
  let rotateAngle = new THREE.Vector3(0, 1, 0)
  let rotateQuarternion= new THREE.Quaternion()
 
  
  const isKeyPressed = keyPressed.some(key => key === true)
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
       const velocity = store.movementType == 'Running' ? 4 : 3
       let playerPosition = rigidPlayer.translation();
      
        const moveX = walkDirection.x * velocity * delta
        const moveZ = walkDirection.z * velocity * delta

        playerPosition.x -= moveX;
        playerPosition.z -= moveZ;
        rigidPlayer.setTranslation(playerPosition, true)

        updateCameraTarget(camera,rigidPlayer,moveX, moveZ, control)
        raycast(rigidPlayer,player,rapier,world)
    }

}

export const raycast = (rigidPlayer,player,rapier,world) => {
  const origin = rigidPlayer.translation()
  origin.y += 1.3
  const direction = player.getWorldDirection(new THREE.Vector3())
  direction.normalize()

  const ray = new rapier.Ray(origin, direction)
  const hit = world.castRay(ray)

  if(hit){
    if((hit.toi <= 4) && (hit.collider._parent.userData !== undefined)){
      if(store.currentIntersectedObject?.frame !== hit.collider._parent.userData.frame){
        store.currentIntersectedObject = hit.collider._parent.userData
      }
    }else{
      store.currentIntersectedObject = null
    }
  }
}