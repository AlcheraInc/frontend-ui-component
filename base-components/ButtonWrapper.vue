<template>
  <BaseButton
    :color="buttonStyle.color || color"
    :depressed="depressed"
    :disabled="disabled"
    :height="buttonStyle.height || height"
    :img-src="imgSrc"
    :loading="loading"
    :outlined="buttonStyle.outlined || outlined"
    :rounded="rounded"
    :text="text"
    :text-color="buttonStyle.textColor || textColor"
    :text-size="buttonStyle.textSize || textSize"
    :type="type"
    :v-icon-name="buttonStyle.vIconName || vIconName"
    :width="buttonStyle.width || width"
    @click-base-button="$emit('click-button-wrapper')"
  />
</template>

<script>
import BaseButton from "./BaseButton";

export default {
  name: "ButtonWrapper",
  components: {
    BaseButton
  },
  props: {
    // prebuilt style options:
    // 1. login
    // 2. menu
    // 3. add
    // 4. edit
    // 5. delete
    prebuiltStyle: {
      type: String,
      required: false,
      default: ""
    },
    color: {
      type: String,
      required: false,
      default: "#3774FF"
    },
    depressed: {
      type: Boolean,
      required: false,
      default: true
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
    imgSrc: {
      type: String,
      required: false,
      default: ""
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: String,
      required: false,
      default: "Button Wrapper"
    },
    textColor: {
      type: String,
      required: false,
      default: "#ffffff"
    },
    textSize: {
      type: String,
      required: false,
      default: "14px"
    },
    type: {
      type: String,
      required: false,
      default: "button"
    },
    vIconName: {
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
      buttonStyle: {}
    };
  },
  mounted() {
    this.applyPrebuiltStyle();
  },
  watch: {
    disabled(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.applyPrebuiltStyle();
      }
    }
  },
  methods: {
    applyPrebuiltStyle() {
      switch (this.prebuiltStyle) {
        case "login":
          this.buttonStyle = {
            color: "#3b45ff",
            height: "36px",
            textSize: "16px",
            width: "100%"
          };
          break;
        case "menu":
          this.buttonStyle = {
            color: "#3774ff",
            rounded: true
          };
          break;
        case "add":
          this.buttonStyle = {
            color: "#3774ff",
            textColor: "#ffffff",
            vIconName: "mdi-plus"
          };
          break;
        case "edit":
          this.buttonStyle = {
            color: this.disabled ? "#0000001f" : "#3774ff",
            outlined: !this.disabled,
            textColor: this.disabled ? "#00000042" : "#3774ff",
            vIconName: "mdi-pencil"
          };
          break;
        case "delete":
          this.buttonStyle = {
            color: this.disabled ? "#0000001f" : "#ea5151",
            outlined: !this.disabled,
            textColor: this.disabled ? "#00000042" : "#ea5151",
            vIconName: "mdi-delete"
          };
          break;
        case "upload":
          this.buttonStyle = {
            color: "#3774ff",
            vIconName: "mdi-upload"
          };
          break;
        case "download":
          this.buttonStyle = {
            color: this.disabled ? "#0000001f" : "#3774ff",
            textColor: this.disabled ? "#00000042" : "#ffffff",
            vIconName: "mdi-download"
          };
          break;
        case "select-mobile":
          this.buttonStyle = {
            color: "#ffffff",
            textColor: "#3a7bc6"
          };
          break;
        case "add-mobile":
          this.buttonStyle = {
            color: this.disabled ? "#0000001f" : "#3a7bc6",
            textColor: this.disabled ? "#00000042" : "#ffffff",
            vIconName: "add"
          };
          break;
        case "delete-mobile":
          this.buttonStyle = {
            color: this.disabled ? "#0000001f" : "#ea5151",
            textColor: this.disabled ? "#00000042" : "#ea5151",
            outlined: !this.disabled
          };
        default:
          break;
      }
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped></style>
