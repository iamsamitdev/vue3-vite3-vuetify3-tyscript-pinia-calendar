import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeVue,
        meta: {
            title: 'Home'
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