import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue');
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');
const Movie = () => import(/* webpackChunkName: "movie" */ '../views/movie/Movie.vue');
const Me = () => import(/* webpackChunkName: "me" */ '../views/me/Me.vue');

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/me',
    name: 'Me',
    component: Me,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
