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
      musicList: [
        { id: 1, name: "Daily Mix 1" },
        { id: 2, name: "Daily Mix 2" },
        { id: 3, name: "Daily Mix 3" },
        { id: 4, name: "Daily Mix 4" },
        { id: 5, name: "Daily Mix 5" },
        { id: 6, name: "Today's Top Hits" },
        { id: 7, name: "Viral Hits" },
        { id: 8, name: "Pop Up" },
      ],
    };
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
