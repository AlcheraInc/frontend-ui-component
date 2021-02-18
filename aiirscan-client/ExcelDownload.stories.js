import ExcelButton from "./ExcelButton.vue";

export default {
  title: "aiirscan-client/Excel File",
  component: ExcelButton,
  argTypes: {
    logType: { control: { type: "select", options: ["day", "month"] } },
    logData: {
      description: 'This feature has more to do with the download functionality than the button component itself',
      control: {
        type: "object",
        options: {
          timestamp: '',
          mode: '',
          name: '',
          employeeNumber: '',
          department: [],
          company: '',
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

export const DownloadDayLog = Template.bind({});
DownloadDayLog.args = {
  label: "Day Log File",
  disabled: false,
  downloadable: true,
  logType: 'day',
  logData: [
    {
      timestamp: '2020/02/18 16:02:11',
      mode: '입장',
      name: 'Tom',
      employeeNumber: 'AL292929',
      department: ['Client Team'],
      company: 'Alchera',
    },
    {
      timestamp: '2020/02/18 16:03:25',
      mode: '입장',
      name: 'Jane',
      employeeNumber: 'AL292944',
      department: ['Client Team'],
      company: 'Alchera',
    },
  ],
  fileName: 'ExcelFileName',
  sheetNameList: ['Sheet1'],
};

export const DownloadMonthLog = Template.bind({});
DownloadMonthLog.args = {
  label: "Month Log File",
  disabled: false,
  downloadable: true,
  logType: 'month',
  logData: [
    {
      name: 'Tom',
      employeeNumber: 'AL292929',
      department: ['Client Team'],
      email: 'tom@alcherainc.com',
      phoneNumber: '010-1010-2828',
      logs: [
        {
          date_time: '2021-02-02T07:23:04Z', //해당 날
          in_time: '2020-02-02T03:12:07Z', //해당 날 입장시각
          out_time: '2020-02-02T07:12:07Z', //해당 날 퇴장시각
        }
      ]
    },
    {
      name: 'Jane',
      employeeNumber: 'AL292944',
      department: ['Client Team'],
      email: 'tom@alcherainc.com',
      phoneNumber: '010-1010-2828',
      logs: [
        {
          date_time: '2021-02-03T06:10:11Z', //해당 날
          in_time: '2020-02-03T06:10:11Z', //해당 날 입장시각
          out_time: '', //해당 날 퇴장시각
        }
      ]
    },
  ],
  fileName: 'ExcelFileName',
  sheetNameList: ['Tom', 'Jane'],
};
