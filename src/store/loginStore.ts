import { defineStore } from "pinia";
import hash from "hash-it";

export interface LoginStore {
  id: string;
  name: string;
}

export const useLoginStore = defineStore("login", {
  state: (): LoginStore => ({
    id: "",
    name: "",
  }),
  actions: {
    setUserData(name: string) {
      // id of the user
      this.id = hash(name).toString();
      // name, just for show something pretty
      this.name = name;
    },
  },
});
