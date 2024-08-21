import { createMemoryHistory, createRouter } from 'vue-router'
import HomepageComponent from "@/components/Homepage-component.vue";
import GameComponent from "@/components/game/game-component.vue";

const routes = [
    { path: '/', component: HomepageComponent },
    { path: '/game', component: GameComponent },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router