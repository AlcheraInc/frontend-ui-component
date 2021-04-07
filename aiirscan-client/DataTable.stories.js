import DataTable from "./DataTable.vue";
import Vue from "vue";

export default {
  title: "aiirscan-client/Expandable Data Table",
  parameters: {
    docs: {
      description: {
        component:
          "Expandable table component to show set(s) of data.<br>Data storage and selection logic should be tightly coupled with vuex store."
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
  tableData: [
    {
      id: "z8d78s8zd",
      timestamp: "2021/04/07 18:22:15",
      mode: "퇴장",
      name: "톰아스",
      employeeNumber: "AL654321",
      department: "Client Team",
      company: "Alchera"
    },
    {
      id: "8zllql429ag",
      timestamp: "2021/04/07 09:03:22",
      mode: "입장",
      name: "톰아스",
      employeeNumber: "AL654321",
      department: "Client Team",
      company: "Alchera"
    }
  ]
};

export const ViewEntryTable = Template.bind({});
ViewEntryTable.args = {
  type: "viewentry",
  tableData: [
    {
      id: "4m2k2nk0f21",
      name: "톰아스",
      employeeNumber: "AL654321",
      departments: [
        {
          id: 2842,
          department_name: "Client Team"
        }
      ],
      email: "tj.smith@alcherainc.com",
      phoneNumber: "010-1234-5757",
      logs: [
        {
          date_time: "2021-04-07T00:00:00Z",
          in_time: "2021-04-07T09:03:22Z",
          out_time: "2021-04-07T18:22:15Z"
        }
      ]
    }
  ]
};

export const EmployeeTable = Template.bind({});
EmployeeTable.args = {
  type: "employee",
  tableData: [
    {
      id: "d9sdf89ss89",
      name: "톰아스",
      employeeNumber: "AL654321",
      departments: [
        {
          id: 2842,
          department_name: "Client Team"
        }
      ],
      email: "tj.smith@alcherainc.com",
      phoneNumber: "010-1234-5757",
      facePhoto: ""
    }
  ]
};

export const DepartmentTable = Template.bind({});
DepartmentTable.args = {
  type: "department",
  tableData: [
    {
      id: "8sd9s8ds9s9",
      name: "Client Team",
      count: 1
    }
  ]
};
