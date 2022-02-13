import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "./pages/home/Home.vue";
import Contact from "./pages/contact/Contact.vue";
import Team from "@/pages/team/Team.vue";
import DataProtection from "@/pages/data-protection/DataProtection.vue";
import ThirdParty from "@/pages/third-party/ThirdParty.vue";
import LegalNotice from "@/pages/legal-notice/LegalNotice.vue";

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
    {
        path: "/data-protection",
        name: "Data Protection",
        component: DataProtection,
    },
    {
        path: "/legal-notice",
        name: "Legal Notice",
        component: LegalNotice,
    },
    {
        path: "/third-party",
        name: "Third Party",
        component: ThirdParty,
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

// Scroll to top after route change
router.beforeEach(() => {
    window.scrollTo(0, 0);
});

export default router;
