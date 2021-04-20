<template>
  <v-text-field
    v-model="selectedTime"
    :color="color"
    :disabled="disabled"
    :rules="[validTime]"
    type="time"
  />
</template>

<script>
import moment from "moment";

export default {
  name: "BaseTimePicker",
  props: {
    color: {
      type: String,
      required: false,
      default: "#406eff"
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => {
    return {
      selectedTime: new Date().toISOString().substr(10, 14),
      validTime: val =>
        moment(val).format("hh:mm A") !== "Invalid format" || "Error"
    };
  }
};
</script>

<style scoped></style>
