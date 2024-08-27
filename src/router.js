import { createMemoryHistory, createRouter } from 'vue-router'
import HomepageComponent from "@/components/Homepage-component.vue";
import GameComponent from "@/components/game/game-component.vue";
import CompareColorsComponent from "@/components/game/compare-colors/compare-colors-component.vue";
import LoginComponent from "@/components/Login/login-component.vue";
import RegisterComponent from "@/components/Login/Register/register-component.vue";

const routes = [
    { path: '/', component: HomepageComponent },
    { path: '/game', component: GameComponent },
    {
        path: '/result',
        component: CompareColorsComponent,
        name: 'result',
        props: route => ({ data: route.params.data })
    },
    { path: '/login', component: LoginComponent},
    { path: '/register', component: RegisterComponent }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router