import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import CryptoWisePresentation from "../views/CryptoWisePresentation.vue";
import type { Component } from "vue";
import { guards } from "./routeGuards";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "crypto-wise-presentation",
      component: CryptoWisePresentation as Component,
    },
    {
      path: "/login",
      name: "login",
      component: Login as Component,
    },
    {
      path: "/home",
      name: "home",
      component: Home as Component,
      beforeEnter: [guards.checkIfLoggedIn],
    },
  ],
});

export default router;
