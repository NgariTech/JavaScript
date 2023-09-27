import Vue from 'vue'
import VueRouter from 'vue router'

import LandingPage from "./components/LandingPage"
import about from "./components/about"
import Login from './components/Login'
import Signup from './components/Signup'


Vue.use(VueRouter)

const routes= [
    {
        path: '/',
        name: 'Landingpage',
        component: LandingPage,
    },
    {
        path: '/about',
        name: 'About',
        component: about,
    },
    {
        path: '/Signup',
        name:'Signup',
        component: Signup,
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
    },
    
]
   