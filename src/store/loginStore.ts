import { defineStore } from "pinia";
import hash from "hash-it";

export interface LoginStore {
  id: string;
  name: string;
  isLogged: boolean;
}

export const useLoginStore = defineStore("login", {
  state: (): LoginStore => ({
    id: "",
    name: "",
    isLogged: false,
  }),
  actions: {
    setUserData(name: string) {
      this.id = hash(name).toString();
      this.name = name;
    },
    setLoginTrue() {
      this.isLogged = true;
      localStorage.setItem("name", this.name);
    },
  },
});
