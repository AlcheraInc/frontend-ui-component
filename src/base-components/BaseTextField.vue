<template>
  <v-text-field
    v-model="text"
    :autofocus="autofocus"
    :clearable="clearable"
    clear-icon="cancel"
    :color="color"
    :dense="dense"
    :disabled="disabled"
    :height="height"
    :label="label"
    :name="name"
    :outlined="outlined"
    :placeholder="placeholder"
    :prepend-inner-icon="prependInnerIcon"
    :rules="rules"
    :type="type"
    :width="width"
    @keyup="$emit('change-base-text-field', text)"
  />
</template>

<script>
export default {
  name: "BaseTextField",
  props: {
    autofocus: {
      type: Boolean,
      required: false,
      default: false
    },
    clearable: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false
    },
    dense: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    height: {
      type: [Number, String],
      required: false
    },
    name: {
      type: String,
      required: false,
      default: "TextField"
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    prependInnerIcon: {
      type: String,
      required: false,
      default: ""
    },
    rules: {
      type: Array,
      required: false,
      default: () => []
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
