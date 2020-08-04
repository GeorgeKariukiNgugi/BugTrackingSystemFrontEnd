import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/UserPages/landing'
import About from '../views/UserPages/about'
import Contact from '../views/UserPages/contactUs'
import LogIn from '../views/UserPages/login.vue'
import Registration from '../views/UserPages/register.vue'
import FirstLineSupportLanding from '../views/FirstLineSupport/landing.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  }, 
  {
    path: '/firstLineSupport',
    name: 'FirstLineSupportLanding',
    component: FirstLineSupportLanding
  },  
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
