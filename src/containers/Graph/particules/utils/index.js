import {MathUtils, Float32BufferAttribute} from 'three';

export const COUNT = 100;
export const DISTANCE = 4;

export function getPositions() { 
  const points = new Float32Array(COUNT * 3);

  for(let i = 0; i < points.length; i++) {
    points[i] = MathUtils.randFloatSpread(DISTANCE / 2);
  }

  return new Float32BufferAttribute(points, 3);
};

export function getColors () {
  const colors = new Float32Array(COUNT * 3);

  for(let i = 0; i < colors.length; i++) {
    colors[i] = Math.random();
  }

  return new Float32BufferAttribute(colors, 3);
}