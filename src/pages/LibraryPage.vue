<template>
  <p class="title">{{ $t("library") }}</p>
  <div v-for="item in musicList" :key="item.name">
    <q-list separator>
      <q-item clickable v-ripple>
        <q-item-section class="item-name"
          >{{ item.id }} - {{ item.name }}</q-item-section
        >
      </q-item>
    </q-list>
  </div>
</template>
<script>
export default {
  name: "LibraryPage",
  data() {
    return {
      musicList: null,
    };
  },
  beforeMount() {
    this.getMusics();
  },
  methods: {
    getMusics() {
      this.$axios
        .get(`${process.env.API}/musics`)
        .then((response) => {
          this.musicList = response.data;
          console.log(this.musicList);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
  margin: 15px 0;
  font-size: 35px;
}

.item-name {
  font-size: 20px;
}
</style>
