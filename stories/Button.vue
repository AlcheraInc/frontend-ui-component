<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script>
import "./button.css";
import {
  writeDataToFile,
  writeSheetData,
  download,
  createWorkbook
} from "./ExcelService";

export default {
  name: "my-button",

  props: {
    label: {
      type: String,
      default: "Button"
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "medium",
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      }
    },
    backgroundColor: {
      type: String
    },
    downloadable: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        "storybook-button": true,
        "storybook-button--primary": this.primary,
        "storybook-button--secondary": !this.primary,
        [`storybook-button--${this.size}`]: true
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  },

  methods: {
    onClick() {
      this.$emit("onClick");
      if (!!this.downloadable) {
        writeDataToFile("ExcelFile", "ExcelSheet1", [], "month");
      }
    }
  }
};
</script>
