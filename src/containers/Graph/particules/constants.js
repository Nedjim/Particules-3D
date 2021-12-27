import {BufferGeometry, LineBasicMaterial, PointsMaterial, TextureLoader, VertexColors} from 'three';

const SIZE = 0.1;

const textureLoader = new TextureLoader();
const texture = textureLoader.load('/react-icon.svg');

export const pointMaterial = new PointsMaterial({
  'vertexColors': VertexColors,
  'size': SIZE,
  'map': texture,
  'transparent': true,
  'alphaTest': 0.01
});

export const lineMaterial = new LineBasicMaterial({
  'color': 0x00000,
  'opacity': 0.05,
  'depthWrite': false
});

export const geometry = new BufferGeometry();