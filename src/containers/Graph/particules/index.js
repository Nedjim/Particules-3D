import {group} from '../constants';
import {points, lines, sphere, geometry} from './constants';
import { getPositions, getColors } from './utils';

export default function initParticules () {
  group.add(points);
  group.add(lines);
  group.add(sphere);

  geometry.setAttribute('position', getPositions());
  geometry.setAttribute('color', getColors());
};