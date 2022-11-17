<template>
  <div class="playlists-area row">
    <div v-for="item in playList" :key="item.id">
      <q-card class="card-playlist" flat>
        <div class="row card-content">
          <div class="image-container">
            <q-icon class="image" name="fa-regular fa-image" size="40px" />
          </div>
          <div class="playlist-name">{{ item.name }}</div>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script>
import { onBeforeMount } from "vue-demi";
export default {
  name: "HomePage",
  data() {
    return {
      playList: null,
    };
  },
  beforeMount() {
    this.loadLists();
  },
  methods: {
    loadLists() {
      this.playList = [
        { name: "Pop anos 2000’s", image: null },
        { name: "As melhores musicas", image: null },
        { name: "Musicas classicas", image: null },
        { name: "K-pop: As melhoes", image: null },
        { name: "Rock pesadão", image: null },
        { name: "Funk br Raiz", image: null },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.playlists-area {
  margin: 50px 30px;
}

.card-playlist {
  width: 340px;
  height: 100px;
  background-color: $dark-grey;
  border-radius: 8px;
  margin: 0 7.5px 15px 7.5px;
}

.image-container {
  max-width: 80px;
  max-height: 80px;
  width: 80px;
  height: 80px;
  margin: 10px;
  background-color: white;
  border-radius: 8px;
}

.image-container {
  padding: 20px;
  color: $dark-grey;
}

.playlist-name {
  width: 200px;
  font-size: 25px;
  margin: auto 15px;
}
</style>
