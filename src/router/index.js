import Vue from 'vue'
import VueRouter from 'vue-router'
import Error from '../views/404.vue'
import Login from '../views/user/login.vue'
import Home from '../views/index.vue'
import Sights from '../views/user/sights.vue'
import Article from '../views/user/article.vue'
import Strategy from '../views/user/strategy.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/404page',
        name: 'Error',
        component: Error
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/sights',
        name: 'Sights',
        component: Sights
    },
    {
        path: '/article',
        name: 'Article',
        component: Article
    },
    {
        path: '/strategy',
        name: 'Strategy',
        component: Strategy
    }
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
    routes
})

export default router
