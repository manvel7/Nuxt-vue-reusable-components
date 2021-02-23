<template>
  <div class="checkbox-class">
    <div class="custom-checkbox">
      <input
        id="checkbox"
        v-model="propModel"
        type="checkbox"
        :class="classes"
        :disabled="disabled"
      />
      <slot name="label"></slot>
    </div>
    <div v-if="error" class="errors-list">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    name: {
      type: [String, Boolean],
      required: true,
    },
    error: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    propModel: {
      get() {
        return this.name;
      },
      set(value) {
        this.$emit("update:name", value);
      },
    },
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
