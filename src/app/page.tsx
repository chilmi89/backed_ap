"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../app/components/Model";

export default function ModelViewer() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">

      {/* JUDUL UTAMA */}
      <h2 className="text-3xl font-bold mb-6 text-teal-800">
        Testing 3D Model
      </h2>

      {/* CARD */}
      <div className="rounded-2xl overflow-hidden shadow-lg border bg-white">

        {/* HEADER CARD */}
        <div className="px-6 py-4 border-b bg-gray-50">
          <h3 className="text-xl font-semibold text-amber-800">3D Model Viewer</h3>
          <p className="text-sm text-gray-500">
            Putar • Zoom • Geser model
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex justify-center py-6 bg-gray-200">
          
          {/* WRAPPER CANVAS (LEBAR DIKECILKAN) */}
          <div className="w-full max-w-2xl h-[300px] bg-white rounded-xl shadow-inner">
            <Canvas
              camera={{
                position: [5, 3, 5],
                fov: 50,
              }}
            >
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 10]} />

              <Model />

              <OrbitControls
                target={[0, 0, 0]}
                enableDamping
              />
            </Canvas>
          </div>

        </div>

      </div>
    </div>
  );
}
