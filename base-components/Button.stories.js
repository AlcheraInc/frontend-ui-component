import ButtonWrapper from "./ButtonWrapper.vue";
import Vue from "vue";
import vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(vuetify);

export default {
  title: "basics/Button",
  parameters: {
    docs: {
      description: {
        component: "Clickable button to execute a logical action"
      }
    }
  },
  component: ButtonWrapper,
  argTypes: {
    color: {
      description: "Color of button",
      control: {
        type: "color"
      }
    },
    depressed: {
      description: "Shadow effect",
      control: {
        type: "boolean"
      }
    },
    disabled: {
      description: "Show as disabled and prevent user interaction",
      control: {
        type: "boolean"
      }
    },
    height: {
      description: "height of button",
      control: {
        type: "number"
      }
    },
    imgSrc: {
      description: '"src" attribute for icon slot when using asset file',
      control: {
        type: "radio",
        options: [
          require("../stories/assets/icon_magnify_grey.svg"),
          require("../stories/assets/icon_pencil_blue.svg"),
          require("../stories/assets/icon_pencil_grey.svg"),
          require("../stories/assets/icon_plus_white.svg"),
          require("../stories/assets/icon_trash_red.svg"),
          require("../stories/assets/icon_trash_grey.svg"),
          require("../stories/assets/icon_upload_white.svg")
        ]
      }
    },
    outlined: {
      description: "Outlined effect",
      control: {
        type: "boolean"
      }
    },
    prebuiltStyle: {
      description:
        "Preset button settings to be set by developer for code reuse.<br>Editable in ButtonWrapper.vue.",
      control: {
        type: "radio",
        options: ["login", "select-mobile", "delete-mobile"]
      }
    },
    rounded: {
      description: "Rounded effect",
      control: {
        type: "boolean"
      }
    },
    text: {
      description: "Text inside button",
      control: {
        type: "text"
      }
    },
    textColor: {
      description: "Color of button text",
      control: {
        type: "color"
      }
    },
    textSize: {
      description: "Text size of button text",
      control: {
        type: "text"
      }
    },
    type: {
      description: "type of button",
      control: {
        type: "radio",
        options: ["button", "reset", "submit"]
      }
    },
    vIconName: {
      description: "Material Design Icons' button icon name",
      control: {
        type: "text"
      }
    },
    width: {
      description: "Width of button",
      control: {
        type: "number"
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonWrapper },
  template: '<ButtonWrapper v-bind="$props" />'
});

export const DesktopButton = Template.bind({});
DesktopButton.args = {
  color: "#3774ff",
  imgSrc: require("../stories/assets/icon_pencil_blue.svg"),
  outlined: true,
  text: "수정하기",
  textColor: "#3774ff"
};

export const MobileButton = Template.bind({});
MobileButton.args = {
  height: "32px",
  rounded: true,
  text: "추가",
  // vIconName: "add",
  width: "80px"
};
