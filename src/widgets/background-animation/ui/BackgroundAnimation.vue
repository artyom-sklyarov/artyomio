<template>
  <div ref="container" :class="styles.container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { camera, renderer, scene, uniforms } from '../model/constants';
import styles from './styles.module.scss';

const container = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!container.value) return;

  container.value.appendChild(renderer.domElement);

  let lastTime = performance.now();

  const animate = () => {
    requestAnimationFrame(animate);

    const currentTime = performance.now();
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    uniforms.time.value += deltaTime;
    renderer.render(scene, camera);
  };

  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
  });
});
</script>
