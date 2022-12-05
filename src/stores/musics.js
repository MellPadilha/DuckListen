import { defineStore } from "pinia";
import { Loading, Notify } from "quasar";

export const useMusicsStore = defineStore("musics", {
  state: () => ({
    music: null,
  }),
  getters: {
    getMusic: (state) => state.music,
  },
  actions: {
    async selectMusic(payload) {
      Loading.show();
      try {
        this.music = payload;
      } catch (e) {
        Notify.create({
          color: "red",
          progress: true,
          message: e.message,
        });
      }
      Loading.hide();
    },
  },
});
