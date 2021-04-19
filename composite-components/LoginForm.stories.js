import LoginForm from "./LoginForm.vue";
import Vue from "vue";

export default {
  title: "composite/Login Form",
  parameters: {
    docs: {
      description: {
        component: "composite component that allows users to log in"
      }
    }
  },
  component: LoginForm,
  argTypes: {
    loading: {
      description: "changes the submit button to show loading icon",
      control: {
        type: "boolean"
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LoginForm },
  template: '<v-app><LoginForm v-bind="$props" /></v-app>'
});

export const Example = Template.bind({});
Example.args = {
  loading: false
};
