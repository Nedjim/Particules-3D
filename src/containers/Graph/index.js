import {WIDTH, HEIGHT, group, clock, scene} from './constants';
import {renderer} from './constants';
import {camera, controls} from './camera/constants';
import initCamera from "./camera";
import initParticules from "./particules";
import initScene from "./scene";

export function initGraph() {
  initScene();
  initCamera();
  initParticules();

  renderer.setSize(WIDTH, HEIGHT);
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  handleRotation();
}

export function handleResize() {
  const pixelRatio = Math.min(window.devicePixelRatio, 2);
  const w = window.innerWidth - 20;
  const h =  window.innerHeight - 20;

  camera.aspect = w / h;

  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  renderer.setPixelRatio(pixelRatio);
}

const handleRotation = () => {
  const time = clock.getElapsedTime();

  group.rotation.y = time * 0.1;
  renderer.render(scene, camera);
  controls.update();

  requestAnimationFrame(handleRotation);
};
