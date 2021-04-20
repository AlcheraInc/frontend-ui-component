import BaseTimePicker from "./BaseTimePicker.vue";
import Vue from "vue";

export default {
  title: "basics/Time Picker",
  parameters: {
    docs: {
      description: {
        component: "text field component to select time value"
      }
    }
  },
  component: BaseTimePicker,
  argTypes: {
    color: {
      description: "color of time picker component",
      control: {
        type: "color"
      }
    },
    disabled: {
      description: "prevents user interaction with the text field component",
      control: {
        type: "boolean"
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseTimePicker },
  template: '<v-app><BaseTimePicker v-bind="$props" /></v-app>'
});

export const Example = Template.bind({});
Example.args = {};
