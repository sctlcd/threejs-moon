import '../style/style.css';

import * as THREE from 'three';

// create scene
const scene = new THREE.Scene(); // define scene

// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // define camera
camera.position.setZ(30); // set camera position

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight)

// create the plane
const geometry = new THREE.TorusGeometry(10, 3, 16, 100); // define geometry
const material = new THREE.MeshBasicMaterial({ color: 0x80E9FC, wireframe: true }); // define material
const torus = new THREE.Mesh(geometry, material); // define the mesh

scene.add(torus); // add torus to canvas

// make canvas responsive
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight); // update size
  camera.aspect = window.innerWidth / window.innerHeight; // update aspect ratio
  camera.updateProjectionMatrix(); // apply changes
})

renderer.render(scene, camera);

// rendering the scene
function rendering() {
  // rerender every time the page refreshes (pause when on another tab)
  requestAnimationFrame(rendering);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

rendering();