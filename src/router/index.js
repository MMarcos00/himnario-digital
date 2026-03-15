import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import HimnoView from '../views/HimnoView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/himno/:numero',
        name: 'himno',
        component: HimnoView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router