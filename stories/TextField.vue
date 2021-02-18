<template>
  <v-text-field :label="label" :outlined="isOutlined" />
</template>

<script>
import { VTextField } from "vuetify/lib";

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
