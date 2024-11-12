// 'use client'

// import React, { useRef, useLayoutEffect } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";
// import { useTransform, useScroll, useTime } from "framer-motion";
// import { degreesToRadians, mix } from "popmotion";
// import { OrbitControls } from '@react-three/drei';

// const Icosahedron = () => (
//   <mesh rotation-x={0.35}>
//     <icosahedronGeometry args={[1, 0]} />
//     <meshBasicMaterial wireframe color="#111111" />
//   </mesh>
// );

// const Star = ({ p }) => {
//   const ref = useRef(null);

//   useLayoutEffect(() => {
//     const distance = mix(2, 3.5, Math.random());
//     const yAngle = mix(degreesToRadians(80), degreesToRadians(100), Math.random());
//     const xAngle = degreesToRadians(360) * p;
//     ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
//   }, [p]);

//   return (
//     <mesh ref={ref}>
//       <boxGeometry args={[0.05, 0.05, 0.05]} />
//       <meshBasicMaterial wireframe color="#111111" />
//     </mesh>
//   );
// };

// const Scene = ({ numStars = 100 }) => {
//   const gl = useThree((state) => state.gl);
//   const { scrollYProgress } = useScroll();
//   const yAngle = useTransform(scrollYProgress, [0, 1], [0.001, degreesToRadians(180)]);
//   const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
//   const time = useTime();
  
//   const { scene } = useGLTF('/path/to/your/model.glb'); // Adjust the path to your GLTF model

//   useFrame(({ camera }) => {
//     camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), time.get() * 0.0005);
//     camera.updateProjectionMatrix();
//     camera.lookAt(0, 0, 0);
//   });

//   useLayoutEffect(() => gl.setPixelRatio(0.3), [gl]);

//   const stars = Array.from({ length: numStars }, (_, i) => <Star key={i} p={i / numStars} />);

//   return (
//     <>
//       <Icosahedron />
//       <primitive object={scene} />
//       {stars}
//       <OrbitControls />
//     </>
//   );
// };

// export default Scene;
