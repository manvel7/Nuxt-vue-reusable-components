<template>
  <transition name="modal" mode="out-in">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div v-if="showClose" class="modal-header">
            <span class="svg" @click="$emit('close')"> <svg-close /> </span>
          </div>

          <div
            class="modal-body"
            :style="{ paddingTop: !showClose ? '40px' : '20px' }"
          >
            <div class="body">
              <span class="svg">
                <img :src="require(`~/assets/img/i.svg`)" alt="" />
              </span>
              <h6>Delete this item?</h6>
              <div class="content">
                Alert messaging (or alert notification) is machine-to-person
                communication that is important or time sensitive.
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <span class="modal-default-text">Example Footer</span>
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SvgClose from "~/assets/img/close-black.svg?inline";
export default {
  name: "Alerts",
  components: {
    SvgClose,
  },
  props: {
    showClose: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/alerts.scss";
</style>
