import React, {memo, useEffect, useRef} from 'react';
import {initGraph, handleResize} from './Graph';
import {renderer} from './Graph/constants';
import styles from './index.module.scss';

function App() {
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    initGraph();
    ref.current.appendChild( renderer.domElement );
  }, []);
  
  return <section className={styles.wrapper} ref={ref} />
}

export default memo(App);
