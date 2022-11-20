<template>
  <hr class="linha" />
  <div class="corpo">
    <!-- fontawesome icons -->
    <div class="songInfo">
      <img
        class="img"
        src="../assets/logo_b.png"
        width="42px"
        alt=""
        id="gif"
      />
      <i class="fas fa-heart" id="previous"></i>
      <div>
        <span id="masterSongName">Duck - </span>
        <span id="masterSongName">When i choose </span>
      </div>
    </div>
    <div class="bottom">
      <!-- fontawesome icons -->
      <i class="fas fa-3x fa-random" id="previous"></i>
      <i class="fas fa-3x fa-step-backward" id="previous"></i>
      <i class="far fa-3x fa-play-circle" id="masterPlay"></i>
      <i class="fas fa-3x fa-step-forward" id="next"></i>
      <i class="fas fa-3x fa-refresh" id="previous"></i>
    </div>
    <div class="volume">
      <i class="fas fa-3x fa-volume-up" id="next"></i>
    </div>
    <q-slider class="sliderVolume" />
  </div>
  <div class="corpoProgress">
    <q-slider />
  </div>
</template>
<script>
export default {
  name: "PlayerMenu",

  data() {
    return {
      leftDrawerOpen: true,
      search: null,
    };
  },
  publicarMusica() {},
  publicarPodcast() {},
};
</script>
<style lang="scss" scoped>
.search-icon {
  color: #ffff;
  font-size: 20px;
}

.fa-heart {
  padding-left: 20px;
}

.linha {
  width: 90%;
}

.sliderVolume {
  padding-left: 5px;
  width: 10%;
  color: #fdc200;
  margin-top: 28px;
  margin-right: 5%;
}

.sliderProgress {
  color: #fdc200;
  margin-top: 20px;
}
.infoMusica {
  display: flex;
}

.fa-3x {
  padding-left: 35px;
}

.volume {
  color: #fdc200;
  margin-top: 20px;
  margin-left: 10%;
}

.corpo {
  background-color: #737373;
  display: flex;
}

.corpoProgress {
  background-color: #737373;
  margin-top: -9%;
  margin-left: 5%;
  margin-right: 5%;
}

.bottom {
  height: 10%;
  display: flex;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: #fdc200;
  justify-content: center !important;
  margin-top: 20px;
}

.songInfo {
  height: 200px;
  padding-left: 5%;
  justify-content: left;
  margin-top: 20px;
}
</style>
