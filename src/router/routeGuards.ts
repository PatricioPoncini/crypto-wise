import { NavigationGuard } from "vue-router";

export const guards: Record<string, NavigationGuard> = {
  checkIfLoggedIn: async (_to, _, next) => {
    if (!localStorage.getItem("name")) {
      next({ path: "/login" });
      return;
    }

    next();
  },
};
