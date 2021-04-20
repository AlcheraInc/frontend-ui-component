<template>
  <v-textarea
    v-model="text"
    :autofocus="autofocus"
    :clearable="clearable"
    :color="color"
    :dense="dense"
    :disabled="disabled"
    :height="height"
    :label="label"
    :outlined="outlined"
    :placeholder="placeholder"
    :readonly="readonly"
    :rounded="rounded"
    :rules="rules"
    :type="type"
    :width="width"
  />
</template>

<script>
export default {
  name: "BaseTextarea",
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
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false
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
