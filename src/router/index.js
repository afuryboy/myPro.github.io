import { createWebHistory, createRouter } from "vue-router";
const constantRoutes = [
  {
    path: "/index",
    name: "首页",
    component: () => import("@/views/home"),
  },
  {
    path: "/project",
    name: "项目",
    component: () => import("@/views/project"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/index",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;