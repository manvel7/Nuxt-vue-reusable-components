<template>
  <div class="custom-switch">
    <div class="custom-switch__item" :class="classes">
      <label class="switch">
        <input v-model="switchItem" type="checkbox" @click="toggleCheckbox" />
        <div class="slider round"></div>
      </label>
      <span class="text">{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchType",
  props: {
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return ["medium", "large"].includes(value);
      },
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      switchItem: true,
    };
  },
  computed: {
    classes() {
      return {
        [`custom-switch__${this.size}`]: true,
      };
    },
  },
  methods: {
    toggleCheckbox() {
      this.switchItem = !this.switchItem;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/switch";
</style>
