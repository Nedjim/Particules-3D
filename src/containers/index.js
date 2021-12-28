import React, {memo, useEffect, useRef} from 'react';
import {initGraph, clearGraph, handleResize} from './Graph';
import {renderer} from './Graph/constants';
import styles from './index.module.scss';

function App() {
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = ref.current;
  
    initGraph();
    container.appendChild( renderer.domElement );

    return function cleanup () {
      clearGraph(container);
    }
  }, []);
  
  return <section className={styles.wrapper} ref={ref} />
}

export default memo(App);
