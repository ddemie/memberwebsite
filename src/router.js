import { createRouter, createWebHistory } from 'vue-router';
import MembersPage from './components/MembersPage.vue';
import ProfilePage from './components/ProfilePage.vue';

const routes = [
  {
    path: '/',
    component: MembersPage,
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: ProfilePage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
