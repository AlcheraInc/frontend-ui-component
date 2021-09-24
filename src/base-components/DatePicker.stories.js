import BaseDatePicker from "./BaseDatePicker.vue";
import Vue from "vue";

export default {
  title: "basics/Date Picker",
  parameters: {
    docs: {
      description: {
        component:
          "composite component comprised of menu, text field, and date picker"
      }
    }
  },
  component: BaseDatePicker,
  argTypes: {
    color: {
      description: "color of date picker component",
      control: {
        type: "color"
      }
    },
    dateFormat: {
      description: "changes text field display value format",
      control: {
        type: "String"
      }
    },
    disabled: {
      description: "prevents user interaction with the text field component",
      control: {
        type: "boolean"
      }
    },
    disabledDatePicker: {
      description: "prevents user interaction with the date picker component",
      control: {
        type: "boolean"
      }
    },
    locale: {
      description: "changes date picker to match given locale value",
      control: {
        type: "text"
      }
    },
    type: {
      description: "changes date picker to month picker",
      control: {
        type: "select",
        options: ["date", "month"]
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseDatePicker },
  template: '<v-app><BaseDatePicker v-bind="$props" /></v-app>'
});

export const Example = Template.bind({});
Example.args = {};
