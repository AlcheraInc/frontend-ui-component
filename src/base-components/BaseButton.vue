<template>
  <v-btn
    :color="color"
    :depressed="depressed"
    :disabled="disabled"
    :height="height"
    :loading="loading"
    :outlined="outlined"
    :rounded="rounded"
    :type="type"
    :width="width"
    @click.stop.prevent="$emit('click-base-button')"
  >
    <v-icon v-if="vIconName !== ''" :color="textColor" left>{{ vIconName }}</v-icon>
    <img v-if="imgSrc !== ''" :src="imgSrc" class="button-image" height="18" />
    <span class="button-text" :style="getStyle">{{ text }}</span>
    <template v-slot:loader>
      <v-progress-circular color="white" indeterminate />
    </template>
  </v-btn>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      required: false,
    },
    depressed: {
      type: Boolean,
      required: false,
      default: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    height: {
      type: [Number, String],
      required: false,
      default: '40px',
    },
    imgSrc: {
      type: String,
      required: false,
      default: '',
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false,
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
    textColor: {
      type: String,
      required: false,
    },
    textSize: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'button',
    },
    vIconName: {
      type: String,
      required: false,
      default: '',
    },
    width: {
      type: [Number, String],
      required: false,
    },
  },
  computed: {
    getStyle() {
      let styleList = []
      if (!!this.textColor) {
        styleList.push(`color: ${this.textColor}`)
      }
      if (!!this.textSize) {
        styleList.push(`font-size: ${this.textSize}`)
      }
      return styleList.join(';')
    },
  },
}
</script>

<style scoped>
.button-text {
  text-transform: none;
}
.button-image {
  margin-right: 10px;
}
</style>
