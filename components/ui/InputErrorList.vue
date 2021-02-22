<template>
  <div>
    <div
      v-for="(rule, index) in rules"
      v-if="!error[rule.name] && hasError"
      :key="index"
      class="errors-list"
    >
      <p v-if="rule.name === 'required'">
        Please enter, this filed is required
      </p>
      <p v-if="rule.name === 'minLength'">
        Min length must be {{ rule.value }}
      </p>
      <p v-if="rule.name === 'maxLength'">
        Max length must be {{ rule.value }}
      </p>
      <p v-if="rule.name === 'email'">Not valid email format</p>
      <p v-if="rule.name === 'numeric'">Field must be number</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputErrorList",
  props: {
    rules: {
      type: Array,
      required: false,
      default: null,
    },
    error: {
      type: Object,
      required: false,
      default: null,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.errors-list {
  p {
    color: $c-error !important;
    line-height: 14px !important;
    margin-top: 2px;
    @include text-x;
  }
}
</style>
