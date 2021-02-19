<template>
  <div class="test">
    <h1>Hello {{ $t("email") }} <svg-close /></h1>
    <base-link />
    <div>
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Email</label>
        <input
          v-model.trim="name"
          class="form__input"
          @input="setName($event.target.value)"
        />
      </div>
      <div v-if="!$v.name.required" class="error">Field is required</div>
      <div v-if="!$v.name.minLength" class="error">
        Name must have at least {{ $v.name.$params.minLength.min }} letters.
      </div>
      <button class="uk-button uk-button-danger" @click.prevent="testToast">
        Primary
      </button>
      <my-button
        label="Primary Button"
        primary
        :loading="false"
        size="large"
        background-color="rgba(89,74,165,1)"
        :border-radius="15"
      />
      <my-button
        label="Primary Button"
        primary
        disabled
        size="medium"
        background-color="rgba(83,58,209,1)"
        :border-radius="5"
      />
    </div>
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import { functions } from "@/utils";
import MyButton from "@/components/ui/Button";
import BaseLink from "@/components/ui/BaseLink";
import SvgClose from "~/assets/img/cloud-arrow.svg?inline";
export default {
  name: "Testing",
  components: {
    SvgClose,
    MyButton,
    BaseLink,
  },
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    age: {
      between: between(20, 30),
    },
  },
  methods: {
    setName(value) {
      this.name = value;
      this.$v.name.$touch();
    },
    setAge(value) {
      this.age = value;
      this.$v.age.$touch();
    },

    testToast() {
      this.$store.dispatch("login", { email: this.name });
      if (this.$store.getters.isLoggedIn) {
        this.$toast.success("Successfuly logined");
      } else {
        const errors = functions.validationErrors(this.$store.getters.errors);
        this.$toast.error(errors);
        if (this.$store.getters.errors.length === 1) {
          functions.customStyleError();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.uk-button-secondary {
  background-color: yellow;
}
</style>
