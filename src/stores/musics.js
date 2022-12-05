import { defineStore } from "pinia";
import { Loading, Notify } from "quasar";

export const useMusicsStore = defineStore("musics", {
  state: () => ({
    music: null,
    podcast: null,
  }),
  getters: {
    getMusic: (state) => state.music,
    getPodcast: (state) => state.podcast,
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
    async selectPodcast(payload) {
      Loading.show();
      try {
        this.podcast = payload;
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
