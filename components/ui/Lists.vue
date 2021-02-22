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
        <div v-if="item.data" class="right-side">
          <span v-if="item.data.type === 'timestamp'" class="timestamp">{{
            item.data.value
          }}</span>
          <span v-else-if="item.data.type === 'control'" class="control"
            ><SvgIconBan></SvgIconBan
          ></span>
          <span v-else-if="item.data.type === 'metadata'" class="metadata">{{
            item.data.value
          }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Avatar from "@/components/ui/Avatar";
import SvgIconBan from "~/assets/icons/SvgIconBan";
export default {
  name: "Lists",
  components: {
    Avatar,
    SvgIconBan,
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
