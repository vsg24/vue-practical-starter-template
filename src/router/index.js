import Vue from 'vue';
import VueRouter  from 'vue-router';
import Index from '../components/Home';
import Page2 from '../components/Page2';


const routes = [
  {
      path: '/',
      component: Index,
  },
  {
      path: '/page2',
      component: Page2,
  }
];

export default new VueRouter({
    //mode: 'hash', // needs [web]server support
    routes: routes
});
