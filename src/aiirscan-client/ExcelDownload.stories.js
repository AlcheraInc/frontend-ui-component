import ExcelButton from "./ExcelButton.vue";

export default {
  title: "aiirscan-client/Excel File Download",
  parameters: {
    docs: {
      description: {
        component:
          "Button component to enable download of log data via Microsoft Excel File"
      }
    }
  },
  component: ExcelButton,
  argTypes: {
    label: {
      description: "Text value for button label",
      control: {
        type: "string",
        table: {
          category: "Button Settings"
        }
      }
    },
    disabled: {
      description: "Flag to determine if button is disabled or not",
      control: {
        type: "boolean",
        table: {
          category: "Button Settings"
        }
      }
    },
    logType: {
      description: "Flag to determine type of log file generated",
      control: {
        type: "select",
        options: ["day", "month"],
        table: {
          category: "Data Settings"
        }
      }
    },
    logData: {
      description:
        'Log data values to show in excel file<br><br><p>**For Day Log:**</p><br><h3>Object Keys:</h3><br><p>**timestamp**<br>Type: String<br>Format: YYYY/MM/DD HH:mm:ss</p><br><p>**mode**<br>Type: String<br>Options: *입장* OR *퇴장*</p><br><p>**name**<br>Type: String<br>Example: *Bob*</p><br><p>**employeeNumber**<br>Type: String<br>Example: *AL123456*</p><br><p>**department**<br>Type: Array<br>Example: [*Dept A*, *Dept B*]</p><br><p>**company**<br>Type: String<br>Example: *Alchera*</p><br><br><p>**For Month Log:**</p><h4>*Array length should match with that of sheetNameList</h4><br><h3>Object Keys:</h3><br><p>**name**<br>Type: String<br>Example: *Bob*</p><br><p>**employeeNumber**<br>Type: String<br>Example: *AL123456*</p><br><p>**department**<br>Type: Array of Strings<br>Example: [*Dept A*, *Dept B*]</p><br><p>**email**<br>Type: String<br>Example: *bob@alcherainc.com*</p><br><p>**phoneNumber**<br>Type: String<br>Example: *010-1234-5678*</p><br><p>**logs**<br>Type: Array of Objects<br>Example:<br> ```{```<br>```date_time: "2021-02-02T07:23:04Z",``` ```in_time: "2020-02-10T03:12:07Z",```  ```out_time: "2020-02-10T07:12:07Z"```<br>```}```</p>',
      control: {
        type: "object",
        options: {
          timestamp: "",
          mode: "",
          name: "",
          employeeNumber: "",
          department: [],
          company: ""
        },
        table: {
          category: "Data Settings"
        }
      }
    },
    fileName: {
      description: "Name of file to be downloaded",
      control: {
        type: "string",
        table: {
          category: "Data Settings"
        }
      }
    },
    sheetNameList: {
      description:
        "File sheet(s) name list<br><br><p>**For Day Log:**<br>Only 1 sheet is needed<br>Type: String OR Single-item(String) Array</p><br><p>**For Month Log:**<br>Type: Array of Strings<br><h4>*Length of array should match with that of logData</h4></p>",
      control: {
        table: {
          category: "Data Settings"
        }
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ExcelButton },
  template: '<excel-button v-bind="$props" />'
});

export const DayLog = Template.bind({});
DayLog.args = {
  label: "Day Log File",
  disabled: false,
  logType: "day",
  logData: [
    {
      timestamp: "2020/02/18 16:02:11",
      mode: "입장",
      name: "Tom",
      employeeNumber: "AL292929",
      department: ["Client Team"],
      company: "Alchera"
    },
    {
      timestamp: "2020/02/18 16:03:25",
      mode: "입장",
      name: "Jane",
      employeeNumber: "AL292944",
      department: ["Client Team"],
      company: "Alchera"
    }
  ],
  fileName: "ExcelFileName",
  sheetNameList: ["Sheet1"]
};

export const MonthLog = Template.bind({});
MonthLog.args = {
  label: "Month Log File",
  disabled: false,
  logType: "month",
  logData: [
    {
      name: "Tom",
      employeeNumber: "AL292929",
      department: ["Client Team"],
      email: "tom@alcherainc.com",
      phoneNumber: "010-1010-2828",
      logs: [
        {
          date_time: "2021-02-02T07:23:04Z", //해당 날
          in_time: "2020-02-02T03:12:07Z", //해당 날 입장시각
          out_time: "2020-02-02T07:12:07Z" //해당 날 퇴장시각
        }
      ]
    },
    {
      name: "Jane",
      employeeNumber: "AL292944",
      department: ["Client Team"],
      email: "tom@alcherainc.com",
      phoneNumber: "010-1010-2828",
      logs: [
        {
          date_time: "2021-02-03T06:10:11Z", //해당 날
          in_time: "2020-02-03T06:10:11Z", //해당 날 입장시각
          out_time: "" //해당 날 퇴장시각
        }
      ]
    }
  ],
  fileName: "ExcelFileName",
  sheetNameList: ["Tom", "Jane"]
};
