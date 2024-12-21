import * as THREE from 'three';
import { fragmentShader, vertexShader } from './shaders';

const WIDTH_BREAKPOINT = 800;

const camera = new THREE.PerspectiveCamera();

camera.position.z = 1;

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();

const uniforms: Record<string, THREE.IUniform> = {
  color1: { value: new THREE.Color(0xffffff) },
  color2: { value: new THREE.Color(0xffffff) },
  color3: { value: new THREE.Color(0xffffff) },
  iterations: { value: 1 },
  permutations: { value: 5 },
  brightness: { value: 0.1 },
  time: { value: 0 },
  speed: { value: 0.002 },
  uvScale: { value: new THREE.Vector2(0.2, 0.2) }
};

const material = new THREE.RawShaderMaterial({
  uniforms,
  vertexShader,
  fragmentShader
});

const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);

export {
  camera,
  renderer,
  scene,
  WIDTH_BREAKPOINT,
  uniforms,
  mesh
};
