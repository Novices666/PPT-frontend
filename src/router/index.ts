import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import IndexPage from '/src/pages/IndexPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: IndexPage
    },
    { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router