<template>
  <q-layout view="hHh Lpr lff" style="min-height: unset !important">
    <g-header />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import GHeader from "src/components/GHeader.vue";
export default {
  name: "MainLayout",
  components: {
    GHeader,
  },
};
</script>
