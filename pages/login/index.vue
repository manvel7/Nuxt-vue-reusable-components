<template>
  <div class="main_container">
    <div class="login-wrapper">
      <h5>Log in to Stagiro</h5>
      <div class="social-register">
        <Button
          class="email-btn"
          :background="'ghost'"
          :size="'medium'"
          :color="'black'"
        >
          <span slot="icon" class="svg">
            <img
              :src="require('~/assets/img/socials/google-register.svg')"
              alt="icon"
            />
          </span>
        </Button>
        <Button
          class="email-btn"
          :background="'ghost'"
          :size="'medium'"
          :color="'black'"
        >
          <span slot="icon" class="svg">
            <img
              :src="require('~/assets/img/socials/intagram-register.svg')"
              alt="icon"
            />
          </span>
        </Button>
        <Button
          class="facebook-btn"
          :background="'ghost'"
          :size="'medium'"
          :color="'white'"
        >
          <span slot="icon" class="svg">
            <img
              :src="require('~/assets/img/socials/facebook-register.svg')"
              alt="icon"
            />
          </span>
        </Button>
        <Button
          class="twitter-btn"
          :background="'ghost'"
          :size="'medium'"
          :color="'white'"
        >
          <span slot="icon" class="svg">
            <img
              :src="require('~/assets/img/socials/twitter-register.svg')"
              alt="icon"
            />
          </span>
        </Button>
      </div>
      <div class="or-block">
        <p>
          <span class="text">Or</span>
        </p>
      </div>
      <div class="form-wrapper">
        <Input
          :type="'email'"
          :label="'Enter your email'"
          :name.sync="email"
          :rules="rules.email"
          :error="$v.email"
        />
        <Input
          :type="passwordType"
          :label="'Enter your password'"
          :name.sync="password"
          :rules="rules.password"
          :error="$v.password"
          :icon="require('~/assets/img/eye-show.svg')"
          @icon-click="iconClick"
        />
        <Button
          :label="'Login'"
          :background="'primary'"
          :size="'custom'"
          :color="'white'"
        />
        <nuxt-link to="/forgot-password" class="forgot-password"
          >Forgot password?</nuxt-link
        >
      </div>

      <SnackBar
        class="custom-snackbar"
        :type="'snackbar'"
        :active.sync="showSnackbar"
        :position="'bottom-center'"
        :timeout="5000"
        :message="'Password changed.'"
        :is-close="true"
        :background-color="'success'"
        @close="close"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SnackBar from "@/components/ui/SnackBar";
import { email, required } from "vuelidate/lib/validators";
export default {
  name: "Index",
  components: {
    Button,
    Input,
    SnackBar,
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevUrl = from.path;
    });
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  data() {
    return {
      prevUrl: "",
      showSnackbar: false,
      passwordType: "password",
      email: "",
      password: "",
      rules: {
        email: [
          { name: "required", text: "Email is required." },
          { name: "email" },
        ],
        password: [{ name: "required", text: "Password is required." }],
      },
    };
  },
  mounted() {
    if (this.prevUrl === "/recovery-password") {
      this.showSnackbar = true;
    }
  },
  methods: {
    iconClick() {
      if (this.passwordType === "password") {
        this.passwordType = "text";
      } else this.passwordType = "password";
    },
    close() {
      this.showSnackbar = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/pages/login";
</style>
