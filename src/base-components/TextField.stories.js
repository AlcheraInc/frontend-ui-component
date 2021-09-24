import BaseTextField from "./BaseTextField.vue";
import Vue from "vue";

export default {
  title: "basics/Text Field",
  parameters: {
    docs: {
      description: {
        component: "Input field to enter text characters with"
      }
    }
  },
  component: BaseTextField,
  argTypes: {
    color: {
      description: "color of component",
      control: {
        type: "color"
      }
    },
    autofocus: {
      description: "focus on component on first load",
      control: {
        type: "boolean"
      }
    },
    clearable: {
      description: "adds input clear functionality",
      control: {
        type: "boolean"
      }
    },
    dense: {
      description: "dense style",
      control: {
        type: "boolean"
      }
    },
    disabled: {
      description: "disables user interaction with component",
      control: {
        type: "boolean"
      }
    },
    height: {
      description: "set height of component",
      control: {
        type: "number"
      }
    },
    label: {
      description: "label text value",
      control: {
        type: "text"
      }
    },
    outlined: {
      description: "outlined style",
      control: {
        type: "boolean"
      }
    },
    placeholder: {
      description: "placeholder text value",
      control: {
        type: "text"
      }
    },
    prependInnerIcon: {
      description: "name of icon in prepend-inner slot",
      control: {
        type: "text"
      }
    },
    rules: {
      description:
        "Accepts an array of functions that take an input value as an argument and return either true/false or a string with an error message",
      control: {
        type: "object"
      }
    },
    type: {
      description: "sets input type",
      control: {
        type: "select",
        options: [
          "button",
          "checkbox",
          "color",
          "date",
          "datetime-local",
          "email",
          "file",
          "hidden",
          "image",
          "month",
          "number",
          "password",
          "radio",
          "range",
          "reset",
          "reset",
          "search",
          "submit",
          "tel",
          "text",
          "time",
          "url",
          "week"
        ]
      }
    },
    width: {
      description: "sets width of component",
      control: {
        type: "number"
      }
    }
  }
};

const requiredInput = function(val) {
  return val.length < 1 ? "Error" : "";
};

const requiredID = function(val) {
  return val.length < 1 ? "아이디를 입력해 주세요." : "";
};

const requiredPW = function(val) {
  return val.length < 1 ? "비밀번호를 입력해 주세요." : "";
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseTextField },
  template: '<v-app><BaseTextField v-bind="$props" /></v-app>'
});

export const Basic = Template.bind({});
Basic.args = {
  autofocus: true,
  color: "#1976d2",
  placeholder: "Label",
  rules: [requiredInput],
  type: "text"
};

export const Username = Template.bind({});
Username.args = {
  autofocus: true,
  color: "#000000",
  placeholder: "아이디",
  rules: [requiredID],
  type: "text"
};

export const Password = Template.bind({});
Password.args = {
  color: "#000000",
  placeholder: "비밀번호",
  rules: [requiredPW],
  type: "password"
};

export const Search = Template.bind({});
Search.args = {
  color: "#000000",
  dense: true,
  placeholder: "Search",
  prependInnerIcon: "search",
  type: "text"
};
