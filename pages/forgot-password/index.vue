<template>
  <div class="main_container">
    <div class="forgot-password-wrapper">
      <h5>Forgotten password</h5>
      <div class="form-wrapper">
        <Input
          :type="'email'"
          :label="'Enter your email'"
          :name.sync="email"
          :rules="rules.email"
          :error="$v.email"
        />
        <Button
          :label="'Reset password'"
          :background="'primary'"
          :size="'custom'"
          :color="'white'"
        />
        <nuxt-link to="/login" class="back-login">Back to login</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
export default {
  name: "Index",
  components: {
    Input,
    Button,
  },
  data() {
    return {
      email: "",
      rules: {
        email: [
          { name: "required", text: "Email is required." },
          { name: "email" },
        ],
      },
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/pages/forgot-password";
</style>
