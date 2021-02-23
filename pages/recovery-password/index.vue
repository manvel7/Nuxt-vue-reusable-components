<template>
  <div class="main_container">
    <div class="change-password-wrapper">
      <h5>Forgotten password</h5>
      <p class="sub-title">
        Please enter the code we had just sent to your email address and set a
        new password.
      </p>
      <div class="form-wrapper">
        <Input
          :type="'text'"
          :label="'Code'"
          :name.sync="code"
          :rules="rules.code"
          :error="$v.code"
        />
        <Input
          :type="'password'"
          :label="'New Password'"
          :name.sync="password"
          :rules="rules.password"
          :error="$v.password"
          :icon="require('~/assets/img/eye-show.svg')"
        />
        <Button
          :label="'Set new password'"
          :background="'primary'"
          :size="'custom'"
          :color="'white'"
          @on-click="setNewPass"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { minLength, required } from "vuelidate/lib/validators";
export default {
  name: "Index",
  components: {
    Input,
    Button,
  },
  data() {
    return {
      password: "",
      code: "",
      rules: {
        code: [{ name: "required", text: "Code is required." }],
        password: [
          { name: "required", text: "Password is required." },
          { name: "minLength", text: "At least 8 characters" },
          {
            name: "strongPassword",
            text: "Contains a number or symbol",
          },
        ],
      },
    };
  },
  validations: {
    code: {
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
  methods: {
    setNewPass() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/pages/change-password";
</style>
