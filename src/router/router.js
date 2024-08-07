import Main from "@/pages/Main";
import Auth from "@/pages/Auth";
import Search from "@/pages/Search";
import Results from "@/pages/Results";
import {createRouter, createWebHistory} from "vue-router";
import { useAuthStore } from "@/store/auth";

const routes = [
    {
        path: '/',
        component: Main,
        meta: {
            auth: false
        }
    },
    {
        path: '/auth',
        component: Auth,
        meta: {
            auth: false
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            auth: true
        }
    },
    {
        path: '/results',
        component: Results,
        meta: {
            auth: false
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.meta.auth && !localStorage.getItem('userTokens')) {
        next('/auth');
    } else {
        next()
    }
})

export default router;