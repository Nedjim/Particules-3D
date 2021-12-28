import {Points, Line, Mesh, BufferGeometry, LineBasicMaterial, PointsMaterial, TextureLoader, VertexColors, MeshNormalMaterial, SphereBufferGeometry} from 'three';

const POINT_SIZE = 0.14;
const SPHERE_RADIUS = 0.2;
const SPHERE_WIDTH = 32;

const textureLoader = new TextureLoader();
const texture = textureLoader.load('/react-icon.svg');

export const pointMaterial = new PointsMaterial({
  'vertexColors': VertexColors,
  'size': POINT_SIZE,
  'map': texture,
  'transparent': true,
  'alphaTest': 0.01
});

export const lineMaterial = new LineBasicMaterial({
  'color': 0x3333,
  'opacity': 0.02,
  'depthWrite': false
});

export const sphereMaterial = new MeshNormalMaterial();

export const geometry = new BufferGeometry();
export const sphereGeometry = new SphereBufferGeometry(SPHERE_RADIUS, SPHERE_WIDTH);

export const points = new Points(geometry, pointMaterial);
export const lines = new Line(geometry, lineMaterial);
export const sphere = new Mesh(sphereGeometry, sphereMaterial);
