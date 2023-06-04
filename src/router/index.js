import { createRouter, createWebHistory} from "vue-router";
import Intro from "../views/Intro.vue";
import MainMenu from "../views/MainMenu.vue";
import Moment from "../views/Moment.vue";
const routes = [
    {
        path:'/intro',
        name:'Intro',
        component: Intro
    },
    {
        path:'/mainMenu',
        name:'Main Menu',
        component: MainMenu
    },
    {
        path:'/moment',
        name:'Moment',
        component: Moment
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

