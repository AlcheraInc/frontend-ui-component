<template>
  <v-snackbar
    :class="getHeightClass"
    v-model="show"
    :bottom="true"
    :color="color"
    :elevation="0"
    rounded="pill"
    :timeout="timeout"
  >
    <div style="padding-left: 10px">{{ text }}</div>
    <template v-slot:action="{ attrs }">
      <v-btn text color="white" @click="show = false">
        <v-icon>close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "BaseToast",
  props: {
    color: {
      type: String,
      required: true
    },
    tall: {
      type: Boolean,
      required: false,
      default: true
    },
    text: {
      type: String,
      required: true
    },
    timeout: {
      type: Number,
      required: true
    }
  },
  data: () => {
    return {
      show: false
    };
  },
  computed: {
    getHeightClass() {
      return `toast-${!this.tall ? "short" : "tall"}`;
    }
  }
};
</script>

<style scoped></style>
