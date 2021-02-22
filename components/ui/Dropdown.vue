<template>
  <div class="custom-dropdown">
    <div class="aselect">
      <div class="selector" @click.prevent="toggle()">
        <div class="label">
          <span
            :class="{ 'change-position': value || visible }"
            class="label-float"
            >Select</span
          >
          <span class="value">{{ value }}</span>
        </div>
        <div class="arrow" :class="{ expanded: visible }">
          <svg-arrow-down />
        </div>
        <div :class="{ hidden: !visible, visible }">
          <ul>
            <li
              v-for="(item, index) in list"
              :key="index"
              :class="{ current: item === value }"
              @click="select(item)"
            >
              {{ itemLabel ? item[itemLabel] : item.label }}
            </li>
          </ul>
        </div>
      </div>
      <div v-if="helpText" class="help-text">{{ helpText }}</div>
    </div>
  </div>
</template>

<script>
import SvgArrowDown from "~/assets/img/down-arrow.svg?inline";
export default {
  name: "Dropdown",
  components: {
    SvgArrowDown,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    name: {
      type: [String, Number, Object],
      required: true,
    },
    helpText: {
      type: String,
      required: false,
      default: null,
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
    itemValue: {
      type: String,
      required: false,
      default: null,
    },
    itemLabel: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      value: "",
      visible: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(option) {
      this.value = this.itemLabel ? option[this.itemLabel] : option.label;

      let data = option;
      if (this.returnObject) {
        data = option;
      } else if (this.itemValue) {
        data = option[this.itemValue];
      } else if (option.id) {
        data = option.id;
      }

      this.$emit("update:name", data);
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.visible = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/dropdown";
</style>
