import {Scene, Group, Clock, WebGLRenderer} from 'three';

const PADDING = 15;

export const clock = new Clock();
export const scene = new Scene();
export const group = new Group();

export const WIDTH = window.innerWidth - PADDING;
export const HEIGHT =  window.innerHeight - PADDING;

export const renderer = new WebGLRenderer({
  'antialias': true,
  'alpha': true,
});