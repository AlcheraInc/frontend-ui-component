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
        type: "select",
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
        type: "select",
        options: [
          "login",
          "select-mobile",
          "delete-mobile",
          "default",
          "danger",
          "primary",
          "solid"
        ]
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
        type: "select",
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

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  color: "#d8d9da",
  height: "40px",
  // prebuiltStyle: "default",
  text: "Button",
  textColor: "#43425d",
  width: "120px"
};

export const ButtonDanger = Template.bind({});
ButtonDanger.args = {
  color: "#ff6a6a",
  height: "40px",
  // prebuiltStyle: "danger",
  text: "Button",
  width: "120px"
};

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  color: "#3b77ff",
  height: "40px",
  // prebuiltStyle: "primary",
  text: "Button",
  width: "120px"
};

export const ButtonSolid = Template.bind({});
ButtonSolid.args = {
  color: "#3a7bc6",
  height: "40px",
  // prebuiltStyle: "solid",
  text: "Button",
  width: "120px"
};

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
  depressed: true,
  height: "32px",
  rounded: true,
  text: "추가",
  // vIconName: "add",
  width: "80px"
};
