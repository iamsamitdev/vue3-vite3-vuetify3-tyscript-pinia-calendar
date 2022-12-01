import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About'
        }
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.URL),
    routes
})

router.beforeEach((to, _, next) => {

    if(typeof(to.meta.title) == 'string'){
        document.title = to.meta.title
    }

    next()
})

export default router