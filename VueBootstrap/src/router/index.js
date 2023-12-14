import { createRouter, createWebHistory } from "vue-router";
//import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/destination/:id",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
  },
];

const router = createRouter({
  //history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
  linkActiveClass: "vue-travel-active-link",
});

export default router;
