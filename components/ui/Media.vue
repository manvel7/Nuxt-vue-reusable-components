<template>
  <span class="custom-media" :class="classes">
    <img :src="src" alt="media-image" :style="style" />
  </span>
</template>

<script>
export default {
  name: "Media",
  props: {
    borderRadius: {
      type: Number,
      default: 8,
    },
    src: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "default",
      validator(value) {
        return [
          "default",
          "default-small",
          "portrait",
          "portrait-small",
          "square",
          "square-small",
        ].includes(value);
      },
    },
  },
  computed: {
    classes() {
      return {
        [`custom-media__${this.size}`]: true,
      };
    },
    style() {
      return {
        borderRadius: this.borderRadius + "px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/media";
</style>
