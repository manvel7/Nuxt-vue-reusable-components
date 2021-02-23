<template>
  <div data-app>
    <Header />
    <nuxt />
  </div>
</template>
<script>
import Header from "@/components/header";
export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "assets/scss/global";
</style>
