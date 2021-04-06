<template>
  <BaseTextField
    dense
    :height="height"
    :label="label"
    :outlined="outlined"
    :placeholder="placeholder"
    prepend-inner-icon="search"
    :rules="[]"
    :type="type"
    :value.sync="value"
    :width="width"
    @change-base-text-field="$emit('search-input', $event)"
  />
</template>

<script>
import BaseTextField from "./BaseTextField.vue";

export default {
  name: "SearchTextField",
  components: {
    BaseTextField
  },
  props: {
    height: {
      type: [Number, String],
      required: false
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    outlined: {
      type: Boolean,
      required: false,
      default: true
    },
    placeholder: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    value: {
      type: String,
      required: false,
      default: ""
    },
    width: {
      type: [Number, String],
      required: false
    }
  },
  data: () => {
    return {
      text: ""
    };
  },
  mounted() {
    this.text = this.value;
  }
};
</script>
