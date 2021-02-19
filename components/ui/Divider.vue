<template>
  <div class="custom-divider" :style="style"></div>
</template>

<script>
export default {
  name: "Divider",
  props: {
    width: {
      type: String,
      default: "150px",
    },
  },
  computed: {
    style() {
      return {
        width: this.width,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/ui/divider";
</style>
