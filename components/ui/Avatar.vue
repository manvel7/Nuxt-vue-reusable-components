<template>
  <div class="custom-avatar">
    <span
      v-if="imageType === 'image'"
      class="custom-avatar__image"
      :class="classes"
    >
      <img :src="src" alt="avatar-image" />
    </span>
    <span v-else class="custom-avatar__icon" :class="classes">
      <img :src="src" alt="avatar-icon" />
    </span>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      required: true,
    },
    imageType: {
      type: String,
      default: "image",
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
        [`custom-avatar__${this.size}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/avatar";
</style>
