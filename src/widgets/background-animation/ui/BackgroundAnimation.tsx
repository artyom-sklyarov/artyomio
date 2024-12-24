import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { fragmentShader, vertexShader } from '../model/shaders'
import styles from './styles.module.scss'

function AnimatedMesh() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const { size } = useThree()

  // Update uniforms when window resizes
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.resolution.value.set(size.width, size.height)
    }
  }, [size])

  // Animation loop
  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value += delta
    }
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        uniforms={{
          time: { value: 0 },
          uvScale: { value: new THREE.Vector2(2.0, 2.0) },
          color1: { value: new THREE.Color(0xffffff) },
          color2: { value: new THREE.Color(0xffffff) },
          color3: { value: new THREE.Color(0xffffff) },
          speed: { value: 0.5 },
          resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        }}
      />
    </mesh>
  )
}

export function BackgroundAnimation() {
  return (
    <div className={styles.container}>
      <Canvas
        orthographic
        camera={{ left: -1, right: 1, top: 1, bottom: -1, near: 0, far: 1 }}
        gl={{
          alpha: true,
          powerPreference: 'high-performance',
          antialias: true,
          pixelRatio: window.devicePixelRatio,
        }}
      >
        <AnimatedMesh />
      </Canvas>
    </div>
  )
}
