import BaseTextarea from "./BaseTextarea.vue";
import Vue from "vue";

export default {
  title: "basics/Textarea",
  parameters: {
    docs: {
      description: {
        component: "Input field with lines and expandable size"
      }
    }
  },
  component: BaseTextarea,
  argTypes: {
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
    color: {
      description: "color of component",
      control: {
        type: "color"
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
    readonly: {
      description: "prevents user input but not in disabled state",
      control: {
        type: "boolean"
      }
    },
    rounded: {
      description: "gives component borders a rounded style",
      control: {
        type: "boolean"
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

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseTextarea },
  template: '<v-app><BaseTextarea v-bind="$props" /></v-app>'
});

export const Basic = Template.bind({});
Basic.args = {
  autofocus: true,
  color: "#1976d2",
  placeholder: "Enter input here",
  rules: [requiredInput]
};
