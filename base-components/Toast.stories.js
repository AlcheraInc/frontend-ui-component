import BaseToast from "./BaseToast.vue";
import Vue from "vue";

export default {
  title: "basics/Toast",
  parameters: {
    docs: {
      description: {
        component: "notification component to alert user of action or error"
      }
    }
  },
  component: BaseToast,
  argTypes: {
    color: {
      description: "color of component",
      control: {
        type: "color"
      }
    },
    tall: {
      description: "if true, height set to 80px; if false, height set to 60px",
      control: {
        type: "boolean"
      }
    },
    text: {
      description: "main text to be displayed in component",
      control: {
        type: "text"
      }
    },
    timeout: {
      description: "duration of showing component until closed or timed out",
      control: {
        type: "number"
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseToast },
  template:
    '<v-app><div><v-btn @click="$refs.toast.show = true">Show Toast</v-btn><BaseToast v-bind="$props" ref="toast" /></div></v-app>'
});

export const MobileSuccess = Template.bind({});
MobileSuccess.args = {
  color: "#34c759",
  tall: false,
  text: "Toast message",
  timeout: 6000
};

export const MobileFail = Template.bind({});
MobileFail.args = {
  color: "#ff6a6a",
  tall: false,
  text: "Toast message",
  timeout: 6000
};

export const WebSuccess = Template.bind({});
WebSuccess.args = {
  color: "#34c759",
  tall: false,
  text: "Toast message",
  timeout: 6000
};

export const WebFail = Template.bind({});
WebFail.args = {
  color: "#ff6a6a",
  tall: false,
  text: "Toast message",
  timeout: 6000
};
