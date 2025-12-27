"use client";

import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { scene } = useGLTF("/models/rumah.glb");

  return (
    <primitive
      object={scene}
      scale={0.04}
      position={[0, 0, 1]} // ⬅️ PUSAT MANUAL
    />
  );
}
