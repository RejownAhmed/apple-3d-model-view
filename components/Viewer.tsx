"use client"

import React, { Suspense, useRef } from 'react'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

import { Model } from './3DModel.tsx'

export default function Viewer() {
    const reference = useRef()
    return (
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 100 }} style={{ width: '100vw', height: '100vh' }}>
        <Suspense fallback={null}>
          <Stage controls={reference} preset="rembrandt" intensity={1}  environment="city">
          false
            <Model />
          false
          </Stage>
        </Suspense>
        <OrbitControls ref={reference} autoRotate enableZoom={false} />
      </Canvas>
    )
}
