import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import LoginForm from "@/components/LoginForm.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },

  // {
  //   path: '/user/:id',
  //   name: 'user',
  //   component: UserProfileView,
  //   children: [
  //     {
  //       path: '/grades',
  //       name: 'userGrades',
  //       comment: UserGradesView
  //     },
  //     {
  //
  //     }
  //   ]
  // }
]



const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;


