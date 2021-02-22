<template>
  <div class="navbar">
    <div class="left-side">
      <span class="svg-logo">
        <svg-header-logo />
      </span>
    </div>
    <div class="right-side">
      <nuxt-link to="/login" class="login-link">Log in</nuxt-link>
      <Button :label="'Sign up'" @on-click="goToLink" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/ui/Button";
import SvgHeaderLogo from "~/assets/img/header-logo.svg?inline";
export default {
  name: "Header",
  components: {
    SvgHeaderLogo,
    Button,
  },
  methods: {
    goToLink() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/components/header";
</style>
