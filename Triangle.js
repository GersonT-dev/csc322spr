
//For JSFiddle insert this url https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js
// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// Scene
const scene = new THREE.Scene();

// Material and Geometry for Line
const material = new THREE.LineBasicMaterial({ color: 0xffffff });
const points = [
  new THREE.Vector3(-10, 0, 0),
  new THREE.Vector3(0, 10, 0),
  new THREE.Vector3(10, 0, 0),
  new THREE.Vector3(-10, 0, 0),
];
const geometry = new THREE.BufferGeometry().setFromPoints(points);

// Line
const line = new THREE.Line(geometry, material);
scene.add(line);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

