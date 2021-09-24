import BaseTabs from "./BaseTabs.vue";
import Vue from "vue";

export default {
  title: "basics/Tabs",
  parameters: {
    docs: {
      description: {
        component:
          "Interactable buttons to conditionally show/hide discrete content"
      }
    },
    actions: {
      handles: ["change-tabs"]
    }
  },
  component: BaseTabs,
  argTypes: {
    backgroundColor: {
      description: "background color of tabs",
      control: {
        type: "color"
      }
    },
    items: {
      description: "list of tabs",
      control: {
        type: "object"
      }
    },
    selectedTabTextColor: {
      description: "text color of tabs",
      control: {
        type: "color"
      }
    },
    sliderColor: {
      description: "color of slider",
      control: {
        type: "color"
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseTabs },
  template: '<v-app><BaseTabs v-bind="$props" /></v-app>'
});

export const Tabs = Template.bind({});
Tabs.args = {
  backgroundColor: "#377bf4",
  items: ["Tab 1", "Tab 2", "Tab 3"]
};
