<template>
  <div class="custom-pagination">
    <ul>
      <li>
        <button
          :class="{ disabled: pages.total <= 1 }"
          :disabled="pages.total <= 1"
          @click="paginateArrow('prev')"
        >
          <svg-left-arrow class="arrow" />
        </button>
      </li>
      <li v-for="page in pages.total" :key="page">
        <button
          :class="{ 'current-page': page === pages.currentPage }"
          @click="paginate(page)"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button
          :class="{ disabled: pages.total <= 1 }"
          :disabled="pages.total <= 1"
          @click="paginateArrow('next')"
        >
          <svg-right-arrow class="arrow" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import SvgLeftArrow from "~/assets/img/left-arrow.svg?inline";
import SvgRightArrow from "~/assets/img/right-arrow.svg?inline";
export default {
  name: "Paginations",
  components: {
    SvgLeftArrow,
    SvgRightArrow,
  },
  props: {
    pages: {
      type: Object,
      required: true,
    },
  },
  methods: {
    paginate(page) {
      this.$emit("paginate", page);
    },
    paginateArrow(type) {
      let page;
      if (type === "prev" && this.pages.currentPage !== 1) {
        page = this.pages.currentPage - 1;
        this.paginate(page);
      } else if (
        type === "next" &&
        this.pages.currentPage !== this.pages.total
      ) {
        page = this.pages.currentPage + 1;
        this.paginate(page);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/paginations";
</style>
