"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/Model";

export default function ModelViewer() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="rounded-2xl overflow-hidden shadow-lg border bg-white">

        {/* HEADER */}
        <div className="px-6 py-4 border-b bg-gray-50">
          <h2 className="text-xl font-semibold">3D Model Viewer</h2>
          <p className="text-sm text-gray-500">Putar • Zoom • Geser model</p>
        </div>

        {/* CANVAS */}
        <div className="h-[450px] bg-gray-100">
          <Canvas camera={{ position: [6, 4, 6], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 10]} />

            {/* 🔴🟢🔵 SUMBU X Y Z */}
            <axesHelper args={[5]} />

            <Model />

            <OrbitControls enableDamping />
          </Canvas>
        </div>

      </div>
    </div>
  );
}
