<template>
  <div class="custom-checkbox">
    <input
      id="checkbox"
      type="checkbox"
      :class="classes"
      :disabled="disabled"
    />
    <label for="checkbox">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    classes() {
      return {
        "custom-checkbox__disabled": this.disabled,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/checkbox.scss";
</style>
