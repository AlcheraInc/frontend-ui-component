import BaseAlert from "./BaseAlert.vue";
import Vue from "vue";

export default {
  title: "basics/Alert",
  parameters: {
    docs: {
      description: {
        component:
          "Notification component to display feedback of executed action"
      }
    }
  },
  component: BaseAlert,
  argTypes: {
    color: {
      description: "color of component",
      control: {
        type: "color"
      }
    },
    icon: {
      description: "name of icon inside left side of component",
      control: {
        type: "select",
        options: ["check_circle_outline", "error_outline"]
      }
    },
    text: {
      description: "main text to be displayed in component",
      control: {
        type: "text"
      }
    },
    textColor: {
      description:
        "color of main text inside component; default value is COLOR arg",
      control: {
        type: "color"
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseAlert },
  template: '<v-app><BaseAlert v-bind="$props" /></v-app>'
});

export const Info = Template.bind({});
Info.args = {
  color: "#8d90a2",
  text: "This is an info alert.",
  textColor: "#363636"
};

export const Success = Template.bind({});
Success.args = {
  color: "#34c759",
  icon: "check_circle_outline",
  text: "This is a success alert.",
  textColor: "#34c759"
};

export const Danger = Template.bind({});
Danger.args = {
  color: "#ff3b30",
  icon: "error_outline",
  text: "This is a danger alert.",
  textColor: "#ff3b30"
};
