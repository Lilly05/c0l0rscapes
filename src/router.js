import { createMemoryHistory, createRouter } from 'vue-router'
import HomepageComponent from "@/components/Homepage-component.vue";
import GameComponent from "@/components/game/game-component.vue";
import CompareColorsComponent from "@/components/game/compare-colors/compare-colors-component.vue";
import LoginComponent from "@/components/Login/login-component.vue";
import RegisterComponent from "@/components/Login/Register/register-component.vue";
import UserComponent from "@/components/Login/User/user-component.vue";
import AuthService from "@/services/authService";
import AnalyticsComponent from "@/components/analytics/analytics-component.vue";

const routes = [
    { path: '/', component: HomepageComponent, name: 'home' },
    { path: '/game', component: GameComponent, name: 'game' },
    {
        path: '/result',
        component: CompareColorsComponent,
        name: 'result',
        props: route => ({ data: route.params.data })
    },
    { path: '/login', component: LoginComponent, name: 'login'},
    { path: '/register', component: RegisterComponent, name: 'register' },
    { path: '/user', component: UserComponent, name: 'user'},
    { path: '/analytics', component: AnalyticsComponent, name: 'analytics'}
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

router.beforeEach(async (to) => {
    if (
        !await AuthService.isAuthenticated() &&
        (to.name !== 'login' && to.name !== 'register')
    ) {
        return { name: 'login' }
    }
    if (await AuthService.isAuthenticated() && to.name === 'login') {
        return {name: 'user' }
    }
})

export default router