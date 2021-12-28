import {Scene, Group, Clock, WebGLRenderer} from 'three';

export const clock = new Clock();
export const scene = new Scene();
export const group = new Group();

export const WIDTH = window.innerWidth;
export const HEIGHT =  window.innerHeight;

export const renderer = new WebGLRenderer({
  'antialias': true,
  'alpha': true,
});