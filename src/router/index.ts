import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import type { Component } from "vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login as Component,
    },
    {
      path: "/home",
      name: "home",
      component: Home as Component,
    },
  ],
});

export default router;
