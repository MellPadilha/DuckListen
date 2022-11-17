<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style lang="scss">
@font-face {
  font-family: GochiHand;
  src: url(./assets/GochiHand-Regular.ttf);
}
body {
  background-color: $secondary;
  font-family: GochiHand;
  color: white;
}
</style>
