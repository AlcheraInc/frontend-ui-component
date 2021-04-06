import DataTable from "./DataTable.vue";
import Vue from "vue";

export default {
  title: "aiirscan-client/Expandable Data Table",
  parameters: {
    docs: {
      description: {
        component: "Expandable table component to show set(s) of data"
      }
    }
  },
  component: DataTable,
  argTypes: {
    type: {
      description: "Flag to determine table content formatting",
      control: {
        type: "select",
        options: ["realtime", "viewentry", "employee", "department"]
      }
    },
    tableData: {
      description: "",
      control: {
        type: "object"
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DataTable },
  decorators: [
    () => ({ template: '<v-app style="padding: 2em"><story /></div>' })
  ],
  template: '<data-table v-bind="$props" />'
});

export const RealtimeTable = Template.bind({});
RealtimeTable.args = {
  type: "realtime",
  tableData: []
};

export const ViewEntryTable = Template.bind({});
ViewEntryTable.args = {
  type: "viewentry",
  tableData: []
};

export const EmployeeTable = Template.bind({});
EmployeeTable.args = {
  type: "employee",
  tableData: []
};

export const DepartmentTable = Template.bind({});
DepartmentTable.args = {
  type: "department",
  tableData: []
};
