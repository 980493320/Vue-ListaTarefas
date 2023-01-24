import Vue from 'vue'
import VueRouter from 'vue-router'
import Tarefas from '../views/TarefasView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/sobre',
        name: 'sobre',

        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router