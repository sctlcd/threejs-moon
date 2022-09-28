import '../style/style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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

// Torus
const torusGeometryTexture = new THREE.TextureLoader().load('assets/images/pexels-lucas-pezeta-3772378.jpg');
const torusGeometry = new THREE.TorusGeometry(15, 3, 100, 100); // define geometry
const torusMaterial = new THREE.MeshStandardMaterial({ map: torusGeometryTexture}); // define material
const torus = new THREE.Mesh(torusGeometry, torusMaterial); // define the mesh
scene.add(torus); // add torus to scene

// lights
const pointLight = new THREE.PointLight(0xffffff); // define pointLight
pointLight.position.set(10, 10, 10); // set pointLight position
const ambientLight = new THREE.AmbientLight(0xffffff); // define ambientLight
scene.add(pointLight, ambientLight); // add pointLight and ambientLight to scene

// helpers
const lightHelper = new THREE.PointLightHelper(pointLight); // define pointLight
const gridHelper = new THREE.GridHelper(200, 50); // define gridHelper
scene.add(lightHelper, gridHelper); // add pointLight and gridHelper to scene

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement); // define orbitControls

// texture
const spaceTexture = new THREE.TextureLoader().load('assets/images/pexels-nicole-avagliano-2312040.jpg');
scene.background = spaceTexture;

// dodecahedronGeometry
const dodecahedronGeometryTexture = new THREE.TextureLoader().load('assets/images/pexels-bella-chew-1368317.jpg');

const dodecahedron = new THREE.Mesh(
  new THREE.DodecahedronGeometry(6, 0),
  new THREE.MeshBasicMaterial({ map: dodecahedronGeometryTexture })
  )
scene.add(dodecahedron);

// capsuleGeometry
const capsuleGeometryTexture = new THREE.TextureLoader().load('assets/images/pexels-karolina-grabowska-4040567.jpg');

const capsule = new THREE.Mesh(
  new THREE.CapsuleGeometry(3, 1, 4, 10),
  new THREE.MeshBasicMaterial({ map: capsuleGeometryTexture })
  )
  capsule.position.set(20, 15, 15);
scene.add(capsule);


// make canvas responsive
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight); // update size
  camera.aspect = window.innerWidth / window.innerHeight; // update aspect ratio
  camera.updateProjectionMatrix(); // apply changes
});

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24); // define geometry
  const material = new THREE.MeshStandardMaterial({color:0xffffff}); // define material
  const star = new THREE.Mesh(geometry, material); // define the mesh

  // create an array of 3 values randomly generated from -100 and +100
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z); // set the position of the star
  scene.add(star); // add star to scene
}

// create an array of X values and for each values call the addStar function
Array(150).fill().forEach(addStar);

// rendering the scene
function rendering() {
  // rerender every time the page refreshes (pause when on another tab)
  requestAnimationFrame(rendering);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.001;

  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  dodecahedron.rotation.z += 0.01;

  capsule.rotation.x += 0.01;
  capsule.rotation.y += 0.01;
  capsule.rotation.z += 0.01;

  // update OrbitControls controls 
  controls.update();

  renderer.render(scene, camera);
}

rendering();