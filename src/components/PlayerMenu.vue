<template>
  <q-card class="toolbar text-white" flat>
    <div class="row header-content">
      <div class="bottom">
        <div class="icons">
          <!-- fontawesome icons -->
          <q-btn rounded no-caps style="margin-right: 50px; font-size: 8px"
            ><i class="fas fa-3x fa-random" id="next"></i
          ></q-btn>
          <q-btn rounded no-caps>
            <i class="fas fa-3x fa-step-backward color" id="previous"></i>
          </q-btn>
          <q-btn rounded no-caps
            ><i class="far fa-3x fa-play-circle" id="masterPlay"></i
          ></q-btn>

          <q-btn rounded no-caps
            ><i class="fas fa-3x fa-step-forward" id="next"></i
          ></q-btn>
          <q-btn rounded no-caps style="margin-left: 50px; font-size: 8px"
            ><i class="fas fa-3x fa-refresh" id="next"></i
          ></q-btn>
        </div>
      </div>
      <div class="volume">
        <q-btn rounded no-caps style="margin-left: 50px; font-size: 8px"
          ><i class="fas fa-3x fa-volume-up" id="next"></i
        ></q-btn>
        <input
          type="range"
          name="range"
          id="myProgressBar"
          min="0"
          value="0"
          max="100"
        />
      </div>
      <div class="songInfo">
        <input
          class="songInfo"
          type="range"
          name="range"
          id="myProgressBar"
          min="0"
          value="0"
          max="100"
        />
      </div>
    </div>
  </q-card>
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
.toolbar {
  background: #1e1e1e;
  height: 50px;
  margin-left: 280px;
  padding: auto;
}

.header-content {
  margin: 20px 0;
}

.home-button {
  background-color: #525252;
  margin: 0 50px 0 30px;
}

.menuDropDown {
  color: #1e1e1e;
  font-size: 20px;
}

.search-icon {
  color: #ffff;
  font-size: 20px;
}

.search-bar {
  width: 50%;
  max-width: 500px;
  min-width: 500px;
  margin-right: 40px;
}

.user-button {
  margin: 0 30px;
}

:deep(.user-button.q-btn .q-icon) {
  font-size: 16px;
  padding: 4px;
  border: 1px solid white;
  border-radius: 15px;
}

:deep(.q-field) {
  height: 40px !important;
}

:deep(.q-field__native) {
  color: #525252;
  height: 40px !important;
  font-size: 16px;
}

:deep(.q-field--outlined) {
  height: 40px !important;
}

:deep(.q-field__control) {
  height: 40px !important;
}

:deep(.q-field__marginal) {
  height: 40px !important;
}

:deep(.q-field__control:before) {
  border: #525252 1px solid;
  transition: none;
}

:deep(.q-field__control:after) {
  border-width: 1px !important;
  transition: none;
}

:deep(.q-field__inner) {
  height: 40px !important;
}

:deep(.q-field--dense) {
  height: 40px !important;
}

.row {
  background-color: #737373;
}

.bottom {
  height: 10%;
  display: flex;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.songInfo {
  width: 100%;
  margin-left: 20%;
  margin-right: 37%;
}

.volume {
  align-items: center;
  margin-right: 15px;
  margin-top: 25px;
}

.fa-3x {
  color: #fdc200 0.2px solid;
  transition: none;
  padding: 10px;
}

.divTeste {
  background-color: #fdc200;
}

.img {
  height: 50%;
  max-width: 50%;
}

.info {
  background-color: #fdc200;
}

.icons {
  display: flex;
}
</style>
