import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const Movie = () => import(/* webpackChunkName: "movie" */ '../views/movie/Movie.vue');
const Me = () => import(/* webpackChunkName: "me" */ '../views/me/Me.vue');

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
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
