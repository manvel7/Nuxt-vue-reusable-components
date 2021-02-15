<template>
  <div class="test">
    <h1>Hello {{ $t("email") }} <svg-close /></h1>
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
      <button class="uk-button uk-button-primary" @click.prevent="testToast">
        Primary
      </button>
    </div>
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import { functions } from "@/utils";
import SvgClose from "~/assets/img/cloud-arrow.svg?inline";
export default {
  name: "Index",
  components: {
    SvgClose,
  },
  data() {
    return {
      name: "",
      age: 0,
      errors: {
        detail: [
          {
            loc: ["path", "item_id"],
            msg: "value is not a valid integer",
            type: "type_error.integer",
          },
          {
            loc: ["path", "item_id"],
            msg: "value is not a valid String",
            type: "type_error.integer",
          },
        ],
      },
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
      const errors = functions.validationErrors(this.errors.detail);
      this.$toast.error(errors);
    },
  },
};
</script>

<style lang="scss" scoped>
.uk-button-secondary {
  background-color: yellow;
}
</style>
