import CompanyForm from "./CompanyForm.vue";
import Vue from "vue";

export default {
  title: "composite/Company Form",
  parameters: {
    docs: {
      description: {
        component: "composite form that allows users to add/edit company info"
      }
    }
  },
  component: CompanyForm,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CompanyForm },
  template: '<v-app><CompanyForm v-bind="$props" /></v-app>'
});

export const Example = Template.bind({});
Example.args = {};
