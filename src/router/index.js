import Vue from 'vue';
import VueRouter  from 'vue-router';
import Index from '../pages/Home';
import Page2 from '../pages/Page2';


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
    //mode: 'history', // needs [web]server support
    routes: routes
});
