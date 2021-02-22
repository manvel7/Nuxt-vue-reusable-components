<template>
  <span class="custom-icon" :class="classes">
    <img :src="src" alt="icon" />
  </span>
</template>

<script>
export default {
  name: "Icons",
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return ["small", "medium", "large"].includes(value);
      },
    },
  },
  computed: {
    classes() {
      return {
        [`custom-icon__${this.size}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/icons";
</style>
