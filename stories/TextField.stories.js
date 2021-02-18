import Vue from "vue";
import Vuetify from "vuetify";
import TextField from "./TextField";
import { VTextField } from "vuetify/lib";

Vue.use(Vuetify);

export default {
  title: "Text Field",
  component: TextField
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextField },
  template: '<text-field v-bind="$props" />'
});

export const Outlined = Template.bind({});
Outlined.args = {
  isOutlined: true
};
