import {Points, Line, Mesh, SphereBufferGeometry, MeshNormalMaterial} from 'three';
import {group} from '../constants';
import {lineMaterial, pointMaterial, geometry} from './constants';
import { getPositions, getColors } from './utils';

export default function initParticules () {
  const points = new Points(geometry, pointMaterial);
  const lines = new Line(geometry, lineMaterial);

  group.add(points);
  group.add(lines);

  group.add(new Mesh(
    new SphereBufferGeometry(0.2, 32),
    new MeshNormalMaterial()
  ));

  geometry.setAttribute('position', getPositions());
  geometry.setAttribute('color', getColors());
};