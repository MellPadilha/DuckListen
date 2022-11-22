<template>
  <q-layout view="lHh Lpr fFf">
    <g-header />
    <side-menu />
    <q-page-container>
      <router-view />
    </q-page-container>
    <g-player />
  </q-layout>
</template>
<script>
import GHeader from "src/components/GHeader.vue";
import GPlayer from "src/components/GPlayer.vue";
import SideMenu from "src/components/SideMenu.vue";
export default {
  name: "MainLayout",
  components: {
    GHeader,
    GPlayer,
    SideMenu,
  },
};
</script>
