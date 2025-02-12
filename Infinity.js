// Import THREE.js
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
// Import OrbitControls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);

// Create OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 10;
controls.maxDistance = 200;

// Create scene
const scene = new THREE.Scene();

// Create material (keep original variable name)
const circleMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });

// Generate points for infinity shape (Lemniscate of Bernoulli)
const circlePoints = [];
const a = 20; // Scale factor for infinity symbol
const segments = 200; // Number of points for a smooth curve

for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * (2 * Math.PI);  // Parameter for the curve
    const x = (a * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
    const y = (a * Math.cos(t) * Math.sin(t)) / (1 + Math.sin(t) * Math.sin(t));
    circlePoints.push(new THREE.Vector3(x, y, 0));
}

// Create geometry and add to scene (keep original variable name)
const circleGeometry = new THREE.BufferGeometry().setFromPoints(circlePoints);
const circle = new THREE.Line(circleGeometry, circleMaterial);
scene.add(circle);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Start animation
animate();
