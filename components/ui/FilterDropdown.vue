<template>
  <div class="custom-filter-dropdown">
    <div class="aselect">
      <div class="selector" @click.prevent="toggle()">
        <div class="label">
          <span class="svg">
            <svg-search />
          </span>
          <span
            :class="{ 'change-position': value || visible }"
            class="label-float"
            >Select</span
          >
          <input v-model="value" class="value" @input="showList" />
        </div>
        <div class="arrow" :class="{ expanded: visible }">
          <svg-arrow-down />
        </div>
        <div :class="{ hidden: !visible, visible }">
          <ul>
            <li v-if="!listNew.length">No result</li>
            <li
              v-for="(item, index) in listNew"
              v-else
              :key="index"
              :class="{ current: item === value }"
              @click="select(item)"
            >
              {{ itemLabel ? item[itemLabel] : item.label }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgArrowDown from "~/assets/img/down-arrow.svg?inline";
import SvgSearch from "~/assets/img/search.svg?inline";
export default {
  name: "FilterDropdown",
  components: {
    SvgArrowDown,
    SvgSearch,
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
      listNew: [],
    };
  },
  watch: {
    value(val) {
      this.listNew = this.list.filter((item) => {
        const label = this.itemLabel ? this.itemLabel : "label";
        if (
          item[label].includes(val) ||
          item[label].toUpperCase().includes(val) ||
          item[label].toLowerCase().includes(val)
        ) {
          return item;
        }
      });
    },
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
      if (this.visible) this.listNew = this.list;
    },
    showList() {
      this.visible = true;
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
@import "assets/scss/ui/filter-dropdown";
</style>
