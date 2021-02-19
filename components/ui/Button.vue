<template>
  <button
    type="button"
    :class="classes"
    :style="style"
    :disabled="disabled"
    class="storybook-button"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "MyButton",

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return ["small", "medium", "large"].includes(value);
      },
    },
    borderRadius: {
      type: Number,
      default: 5,
    },
  },

  computed: {
    classes() {
      return {
        "storybook-button--primary": this.primary,
        "storybook-button--secondary": !this.primary,
        "storybook-button--disabled": this.disabled,
        "storybook-button--loading": this.loading,
        [`storybook-button--${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        borderRadius: this.borderRadius + "px",
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("on-click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/components/button";
</style>
