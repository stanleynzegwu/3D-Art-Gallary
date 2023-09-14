import React, { useRef, useState } from "react";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Test() {
  //   const texture = useTexture("/images/my.JPG");
  const material = new THREE.MeshBasicMaterial();
  const { nodes } = useGLTF("/models/addMypicture.glb");

  ///
  const [file, setFile] = useState();
  console.log(file);
  const [texture, setTexture] = useState();
  const t = useTexture(texture);
  if (t) {
    material.map = t;
  }
  const reader = (file) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
    });

  const readFile = () => {
    reader(file).then((result) => {
      setTexture(result);
    });
  };

  return (
    <>
      <group dispose={null}>
        <mesh
          name="addMyPicture"
          geometry={nodes.addMyPicture.geometry}
          material={material}
          position={[-16.983, 2.244, 5.253]}
        />
      </group>
      <Html>
        <div className="z-20 w-[80%] h-[80%]">
          <label htmlFor="file" className="w-[80%] h-[80%] cursor-pointer">
            Upload
          </label>
          <input
            type="file"
            accept="image/*"
            id="file"
            name="img"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button onClick={readFile}>map</button>
        </div>
      </Html>
    </>
  );
}

useGLTF.preload("/models/addMypicture.glb");

// const ImageUpload = () => {
//   const [filePreview, setFilePreview] = useState();
//   const [file, setFile] = useState();
//   console.log(filePreview);

//   function handleChange(e) {
//     setFilePreview(URL.createObjectURL(e.target.files[0]));
//     setFile(e.target.files[0]);
//   }

//   return (
//     <div className="z-20 w-[80%] h-[80%]">
//       <label htmlFor="file" className="w-[80%] h-[80%] cursor-pointer">
//         Upload
//       </label>
//       <input type="file" id="file" name="img" style={{ display: "none" }} onChange={handleChange} />
//     </div>
//   );
// };

// export default ImageUpload;
