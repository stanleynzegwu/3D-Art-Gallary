import React, { useRef } from "react";
import { Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: "#ffffff",
  transmission: 1,
  opacity: 1,
  metalness: 0,
  roughness: 0.1,
  ior: 1.5,
  thickness: 0.5,
  // specularIntensity: 1,
  // specularColor: "ffffff",
});
// const glassMaterial = new THREE.MeshStandardMaterial({
//   color: "red",
// });

const blueglass = new THREE.MeshBasicMaterial({
  transparent: true,
  opacity: 0.2,
  color: "blue",
});
const stepGlass = new THREE.MeshBasicMaterial({
  transparent: true,
  opacity: 0.8,
  color: "#ffffff",
});

export function Glass(props) {
  const { nodes, materials } = useGLTF("/gallaryGlass.glb");
  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          name="stairGlass"
          geometry={nodes.stairGlass.geometry}
          material={stepGlass}
          position={[19.446, 1.037, 0.718]}
        />
        <mesh
          name="blueGlass"
          geometry={nodes.blueGlass.geometry}
          material={blueglass}
          position={[-27.016, 1.28, -28.246]}
        />
        <mesh
          name="glass"
          geometry={nodes.glass.geometry}
          material={glassMaterial}
          position={[29.05, 1.203, 11.819]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.048, 0.859, 1]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/gallaryGlass.glb");

// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";

// export function Glass() {
//   const glassObject = useGLTF("gallaryGlass.glb");

//   const glass = glassObject.scene.children.find(({ name }) => name === "glass");

//   const glassMaterial = new THREE.MeshPhysicalMaterial({
//     color: "FF0000",
//     transparent: true,
//     transmission: 1,
//     opacity: 1,
//     // metalness: 0,
//     roughness: 0.4,
//     ior: 1.5,
//     thickness: 0.5,
//     // specularIntensity: 1,
//     // specularColor: "ffffff",
//   });
//   console.log(glassMaterial);

//   glass.material = glassMaterial;
//   return (
//     <>
//       <primitive position-y={-1.5} object={glassObject.scene} />
//     </>
//   );
// }

// useGLTF.preload("/gallaryGlass.glb");
