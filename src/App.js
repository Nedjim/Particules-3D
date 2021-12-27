import React, {useEffect, useRef} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {AxesHelper,Scene, WebGLRenderer, PerspectiveCamera, Points, PointsMaterial, BufferGeometry, Float32BufferAttribute, MathUtils, TextureLoader, VertexColors} from 'three';
import styles from './index.module.scss';

const textureLoader = new TextureLoader();
const texture = textureLoader.load('/react-icon.svg');

const COUNT = 100;

const getPositions = () => {
  
  const distance = 2;
  const points = new Float32Array(COUNT * 3);

  for(let i = 0; i < points.length; i++) {
    points[i] = MathUtils.randFloatSpread(distance / 2);
  }

  return new Float32BufferAttribute(points, 3);
};

const getColors = () => {
  const colors = new Float32Array(COUNT * 3);

  for(let i = 0; i < colors.length; i++) {
    colors[i] = Math.random();
  }

  return new Float32BufferAttribute(colors, 3);
}

function App() {
  const ref = useRef(null);
  const scene = new Scene();
  const renderer = new WebGLRenderer({
    'antialias': true,
    'alpha': true,
  });

  const width = window.innerWidth - 20;
  const height =  window.innerHeight - 20;
  const cameraFieldOfView = 75;
  const cameraAspect = width / height;
  const near = 0.01;
  const far = 1000;
  const camera = new PerspectiveCamera(cameraFieldOfView, cameraAspect, near, far);
  const controls = new OrbitControls(camera, renderer.domElement);

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', getPositions());
  geometry.setAttribute('color', getColors());

  const material = new PointsMaterial({
    'vertexColors': VertexColors,
    'size': 0.1,
    'map': texture,
    'transparent': true,
    'alphaTest': 0.01
  });
  const points = new Points(geometry, material);

  const tick = () => {
    renderer.render(scene, camera);
    controls.update();

    requestAnimationFrame(tick);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      const w = window.innerWidth - 20;
      const h =  window.innerHeight - 20;

      camera.aspect = w / h;

      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    })
  }, []);

  useEffect(() => {
    scene.add(new AxesHelper());
    
    camera.position.z = 2;
    camera.position.y = 0.5;
    camera.position.x = 0.5;
  
    scene.add(camera);
    scene.add(points);

    renderer.setSize(width, height);
    renderer.setClearColor('0x000000', 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
    ref.current.appendChild( renderer.domElement );

    tick();
  }, []);
  
  return <section className={styles.wrapper} ref={ref} />
}

export default App;
