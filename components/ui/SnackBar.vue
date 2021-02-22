<template>
  <transition name="snackbar" class="custom-snackbar">
    <div v-if="active" class="snackbar" :class="classes">
      <div class="snackbar__wrap">
        <div class="snackbar__body body-custom">
          {{ message }}
          <button
            v-if="type !== 'message' && isClose"
            class="close-btn"
            @click="$emit('close')"
          >
            DISMISS
          </button>
          <button v-else-if="isClose" @click="$emit('close')">
            <svg-close-white v-if="backgroundColor !== 'secondary'" />
            <svg-close-black v-else />
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SvgCloseWhite from "assets/img/close-white.svg";
import SvgCloseBlack from "assets/img/close-black.svg";
export default {
  name: "SnackBar",
  components: {
    SvgCloseWhite,
    SvgCloseBlack,
  },
  props: {
    type: {
      type: String,
      default: "message",
    },
    active: {
      type: Boolean,
      default: false,
    },
    isClose: {
      type: Boolean,
      default: false,
    },
    timeout: {
      type: Number,
      default: 5000,
    },
    message: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "default",
      validator(value) {
        return ["secondary", "success", "error", "default"].includes(value);
      },
    },
    position: {
      type: String,
      default: "top-right",
      validator(value) {
        return [
          "bottom-right",
          "bottom-center",
          "bottom-left",
          "top-right",
          "top-center",
          "top-left",
        ].includes(value);
      },
    },
  },
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    classes() {
      return {
        [`snackbar--${this.position}`]: true,
        [`snackbar--${this.backgroundColor}`]: true,
      };
    },
  },
  watch: {
    active() {
      this.setTimer();
    },
  },
  methods: {
    setTimer() {
      if (this.timer) clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        this.$emit("update:active", false);
      }, this.timeout);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/ui/snackbar";
</style>
