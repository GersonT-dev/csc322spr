// Import THREE
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
// Import OrbitControls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
camera.position.z = 1000;
camera.position.y = 0;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//Green in hexadecimal
// Material and Geometry for Line (Pyramidion)
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const points = [
   new THREE.Vector3(-34, 500, -34),
  new THREE.Vector3(-34, 500, 34),
  new THREE.Vector3(0, 555, 0),
  new THREE.Vector3(-34, 500, -34),
   
 
];
const geometry = new THREE.BufferGeometry().setFromPoints(points);


// Creates the mesh for the wall of the shape
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );
//Light green cyan in hexadecimal 
// Material and Geometry for Line (Triangle)
const material2 = new THREE.MeshBasicMaterial( { color: 0x00fcc3 } );
const points2 = [
   new THREE.Vector3(34, 500, 34),
  new THREE.Vector3(34, 500, -34),
  new THREE.Vector3(0, 555, 0),
  new THREE.Vector3(34, 500, 34),
   
 
];
const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);

// Creates the mesh for the wall of the shape
const mesh2 = new THREE.Mesh( geometry2, material2 ) ;
scene.add( mesh2 );
//Color White in rgb
const material3 = new THREE.MeshBasicMaterial( { color: "rgb(255, 255, 255)" } );
const points3 = [
   new THREE.Vector3(34, 500, -34),
  new THREE.Vector3(-34, 500, -34),
  new THREE.Vector3(0, 555, 0),
  new THREE.Vector3(34, 500, 34),
   
 
];
const geometry3 = new THREE.BufferGeometry().setFromPoints(points3);


// Creates the mesh for the wall of the shape
const mesh3 = new THREE.Mesh( geometry3, material3 ) ;
scene.add( mesh3 );
//grey rgb
const material4 = new THREE.MeshBasicMaterial( { color: "rgb(128, 128, 128)" } );
const points4 = [
   new THREE.Vector3(-34, 500, 34),
  new THREE.Vector3(34, 500, 34),
  new THREE.Vector3(0, 555, 0),
  new THREE.Vector3(-34, 500, -34),
   
 
];
const geometry4 = new THREE.BufferGeometry().setFromPoints(points4);


// Creates the mesh for the wall of the shape
const mesh4 = new THREE.Mesh( geometry4, material4 ) ;
scene.add( mesh4 );

// Material and Geometry for Line (rectangle)
//rgb blue
const material5 = new THREE.MeshBasicMaterial( { color: "rgb(0, 0, 225)" } );
const points5 = [
new THREE.Vector3(-55, 0, 55),
new THREE.Vector3(55, 0, 55),
new THREE.Vector3(34, 500, 34),
new THREE.Vector3(-34, 500, 34),
new THREE.Vector3(-55, 0, 55),
new THREE.Vector3(-55, 0, 55),
new THREE.Vector3(55, 0, 55),
new THREE.Vector3(34, 500, 34),
new THREE.Vector3(-34, 500, 34),
new THREE.Vector3(-55, 0, 55),
new THREE.Vector3(-55, 0, 55),
new THREE.Vector3(55, 0, 55),
new THREE.Vector3(34, 500, 34),
new THREE.Vector3(-34, 500, 34),
new THREE.Vector3(-55, 0, 55),

];
const geometry5 = new THREE.BufferGeometry().setFromPoints(points5);


// Creates the mesh for the wall of the shape
const mesh5 = new THREE.Mesh( geometry5, material5 ) ;
scene.add( mesh5 );

const material6 = new THREE.MeshBasicMaterial( { color: 'red' } );
const points6 = [
new THREE.Vector3(55, 0, -55),
new THREE.Vector3(-55, 0, -55),
new THREE.Vector3(-34, 500, -34),
new THREE.Vector3(34, 500, -34),
new THREE.Vector3(55, 0, -55),
new THREE.Vector3(55, 0, -55),
new THREE.Vector3(-55, 0, -55),
new THREE.Vector3(-34, 500, -34),
new THREE.Vector3(34, 500, -34),
new THREE.Vector3(55, 0, -55),
new THREE.Vector3(55, 0, -55),
new THREE.Vector3(-55, 0, -55),
new THREE.Vector3(-34, 500, -34),
new THREE.Vector3(34, 500, -34),
new THREE.Vector3(55, 0, -55),

];
const geometry6 = new THREE.BufferGeometry().setFromPoints(points6);


// Creates the mesh for the wall of the shape
const mesh6 = new THREE.Mesh( geometry6, material6 ) ;
scene.add( mesh6 );

const material7 = new THREE.MeshBasicMaterial( { color: 'orange' } );
const points7 = [
new THREE.Vector3(-55, 0, 55),
new THREE.Vector3(-34, 500, 34),
new THREE.Vector3(-34, 500, -34),
new THREE.Vector3(-55, 0, -55),
new THREE.Vector3(-55, 0, 55),
new THREE.Vector3(-55, 0, 55),
new THREE.Vector3(-34, 500, 34),
new THREE.Vector3(-34, 500, -34),
new THREE.Vector3(-55, 0, -55),
new THREE.Vector3(-55, 0, 55),
new THREE.Vector3(-55, 0, 55),
new THREE.Vector3(-34, 500, 34),
new THREE.Vector3(-34, 500, -34),
new THREE.Vector3(-55, 0, -55),
new THREE.Vector3(-55, 0, 55),

];
const geometry7 = new THREE.BufferGeometry().setFromPoints(points7);

// Creates the mesh for the wall of the shape
const mesh7 = new THREE.Mesh( geometry7, material7 ) ;
scene.add( mesh7 );

const material8 = new THREE.MeshBasicMaterial( { color: 'purple' } );
const points8 = [
new THREE.Vector3(55, 0, 55),
new THREE.Vector3(55, 0, -55),
new THREE.Vector3(34, 500, -34),
new THREE.Vector3(34, 500, 34),
new THREE.Vector3(55, 0, 55),
new THREE.Vector3(55, 0, 55),
new THREE.Vector3(55, 0, -55),
new THREE.Vector3(34, 500, -34),
new THREE.Vector3(34, 500, 34),
new THREE.Vector3(55, 0, 55),
new THREE.Vector3(55, 0, 55),
new THREE.Vector3(55, 0, -55),
new THREE.Vector3(34, 500, -34),
new THREE.Vector3(34, 500, 34),
new THREE.Vector3(55, 0, 55),

];
const geometry8 = new THREE.BufferGeometry().setFromPoints(points8);

// Creates the mesh for the wall of the shape
const mesh8 = new THREE.Mesh( geometry8, material8 ) ;
scene.add( mesh8 );



// Add directional light for better visualization
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Set up animation
var animate = function () {
  requestAnimationFrame(animate);
  mesh.rotation.y += 0.01;
  mesh2.rotation.y += 0.01;
  mesh3.rotation.y += 0.01;
  mesh4.rotation.y += 0.01;
  mesh5.rotation.y += 0.01;
  mesh6.rotation.y += 0.01;
  mesh7.rotation.y += 0.01;
  mesh8.rotation.y += 0.01;
  
  //mesh5.rotation.y += 0.01;
  renderer.render(scene, camera);
};


// Set up OrbitControls for camera interaction
var controls = new OrbitControls(camera, renderer.domElement);

// Start the animation
animate();