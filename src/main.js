// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/js/semantic.min.js';
import './assets/css/semantic.min.css';

import Vue from 'vue';
import App from './App';
import router from './router/index';
import VueRouter  from 'vue-router';
import VueHead from 'vue-head';


// Vue.use(require('vue-semantic'));
Vue.use(VueHead);
Vue.use(VueRouter);

$(document).ready(function () {
   console.log('jQuery is working fine...')
});

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
