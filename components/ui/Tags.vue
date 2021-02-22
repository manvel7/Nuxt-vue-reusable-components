<template>
  <div class="custom-tags">
    <ul>
      <li class="custom-tags__item" :class="classes">Primary</li>
      <li class="custom-tags__item" :class="classes">Secondary</li>
      <li class="custom-tags__item" :class="classes">Normal</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props: {
    color: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    classes() {
      return {
        [`custom-tags__${this.color}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/tags";
</style>
