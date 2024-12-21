import * as THREE from 'three';
import { fragmentShader, vertexShader } from './shaders';

const WIDTH_BREAKPOINT = 800;

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(window.devicePixelRatio);
const geometry = new THREE.PlaneGeometry(2, 2);
const uniforms: Record<string, THREE.IUniform> = {
  time: { value: 0 },
  uvScale: { value: new THREE.Vector2(2.0, 2.0) },
  color1: { value: new THREE.Color(0xffffff) },
  color2: { value: new THREE.Color(0xffffff) },
  color3: { value: new THREE.Color(0xffffff) },
  speed: { value: 0.5 },
  resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
};

const material = new THREE.ShaderMaterial({
  uniforms,
  vertexShader,
  fragmentShader,
  transparent: true,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);

export {
  camera,
  renderer,
  scene,
  WIDTH_BREAKPOINT,
  uniforms,
  mesh
};
