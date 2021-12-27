import React, {useEffect, useRef} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {AxesHelper, Scene, WebGLRenderer, PerspectiveCamera, Mesh, BoxBufferGeometry, MeshNormalMaterial} from 'three';

function App() {
  const ref = useRef(null);
  const scene = new Scene();
  const renderer = new WebGLRenderer({'antialias': true}); // antillias evite la pixélisation des bords

  const width = window.innerWidth - 20;
  const height =  window.innerHeight - 20;
  const cameraFieldOfView = 75; // regarder plus ou moin large (%)
  const cameraAspect = width / height; // ration de l'image lié au dimensions de la fenetre
  const near = 0.01; // intervalles de visibilité des éléments
  const far = 1000;
  const camera = new PerspectiveCamera(cameraFieldOfView, cameraAspect, near, far);

  // 
  const controls = new OrbitControls(camera, renderer.domElement);


  // ensemble de points qui permet de faire une forme
  const geometry = new BoxBufferGeometry(1, 1, 1); // largeur, hauteur, profondeur
  // texture de la forme , color face par rapport à la position de la camera
  const material =  new MeshNormalMaterial();
  const cube = new Mesh(geometry, material); // geométrie + material 

  const tick = () => {
    // rendu par rapport à la vue de la caméra
    renderer.render(scene, camera);
    controls.update();

    // // maj de la position de la camera
    // camera.position.x += 0.01;

    // // camera cible le centre de la scene (x, y, z)
    // camera.lookAt(0, 0, 0);

    // permet d'avoir le rendu en permanance
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
    
    // position de recule de la caméra
    camera.position.z = 2;
    camera.position.y = 0.5;
    camera.position.x = 0.5;
    scene.add(camera);
    scene.add(cube);

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
    ref.current.appendChild( renderer.domElement );

    tick();
  }, []);
  
  return <section ref={ref} />
}

export default App;
