import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from "./../components/LandingPage.vue"
import About from "./../components/AboutUs.vue"
import Signup from "./../components/Signuppage.vue"
import Login from "./../components/Loginpage.vue"
import Register from "./../components/Register.vue"




const routes = [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
      },
      {
        path: '/signup',
        name: 'signup',
        component: Signup,
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
      }
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router