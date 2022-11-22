<template>
  <div class="playlists-area row">
    <div class="col-12 title">Ouvido recentemente</div>
    <div v-for="item in playList" :key="item.id">
      <q-card class="card-playlist" flat>
        <div class="row card-content">
          <div v-if="!item.image" class="image-container">
            <q-icon class="image" name="fa-regular fa-image" size="40px" />
          </div>
          <div v-else class="image-container">
            <q-img class="image" :src="item.image" width="40px" />
          </div>
          <div class="playlist-name">{{ item.name }}</div>
        </div>
      </q-card>
    </div>
  </div>
  <div class="second-area row">
    <div class="col-12 title">Recomendações para você</div>
    <div v-for="item in recomendationList" :key="item.id">
      <q-card class="card-second-area" flat>
        <div class="card-content">
          <div v-if="!item.image" class="image-second-area">
            <q-icon class="image" name="fa-regular fa-image" size="80px" />
          </div>
          <div v-else class="image-second-area">
            <q-img class="image" :src="item.image" width="80px" />
          </div>
          <div class="playlist-name-second">{{ item.name }}</div>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      playList: null,
      recomendationList: null,
    };
  },
  beforeMount() {
    this.loadLists();
  },
  methods: {
    loadLists() {
      this.playList = [
        { name: "Pop anos 2000’s", image: "src/assets/logo_duck.svg" },
        { name: "As melhores musicas", image: "src/assets/logo_duck.svg" },
        { name: "Musicas classicas", image: "src/assets/logo_duck.svg" },
        { name: "K-pop: As melhoes", image: "src/assets/logo_duck.svg" },
        { name: "Rock pesadão", image: "src/assets/logo_duck.svg" },
        { name: "Funk br Raiz", image: "src/assets/logo_duck.svg" },
      ];
      this.recomendationList = [
        { name: "Daily Mix 1", image: "src/assets/logo_duck.svg" },
        { name: "Daily Mix 2", image: "src/assets/logo_duck.svg" },
        { name: "Daily Mix 3", image: "src/assets/logo_duck.svg" },
        { name: "Daily Mix 4", image: "src/assets/logo_duck.svg" },
        { name: "Daily Mix 5", image: "src/assets/logo_duck.svg" },
        { name: "Today's Top Hits", image: "src/assets/logo_duck.svg" },
        { name: "Viral Hits", image: "src/assets/logo_duck.svg" },
        { name: "Pop Up", image: "src/assets/logo_duck.svg" },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  margin: 30px 10px 10px;
  font-size: 30px;
}
.playlists-area {
  margin: 50px 30px 20px;
}

.second-area {
  margin: 0 30px 20px;
}

.card-playlist {
  width: 340px;
  height: 100px;
  background-color: $dark-grey;
  border-radius: 8px;
  margin: 0 7.5px 15px 7.5px;
}

.card-second-area {
  width: 190px;
  height: 280px;
  background-color: $dark-grey;
  border-radius: 8px;
  margin: 0 7.5px 15px 7.5px;
  padding-top: 5px;
}

.image-container {
  max-width: 80px;
  max-height: 80px;
  width: 80px;
  height: 80px;
  margin: 10px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  color: $dark-grey;
}

.image-second-area {
  max-width: 170px;
  max-height: 190px;
  width: 170px;
  height: 190px;
  margin: 10px;
  background-color: white;
  border-radius: 8px;
  padding: 45px;
  color: $dark-grey;
}

.playlist-name {
  width: 200px;
  font-size: 20px;
  margin: auto 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.playlist-name-second {
  font-size: 20px;
  text-align: center;
  margin: 20px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
