import React, {useEffect, useRef} from 'react';
import {AxesHelper, Scene, WebGLRenderer, PerspectiveCamera} from 'three';

function App() {
  const ref = useRef(null);

  useEffect(() => {
    const scene = new Scene();
    const renderer = new WebGLRenderer();
    const width = window.innerWidth - 20;
    const height =  window.innerHeight - 20;
    const fieldOfView = 75; // regarder plus ou moin large (%)
    const aspect = width / height; // ration de l'image lié au dimensions de la fenetre
    const near = 0.01; // intervalles de visibilité des éléments
    const far = 1000;

    scene.add(new AxesHelper());
    
    const camera = new PerspectiveCamera(fieldOfView, aspect, near, far);
    // position de recule de la caméra
    camera.position.z = 2;
    scene.add(camera);

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    ref.current.appendChild( renderer.domElement );

    // rendu par rapport à la vue de la caméra
    renderer.render(scene, camera);
  });
  
  return <section ref={ref} />
}


export default App;
