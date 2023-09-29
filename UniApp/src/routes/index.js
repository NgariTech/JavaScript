import {createRouter,createWebHistory} from 'vue-router'

import LandingPage from "./../components/Landingpage.vue"
import about from "./../components/AboutUs.vue"
import Login from "./../components/Loginpage.vue"
import Signup from "./../components/Signuppage.vue"



const routes= [
    {
        path: '/',
        name: 'Landingpage',
        component: LandingPage,
    },
    {
        path: '/About',
        name: 'AboutUs',
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
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
   