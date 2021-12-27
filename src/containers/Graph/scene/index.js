import {AxesHelper} from 'three';
import {scene, group} from '../constants';
import {camera} from '../camera/constants';

export default function InitScene() {
    scene.add(new AxesHelper());
    scene.add(camera);
    scene.add(group);
}
