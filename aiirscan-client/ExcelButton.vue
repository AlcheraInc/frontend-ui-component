<template>
  <v-btn class="storybook-excel-button" @click="onClick" :disabled="disabled">
    {{ label }}
  </v-btn>
</template>

<script>
import { VBtn } from "vuetify/lib";
import moment from 'moment';
import "./excelButton.css";
import {
  writeDataToFile,
  writeSheetData,
  download,
  createWorkbook
} from "../stories/ExcelService";

export default {
  name: "excel-button",
  components: { VBtn },
  props: {
    label: {
      type: String,
      default: "Button"
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    downloadable: {
      type: Boolean,
      default: false
    },
    logType: {
      type: String,
      default: 'day',
    },
    logData: {
      type: Array,
      default: () => [],
    },
    fileName: {
      type: String,
      default: '',
    },
    sheetNameList: {
      type: [Array, String],
      default: '',
    }
  },

  computed: {
    classes() {
      return {
        "storybook-button": true,
        "storybook-button--primary": this.primary,
        "storybook-button--secondary": !this.primary,
        [`storybook-button--${this.size}`]: true
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  },

  methods: {
    onClick() {
      // this.$emit("onClick");
      if (!!this.downloadable) {
        // logType: day OR month
        // sheetNameList: single
        if (typeof this.sheetNameList === 'string' || this.sheetNameList.length === 1) {
          const LOG_DATA = this.createFileDataStructure(this.logData, this.logType)
          const SINGLE_SHEET_NAME = typeof this.sheetNameList !== 'string' ? this.sheetNameList[0] : this.sheetNameList

          writeDataToFile(this.fileName, SINGLE_SHEET_NAME, LOG_DATA, this.logType);
        } else if (this.logType === 'month' && this.sheetNameList.length > 1) {
          // logType: month
          // sheetNameList: multiple
          createWorkbook()
          for (let i = 0; i < this.sheetNameList.length; i += 1) {
            const LOG_DATA = this.createFileDataStructure(this.logData[i], 'month')

            writeSheetData(this.fileName, this.sheetNameList[i], LOG_DATA, 'month');
          }
          download(this.fileName)
        }
      }
    },
    createFileDataStructure(data, logType) {
      let RESULT = []

      if (this.logType === 'day') {
        // push header text
        RESULT.push(['출입 일시', '출입 모드', '이름', '사번', '부서', '구분'])
        // push empty row
        RESULT.push(['', '', '', '', '', ''])
        // push data row values
        for (let i = 0; i < data.length; i += 1) {
          RESULT.push([
            data[i].timestamp,
            data[i].mode,
            data[i].name,
            data[i].employeeNumber,
            !!data[i].department && data[i].department.length ? data[i].department.join(', ') : '',
            data[i].company,
          ])
        }
      } else if (this.logType === 'month') {
        // push header text
        RESULT.push(['이름', '사번', '부서', '이메일', '연락처'])
        // push employee info
        RESULT.push([
          data.name,
          data.employeeNumber,
          !!data.department && data.department.length ? data.department.join(', ') : '',
          data.email,
          data.phoneNumber,
        ])
        // push empty row
        RESULT.push(['', '', '', '', ''])
        // push log header text
        RESULT.push(['', '확인 시각', '구분', '확인 시각', '구분'])
        // push data log row values
        for (let i = 0; i < data.logs.length; i += 1) {
          RESULT.push([
            '',
            !!data.logs[i].in_time && data.logs[i].in_time !== '' ? moment(data.logs[i].in_time, 'YYYY-MM-DDTHH:mm:ssZ').format('YYYY.MM.DD HH:mm:ss') : '',
            !!data.logs[i].in_time && data.logs[i].in_time !== '' ? '입장' : '',
            !!data.logs[i].out_time && data.logs[i].out_time !== '' ? moment(data.logs[i].out_time, 'YYYY-MM-DDTHH:mm:ssZ').format('YYYY.MM.DD HH:mm:ss') : '',
            !!data.logs[i].out_time && data.logs[i].out_time !== '' ? '퇴장' : '',
          ])
        }
      }
      return RESULT
    }
  }
};
</script>
