<template>
  <button
    type="button"
    :class="classes"
    :style="style"
    :disabled="disabled"
    class="custom-button"
    @click="onClick"
  >
    <slot name="icon"></slot>
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
    src: {
      type: String,
      required: false,
      default: null,
    },
    background: {
      type: String,
      default: "normal",
    },
    color: {
      type: String,
      default: "black",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return ["small", "medium", "large", "custom"].includes(value);
      },
    },
    borderRadius: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    classes() {
      return {
        [`custom-button__${this.background}`]: true,
        [`custom-button__${this.color}`]: true,
        [`custom-button__${this.size}`]: true,
        "custom-button__disabled": this.disabled,
      };
    },
    style() {
      return {
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
@import "../../assets/scss/ui/button";
</style>
