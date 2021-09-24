<template>
  <v-alert :color="color" :icon="icon" :outlined="true">
    <div :style="`color:${!!textColor ? textColor : color}`">{{ text }}</div>
  </v-alert>
</template>

<script>
export default {
  name: "BaseAlert",
  props: {
    color: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped></style>
