import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {PerspectiveCamera} from 'three';
import { WIDTH, HEIGHT } from '../constants';
import {renderer } from '../constants';

const FOV = 75;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.01;
const FAR = 1000;

export const camera = new PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
export const controls = new OrbitControls(camera, renderer.domElement);
