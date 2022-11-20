<template>
  <q-drawer
    show-if-above
    side="left"
    :width="280"
    :breakpoint="200"
    class="bg-black text-white"
    style="z-index: 999"
  >
    <q-scroll-area class="fit">
      <div class="row">
        <div class="duck-img">
          <q-img src="../assets/logo_duck.svg" width="75px" />
        </div>
        <div>
          <q-img
            class="duck-title"
            src="../assets/DuckListen-title.svg"
            width="130px"
          />
        </div>
      </div>
      <div class="options-area">
        <div v-for="item in optionsList" :key="item.id">
          <q-btn
            :class="[item.class ? item.class : 'option', 'btn-no-focus']"
            align="left"
            :icon="item.icon"
            :label="item.name"
            @click="item.action"
          />
        </div>
      </div>
      <q-separator class="separator" color="white" />
      <div class="playlist-area">
        <div
          v-for="item in playlistList"
          :key="item.id"
          style="align-items: center"
        >
          <q-btn
            class="btn-no-focus option-playlist"
            align="left"
            :label="item.name"
            @click="item.action"
          />
        </div>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>
<script>
export default {
  name: "SideMenu",
  data() {
    return {
      optionsList: null,
      playlistList: null,
    };
  },
  beforeMount() {
    this.loadList();
  },
  methods: {
    loadList() {
      this.optionsList = [
        {
          name: this.$t("library"),
          icon: "fa-solid fa-list",
          action: () => {},
        },
        {
          name: this.$t("create_playlist"),
          icon: "fa-solid fa-plus",
          class: "plus-btn",
          action: () => {},
        },
        {
          name: this.$t("favorites"),
          icon: "fa-solid fa-bookmark",
          action: () => {},
        },
        {
          name: this.$t("my_publications"),
          icon: "fa-solid fa-compact-disc",
          action: () => {},
        },
      ];
      this.playlistList = [
        {
          name: this.$t("default_playlist_name", { number: "01" }),
          action: () => {},
        },
        {
          name: this.$t("default_playlist_name", { number: "02" }),
          action: () => {},
        },
        {
          name: this.$t("default_playlist_name", { number: "03" }),
          action: () => {},
        },
        {
          name: this.$t("default_playlist_name", { number: "04" }),
          action: () => {},
        },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.duck-img {
  margin: 30px 15px 0 20px;
}

.duck-title {
  margin: 60px 0;
}

.options-area {
  margin: 40px 0 25px 20px;
}

.playlist-area {
  margin: 30px 0 25px 20px;
}

.option {
  width: 250px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.separator {
  margin: 0 16px;
}

.option-playlist {
  width: 230px;
  max-width: 230px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.plus-btn {
  width: 250px;
  border-radius: 8px;
  margin-bottom: 10px;
}

:deep(.q-btn__content) {
  font-size: 20px;
  text-transform: initial;
}

:deep(.q-btn .q-icon) {
  font-size: 17px;
}

:deep(.q-btn.plus-btn .q-icon) {
  font-size: 16px;
  padding: 1px;
  border: 1px solid white;
  border-radius: 3px;
}

:deep(.q-btn .block) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
