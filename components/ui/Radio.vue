<template>
  <div class="custom-radio">
    <div v-for="(item, index) in items" :key="index" class="custom-radio__item">
      <input
        :id="item.value"
        v-model="picked"
        type="radio"
        :value="item.value"
      />
      <label :for="item.value">{{ item.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Radio",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      picked: "one",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/radio.scss";
</style>
