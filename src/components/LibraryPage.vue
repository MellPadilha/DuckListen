<template>
  <div class="row q-mx-md q-mt-md">
    <p class="title col-5">{{ $t("library") }}</p>
    <q-tabs v-model="tab" class="text-primary">
      <q-tab
        class="tab"
        name="musics"
        icon="fa-solid fa-music"
        :label="$t('musics')"
        no-caps
        @click="changeOption"
      />
      <q-tab
        class="tab"
        name="podcast"
        icon="fa-solid fa-microphone-lines"
        :label="$t('podcasts')"
        no-caps
        @click="changeOption"
      />
    </q-tabs>
  </div>
  <q-separator class="separator-header" color="grey-9" />
  <div v-if="musicTab">
    <div v-for="item in musicList" :key="item.name">
      <q-list separator>
        <q-item clickable v-ripple @click="emitMusic(item)">
          <q-item-section class="item-name"
            >{{ item.id }} - {{ item.name }}
          </q-item-section>

          <q-btn icon="fa fa-trash" @click="deleteMusic(item.name)" />
        </q-item>
      </q-list>
    </div>
  </div>
  <div v-else>
    <div v-for="item in podcastList" :key="item.name">
      <q-list separator>
        <q-item clickable v-ripple @click="emitPodcast(item)">
          <q-item-section class="item-name"
            >{{ item.id }} - {{ item.name }}
          </q-item-section>

          <q-btn icon="fa fa-trash" @click="deletePodcast(item.name)" />
        </q-item>
      </q-list>
    </div>
  </div>
</template>
<script>
import { useMusicsStore } from "src/stores/musics";
import { collection, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "LibraryPage",
  data() {
    return {
      musicList: null,
      musicsStore: useMusicsStore(),
      podcastList: null,
      tab: "musics",
      musicTab: true,
      openEditPodcast: false,
      openEditMusica: false,
    };
  },
  beforeMount() {
    this.getMusics();
    this.getPodcast();
  },
  emits: ["music"],
  methods: {
    getMusics() {
      this.$axios
        .get(`${process.env.API}/musics`)
        .then((response) => {
          this.musicList = response.data;
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    },
    getPodcast() {
      this.$axios
        .get(`${process.env.API}/podcast`)
        .then((response) => {
          this.podcastList = response.data;
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    },
    emitMusic(item) {
      this.musicsStore.selectMusic(item);
    },
    emitPodcast(item) {
      this.musicsStore.selectPodcast(item);
    },
    changeOption() {
      if (this.tab === "musics") {
        this.musicTab = true;
      } else {
        this.musicTab = false;
      }
    },
    deleteMusic(item) {
      this.$axios
        .post(`${process.env.API}/DeleteMusica`, item)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log("err: ", err);
        });

      this.$q.notify({
        color: "green-4",
        textColor: "white",
        message: "Deletado com sucesso",
      });
    },
    deletePodcast(item) {
      this.$axios
        .post(`${process.env.API}/DeletePodscast`, item)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log("err: ", err);
        });

      this.$q.notify({
        color: "green-4",
        textColor: "white",
        message: "Deletado com sucesso",
      });

      const podcast = collection(getFirestore(app), "podcast");
      deleteDoc(doc(podcast, item));
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  text-align: left !important;
  margin: 15px 0;
  font-size: 40px;
}

.item-name {
  font-size: 20px;
}

.tab {
  border-radius: 10px;
}

.separator-header {
  margin: 0 20px 20px;
}
</style>
