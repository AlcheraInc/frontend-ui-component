<template>
  <v-text-field :label="label" :outlined="isOutlined" />
</template>

<script>
import { VTextField } from "vuetify/lib";
import "./textField.css";

export default {
  name: "TextField",
  components: { VTextField },
  props: {
    isOutlined: {
      type: Boolean,
      default: false
    }
  }
};
</script>
