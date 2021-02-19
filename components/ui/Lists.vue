<template>
  <div class="custom-lists">
    <ul :style="styleUl">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="custom-lists__item"
      >
        <div class="left-side">
          <div v-if="item.iconSrc" class="img-block">
            <Avatar :src="item.iconSrc" :image-type="'image'" :size="'large'" />
          </div>
          <div class="header" :style="styleHeader(item.iconSrc)">
            <p class="title">{{ item.title }}</p>
            <p class="sub-title">{{ item.subTitle }}</p>
          </div>
        </div>
        <div class="right-side">Tes</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Avatar from "@/components/ui/Avatar";
export default {
  name: "Lists",
  components: {
    Avatar,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    width: {
      type: String,
      default: "480px",
    },
    backgroundColor: {
      type: String,
      default: "#FBFBFB",
    },
  },
  computed: {
    styleUl() {
      return {
        width: this.width,
        backgroundColor: this.backgroundColor,
      };
    },
    styleHeader() {
      return (icon) => (icon ? { marginLeft: "15px" } : { marginLeft: "0" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/lists";
</style>
