import VueRouter from 'vue-router'
import Home from './pages/Home'

export default new VueRouter({
    routes: [
        {
            path: '/', // localhost:8080/about
            component: Home
        },
        {
            path: '/payment',
            component: () => import('./pages/Payment.vue')
        },
        {
            path: '/contact',
            component: () => import('./pages/Contact.vue')
        },
        {
            path: '/cart',
            component: () => import('./pages/Cart.vue')
        },
        {
            path: '/cabinet',
            component: () => import('./pages/Cabinet.vue')
        },
    ]
})