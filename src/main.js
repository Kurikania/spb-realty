import Vue from 'vue'
import App from './App.vue'
import SvgIcon from 'vue-svgicon'
import './scss/index.scss';
import vueFilters from './utils/vueFilters.js';
import '@/svg/js';

//icons
Vue.use(SvgIcon, {
  tagName: 'svgicon'
});

Vue.use(vueFilters);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
