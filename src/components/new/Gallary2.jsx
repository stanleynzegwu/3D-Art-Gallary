import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { pivots } from "../../constants";
import { RigidBody } from "@react-three/rapier";

export function Gallary2(props) {
  const { nodes } = useGLTF("/models/gallaryModel2.glb");

  const texture = useTexture("textures/gallaryTexture2.jpg");

  const glassMaterial = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0.7,
  });

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshBasicMaterial({
    map: texture,
  });

  return (
    <group {...props} dispose={null}>
      <RigidBody type={"fixed"}>
        {pivots(nodes, textureMaterial).map(({ name, geometry, position }) => (
          <mesh
            key={geometry + name}
            name={name}
            geometry={geometry}
            material={textureMaterial}
            position={position}
          />
        ))}
      </RigidBody>

      <mesh
        name="officeChairUpper1"
        geometry={nodes.officeChairUpper1.geometry}
        material={textureMaterial}
        position={[8.239, 0.995, 3.171]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="monitor001"
        geometry={nodes.monitor001.geometry}
        material={textureMaterial}
        position={[7.445, 1.644, 3.16]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="computerChairTvDisplayAndFrames"
        geometry={nodes.computerChairTvDisplayAndFrames.geometry}
        material={textureMaterial}
        position={[7.376, 1.644, 6.012]}
        rotation={[Math.PI / 2, 0, -1.638]}
      />

      <mesh
        name="pivotAndStairGlass"
        geometry={nodes.pivotAndStairGlass.geometry}
        material={glassMaterial}
        position={[24.515, 2.312, -21.032]}
      />
      <mesh
        name="keyboard001"
        geometry={nodes.keyboard001.geometry}
        material={textureMaterial}
        position={[7.36, 1.644, 3.111]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="mouse001"
        geometry={nodes.mouse001.geometry}
        material={textureMaterial}
        position={[7.389, 1.644, 3.081]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="officeChairLower1"
        geometry={nodes.officeChairLower1.geometry}
        material={textureMaterial}
        position={[8.239, 0.995, 3.171]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("/models/gallaryModel2.glb");

// import React, { useRef } from "react";
// import { useGLTF, useTexture } from "@react-three/drei";
// import * as THREE from "three";

// export function Gallary2(props) {
//   const { nodes, materials } = useGLTF("/models/gallaryModel2.glb");

//   const texture = useTexture("textures/gallaryTexture2.jpg");

//   const glassMaterial = new THREE.MeshBasicMaterial({
//     transparent: true,
//     opacity: 0.7,
//   });

//   texture.flipY = false;
//   texture.colorSpace = THREE.SRGBColorSpace;

//   const textureMaterial = new THREE.MeshBasicMaterial({
//     map: texture,
//   });

//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         name="officeChairUpper1"
//         geometry={nodes.officeChairUpper1.geometry}
//         material={textureMaterial}
//         position={[8.239, 0.995, 3.171]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//       />
//       <mesh
//         name="monitor001"
//         geometry={nodes.monitor001.geometry}
//         material={textureMaterial}
//         position={[7.445, 1.644, 3.16]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//       />
//       <mesh
//         name="computerChairTvDisplayAndFrames"
//         geometry={nodes.computerChairTvDisplayAndFrames.geometry}
//         material={textureMaterial}
//         position={[7.376, 1.644, 6.012]}
//         rotation={[Math.PI / 2, 0, -1.638]}
//       />
//       <mesh
//         name="pivot1"
//         geometry={nodes.pivot1.geometry}
//         material={textureMaterial}
//         position={[-26.946, 0.667, 16.181]}
//       />
//       <mesh
//         name="pivot2"
//         geometry={nodes.pivot2.geometry}
//         material={textureMaterial}
//         position={[-16.946, 0.667, 16.181]}
//       />
//       <mesh
//         name="pivot3"
//         geometry={nodes.pivot3.geometry}
//         material={textureMaterial}
//         position={[-16.946, 0.667, -15.819]}
//       />
//       <mesh
//         name="pivot4"
//         geometry={nodes.pivot4.geometry}
//         material={textureMaterial}
//         position={[-25.461, 0.667, -19.882]}
//       />
//       <mesh
//         name="pivot5"
//         geometry={nodes.pivot5.geometry}
//         material={textureMaterial}
//         position={[-1.946, 0.667, 16.181]}
//       />
//       <mesh
//         name="pivot6"
//         geometry={nodes.pivot6.geometry}
//         material={textureMaterial}
//         position={[-1.946, 0.667, -15.819]}
//       />
//       <mesh
//         name="pivot8"
//         geometry={nodes.pivot8.geometry}
//         material={textureMaterial}
//         position={[24.515, 1.367, -19.029]}
//       />
//       <mesh
//         name="pivot9"
//         geometry={nodes.pivot9.geometry}
//         material={textureMaterial}
//         position={[24.515, 1.367, -20.101]}
//       />
//       <mesh
//         name="pivot10"
//         geometry={nodes.pivot10.geometry}
//         material={textureMaterial}
//         position={[24.515, 1.367, -21.032]}
//       />
//       <mesh
//         name="pivot7"
//         geometry={nodes.pivot7.geometry}
//         material={textureMaterial}
//         position={[28.434, 1.367, -16.356]}
//       />
//       <mesh
//         name="pivotAndStairGlass"
//         geometry={nodes.pivotAndStairGlass.geometry}
//         material={glassMaterial}
//         position={[24.515, 2.312, -21.032]}
//       />
//       <mesh
//         name="keyboard001"
//         geometry={nodes.keyboard001.geometry}
//         material={textureMaterial}
//         position={[7.36, 1.644, 3.111]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//       />
//       <mesh
//         name="mouse001"
//         geometry={nodes.mouse001.geometry}
//         material={textureMaterial}
//         position={[7.389, 1.644, 3.081]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//       />
//       <mesh
//         name="officeChairLower1"
//         geometry={nodes.officeChairLower1.geometry}
//         material={textureMaterial}
//         position={[8.239, 0.995, 3.171]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/models/gallaryModel2.glb");
