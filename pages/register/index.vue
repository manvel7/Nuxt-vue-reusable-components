<template>
  <div class="main_container">
    <div class="register-wrapper">
      <h5>Welcome to Stagiro</h5>
      <div class="social-register">
        <Button
          class="email-btn"
          :label="'Sign up with Google'"
          :background="'ghost'"
          :size="'custom'"
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
          :label="'Sign up with Instagram'"
          :background="'ghost'"
          :size="'custom'"
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
          :label="'Sign up with Facebook'"
          :background="'ghost'"
          :size="'custom'"
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
          :label="'Sign up with Twitter'"
          :background="'ghost'"
          :size="'custom'"
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
      <Button
        v-if="!loginWithEmail"
        class="email-btn"
        :label="'Sign up with email'"
        :background="'ghost'"
        :size="'custom'"
        :color="'black'"
        @on-click="loginWithEmail = true"
      />
      <nuxt-link v-if="!loginWithEmail" to="/login" class="have-login"
        >Already have an account? Log in</nuxt-link
      >
      <div v-if="loginWithEmail" class="form-wrapper">
        <Input
          :type="'text'"
          :label="'Full name'"
          :name.sync="fullName"
          :rules="rules.fullName"
          :error="$v.fullName"
        />
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
        <Checkbox :name.sync="agree" :error="errorCheckbox">
          <label slot="label"
            >I am 18 years of age or older and agree to the terms of the
            <a href="#">Stagiro User Agreement</a> and the
            <a href="#">Privacy Policy</a>.</label
          >
        </Checkbox>
        <Button
          :label="'Create account'"
          :background="'primary'"
          :size="'custom'"
          :color="'white'"
          :disabled="!checkValidation"
          @on-click="register"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "Index",
  components: {
    Input,
    Checkbox,
    Button,
  },
  validations: {
    email: {
      required,
      email,
    },
    fullName: {
      required,
    },
    password: {
      required,
      minLength: minLength(8),
      strongPassword(password) {
        return (
          (/[a-z]/.test(password) && // checks for a-z
            /[#?!@$%^&*-]/.test(password)) || // checks for symbol
          /[0-9]/.test(password) // checks for 0-9
        );
      },
    },
  },
  data() {
    return {
      loginWithEmail: false,
      errorCheckbox: "",
      passwordType: "password",
      email: "",
      fullName: "",
      password: "",
      agree: false,
      rules: {
        email: [
          { name: "required", text: "Email is required." },
          { name: "email" },
        ],
        password: [
          { name: "required", text: "Password is required." },
          { name: "minLength", text: "At least 8 characters" },
          {
            name: "strongPassword",
            text: "Contains a number or symbol",
          },
        ],
        fullName: [{ name: "required", text: "How should we call you?" }],
      },
    };
  },
  computed: {
    checkValidation() {
      return (
        this.agree &&
        !this.$v.fullName.$invalid &&
        !this.$v.email.$invalid &&
        !this.$v.password.$invalid
      );
    },
  },
  methods: {
    iconClick() {
      if (this.passwordType === "password") {
        this.passwordType = "text";
      } else this.passwordType = "password";
    },
    register() {
      if (!this.agree)
        this.errorCheckbox = "You have to agree to the terms and conditions.";
      else this.errorCheckbox = "";
      // console.log("errors");
      // if (this.checkValidation) {
      //   console.log("register");
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/pages/register";
</style>
