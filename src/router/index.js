import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from "@/views/article";
import Home from "@/views/Home";
import Collect from "@/views/collect";
import SortHome from "@/components/main/SortHome";
import Info from "@/components/main/Info";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/Article/:id',
        name:'Article',
        component: Article

    },
    {
        path: '/Collect',
        component: Collect,
        children: [
            {
                path: 'Sorts',
                name: 'sort',
                component: SortHome,
            },
            {
                path: 'Sort',
                name: 'SortInfo',
                component: Info,
            },
            {
                path: 'Label',
                name: 'LabelInfo',
                component: Info,
            },
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
