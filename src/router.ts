import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "./modules/home/Home.vue";
import Contact from "./modules/contact/Contact.vue";
import Team from "@/modules/team/Team.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/:catchAll(.*)",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/team",
        name: "Team",
        component: Team,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
