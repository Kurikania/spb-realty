import Vue from 'vue';
import {nf} from './string';


export default () => {
	Vue.filter('nf', nf);
}