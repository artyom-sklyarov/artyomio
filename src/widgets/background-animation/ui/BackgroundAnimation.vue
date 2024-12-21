<template>
  <div ref="container" :class="styles.container"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three';
import { onMounted, ref } from 'vue';
import { fragmentShader, vertexShader } from '../model/shaders';
import styles from './styles.module.scss';

const container = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!container.value) return

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    powerPreference: "high-performance"
  })

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  const geometry = new THREE.PlaneGeometry(2, 2)

  const uniforms = {
    time: { value: 0 },
    uvScale: { value: new THREE.Vector2(2.0, 2.0) },
    color1: { value: new THREE.Vector3(1.0, 0.0, 0.0) },  // Red
    color2: { value: new THREE.Vector3(0.0, 1.0, 0.0) },  // Green
    color3: { value: new THREE.Vector3(0.0, 0.0, 1.0) },  // Blue
    speed: { value: 0.5 },
    resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  }

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true
  })

  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)
  scene.background = null

  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value.appendChild(renderer.domElement)

  // Animation loop
  const FPS = 60;
  const frameTime = 1000 / FPS;
  let lastTime = performance.now();

  const animate = () => {
    requestAnimationFrame(animate);

    const currentTime = performance.now();
    const deltaTime = currentTime - lastTime;

    if (deltaTime > frameTime) {
      lastTime = currentTime - (deltaTime % frameTime);
      uniforms.time.value += 0.01;
      renderer.render(scene, camera);
    }
  }

  animate()

  const onResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    uniforms.resolution.value.set(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', onResize)

  renderer.setClearColor(0x000000, 0)
})
</script>
