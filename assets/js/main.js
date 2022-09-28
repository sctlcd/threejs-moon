import '../style/style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// create scene
const scene = new THREE.Scene(); // define scene

// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // define camera
camera.position.setZ(80); // set camera position

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight)

// torus
const torusGeometryTexture = new THREE.TextureLoader().load('assets/images/pexels-lucas-pezeta-3772378-min.jpg');
const torusGeometry = new THREE.TorusGeometry(16, 2, 100, 100); // define geometry
const torusMaterial = new THREE.MeshStandardMaterial({ map: torusGeometryTexture}); // define material
const torus = new THREE.Mesh(torusGeometry, torusMaterial); // define the mesh
scene.add(torus); // add torus to scene

// lights
const pointLight = new THREE.PointLight(0xffffff); // define pointLight
pointLight.position.set(10, 10, 10); // set pointLight position
const ambientLight = new THREE.AmbientLight(0xffffff); // define ambientLight
scene.add(pointLight, ambientLight); // add pointLight and ambientLight to scene

// helpers
// const lightHelper = new THREE.PointLightHelper(pointLight); // define pointLight
// const gridHelper = new THREE.GridHelper(200, 50); // define gridHelper
// scene.add(lightHelper, gridHelper); // add pointLight and gridHelper to scene

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement); // define orbitControls

// scene background
const spaceTexture = new THREE.TextureLoader().load('assets/images/pexels-nicole-avagliano-2312040-min.jpg'); // define texture
scene.background = spaceTexture; // define scene background

// dodecahedron
const dodecahedronGeometryTexture = new THREE.TextureLoader().load('assets/images/pexels-bella-chew-1368317-min.jpg'); // define texture

const dodecahedron = new THREE.Mesh(
  new THREE.DodecahedronGeometry(12, 0), // define geometry
  new THREE.MeshBasicMaterial({ map: dodecahedronGeometryTexture }) // define material
  ); // define mesh
scene.add(dodecahedron); // add dodecahedron to scene

// capsule
const capsuleGeometryTexture = new THREE.TextureLoader().load('assets/images/pexels-karolina-grabowska-4040567-min.jpg'); // define texture

const capsule = new THREE.Mesh(
  new THREE.CapsuleGeometry(4, 1, 4, 10), // define geometry
  new THREE.MeshBasicMaterial({ map: capsuleGeometryTexture }) // define material
  ); // define mesh
  capsule.position.set(40, 35, -5); // set position
scene.add(capsule); // add capsule to scene

// icosahedron
const icosahedronTexture = new THREE.TextureLoader().load('assets/images/pexels-maksim-romashkin-7108217-min.jpg');

const icosahedron = new THREE.Mesh(
  new THREE.IcosahedronGeometry(8, 0),
  new THREE.MeshBasicMaterial({ map: icosahedronTexture })
  );
  icosahedron.position.set(25, -15, 20);
scene.add(icosahedron);

// octahedron
const octahedronTexture = new THREE.TextureLoader().load('assets/images/pexels-pixabay-158729-min.jpg');

const octahedron = new THREE.Mesh(
  new THREE.OctahedronGeometry(6, 0),
  new THREE.MeshBasicMaterial({ map: octahedronTexture })
  );
  octahedron.position.set(-80, 40, -40);
scene.add(octahedron);

// moon
const moonTexture = new THREE.TextureLoader().load('assets/images/7XyId7s-min.jpeg');
const normalTexture = new THREE.TextureLoader().load('assets/images/172_norm-min.JPG');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(12, 32, 32),
  new THREE.MeshStandardMaterial({
    // the color map
    map: moonTexture,
    // the texture to create a normal map. The RGB values affect the surface normal for each pixel 
    // fragment and change the way the color is lit. Normal maps do not change the actual shape of 
    // the surface, only the lighting
    normalMap: normalTexture,
  })
  );
  moon.position.set(-30, -20, 40);
scene.add(moon);

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
  dodecahedron.rotation.y += 0.02;
  dodecahedron.rotation.z += 0.003;

  capsule.rotation.x += 0.003;
  capsule.rotation.y += 0.02;
  capsule.rotation.z += 0.01;

  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.y += 0.002;
  icosahedron.rotation.z += 0.01;

  octahedron.rotation.x += 0.001;
  octahedron.rotation.y += 0.01;
  octahedron.rotation.z += 0.02;

  moon.rotation.x += 0.005;
  moon.rotation.y += 0.005;
  moon.rotation.z += 0.005;

  // update OrbitControls controls 
  controls.update();

  renderer.render(scene, camera);
}

rendering();