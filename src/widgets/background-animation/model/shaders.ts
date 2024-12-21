export const fragmentShader = `
precision highp float;

// Constants for noise generation
const float HASH_MULT1 = 1597.0;
const float HASH_MULT2 = 3571.0;
const float HASH_MULT3 = 2869.0;
const float HASH_SCALE = 43758.5453123;

// Constants for fbm
const float FBM_AMPLITUDE = 0.5;
const float FBM_FREQUENCY = 1.0;
const float FBM_GAIN = 0.5;
const float FBM_LACUNARITY = 2.0;
const int FBM_OCTAVES = 4;

// Constants for domain warping
const float WARP_SCALE = 2.0;
const vec2 WARP_OFFSET1 = vec2(1.7, 3.2);
const vec2 WARP_OFFSET2 = vec2(1.3, -2.1);
const vec2 WARP_OFFSET3 = vec2(3.1, -1.4);

uniform float time;
uniform vec2 uvScale;
uniform float speed;
uniform vec2 resolution;

varying vec2 vUv;

vec2 fixAspectRatio(vec2 uv) {
    float aspectRatio = resolution.x / resolution.y;
    uv.x *= aspectRatio;
    return uv;
}

float pcg(float v) {
    float state = fract(v * HASH_MULT1);
    state = fract(((state * state) + v) * HASH_MULT2);
    state = fract(((state * state) + v) * HASH_MULT3);
    return state;
}

vec2 hash2(vec2 p) {
    return vec2(
        pcg(p.x * 11.1317 + p.y * 13.7931),
        pcg(p.y * 11.1317 + p.x * 13.7931)
    );
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(dot(hash2(i + vec2(0.0,0.0)), f - vec2(0.0,0.0)),
            dot(hash2(i + vec2(1.0,0.0)), f - vec2(1.0,0.0)), u.x),
        mix(dot(hash2(i + vec2(0.0,1.0)), f - vec2(0.0,1.0)),
            dot(hash2(i + vec2(1.0,1.0)), f - vec2(1.0,1.0)), u.x),
        u.y
    );
}

float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = FBM_AMPLITUDE;
    float frequency = FBM_FREQUENCY;
    for(int i = 0; i < FBM_OCTAVES; i++) {
        value += amplitude * noise(p * frequency);
        frequency *= FBM_LACUNARITY;
        amplitude *= FBM_GAIN;
    }
    return value;
}

void main() {
    float t = time * speed * 0.4;
    vec2 uv = fixAspectRatio(vUv) * uvScale;

    vec2 q = vec2(
        fbm(uv * WARP_SCALE + t),
        fbm(uv * WARP_SCALE + WARP_OFFSET1)
    );

    vec2 r = vec2(
        fbm(uv * WARP_SCALE + WARP_SCALE * q + WARP_OFFSET2),
        fbm(uv * WARP_SCALE + WARP_SCALE * q + WARP_OFFSET3)
    );

    float f = fbm(uv * WARP_SCALE + WARP_SCALE * r);

    // Convert to black and white
    float intensity = f * 1.2;
    vec3 color = vec3(intensity * 0.5);

    gl_FragColor = vec4(color, 1.0);
}
`

export const vertexShader = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
