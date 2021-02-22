<template>
  <div class="custom-input">
    <div class="w-full">
      <div
        class="floating-input relative"
        :class="{ 'has-error': hasError, disabled: disabled }"
      >
        <input
          id="email"
          v-model.trim="propModel"
          :type="type"
          class="rounded-md w-full p-3 h-16"
          placeholder="Enter"
          autocomplete="off"
          :disabled="disabled"
          :class="{ disabled: disabled, 'icon-padding': icon }"
          @click="handleClick"
        />
        <label
          for="email"
          class="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
          >{{ label }}</label
        >
        <span v-if="icon" class="svg" @click="iconHandler">
          <img :src="icon" alt="icon" />
        </span>
      </div>
      <div v-if="helpText" class="help-text">{{ helpText }}</div>
      <InputErrorList :rules="rules" :error="error" :has-error="hasError" />
    </div>
  </div>
</template>

<script>
import InputErrorList from "@/components/ui/InputErrorList";
export default {
  name: "Input",
  components: {
    InputErrorList,
  },
  props: {
    type: {
      type: String,
      default: "text",
      validator(value) {
        return ["text", "email", "number", "password"].includes(value);
      },
    },
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    helpText: {
      type: String,
      required: false,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    error: {
      type: Object,
      required: false,
      default: null,
    },
    rules: {
      type: Array,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      isError: false,
      click: false,
    };
  },
  computed: {
    propModel: {
      get() {
        return this.name;
      },
      set(value) {
        this.$emit("update:name", value);
      },
    },
    hasError() {
      if (this.click && !this.error.$model.length > 0 && this.error.$invalid) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.click = false;
        return true;
      }
      return this.error.$model.length > 0 && this.error.$invalid;
    },
  },
  methods: {
    handleClick() {
      this.click = true;
    },
    iconHandler() {
      this.$emit("icon-click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/inputs";
</style>
