import Calendar from "./Calendar.vue";

export default {
  title: "aiirscan-client/Calendar",
  component: Calendar,
  argTypes: { update: { action: "update" } }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Calendar },
  template: '<Calendar @update="update"/>'
});

export const Default = Template.bind({});
