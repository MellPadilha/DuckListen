<template>
  <q-footer class="player-area" elevated>
    <q-toolbar>
      <q-toolbar-title>
        <div class="row card-content">
          <div class="image-container">
            <q-img class="image" src="src/assets/logo_duck.svg" width="70px" />
          </div>
          <div class="playlist-name">
            <div>music</div>
            <div class="author-name">author</div>
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>
<script>
export default {
  name: "GPlayer",
};
</script>
<style lang="scss" scoped>
.player-area {
  background: #1e1e1e;
  border-top: 2px solid #737373;
  max-height: 90px;
  height: 90px;
}
.image-container {
  max-width: 70px;
  max-height: 70px;
  width: 70px;
  height: 70px;
  margin: 10px;
  border-radius: 8px;
  color: $dark-grey;
  overflow: hidden;
}

.playlist-name {
  font-size: 20px;
  margin: 10px 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.author-name {
  font-size: 15px;
}
</style>
