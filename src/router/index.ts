import { createRouter, createWebHistory } from "vue-router";
import Layout from '@/layout/Index.vue'
import appRoutes from "./routes";

const constantUrl = [
    {
        path: '/login', 
        name: 'Login', 
        component: () => import('@/views/login/Index.vue')
    }, 
    ...appRoutes, 
    {
        path: '/:pathMatch(.*)*',
        name: 'not found',
        component: () => import('@/views/errors/404.vue')
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantUrl
});


export default router; 