<template>
  <v-data-table
    :headers="getHeaders"
    :items="tableData"
    :items-per-page="10000"
    :show-select="['employee', 'department'].includes(type)"
    :expanded.sync="expanded"
    multi-sort
    item-key="id"
    :show-expand="type === 'viewentry'"
    hide-default-footer
    class="commute-expand-table"
    no-data-text="데이터가 없습니다."
    @item-selected="handleItemSelect($event)"
  >
  </v-data-table>
</template>

<script>
import { VDataTable } from "vuetify/lib";
// import ExpandSubtable from './CommuteExpandSubtable'

export default {
  name: "ExpandTable",
  components: {
    VDataTable
    // ExpandSubtable,
  },
  props: {
    type: {
      type: String,
      required: true
    },
    tableData: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      iconHasFacePhoto: require("@/assets/icon_face_photo_blue.svg"),
      iconNoFacePhoto: require("@/assets/icon_face_photo_gray.svg"),
      iconEmptyCheckbox: require("@/assets/icon_checkbox_empty.svg"),
      iconFilledCheckbox: require("@/assets/icon_checkbox_checked.svg"),
      selectAllBoxChecked: false,
      expanded: [],
      realtimeHeaders: [
        {
          text: "출입 일시",
          value: "timestamp",
          align: "start",
          sortable: true,
          width: "20%"
        },
        {
          text: "출입 모드",
          value: "mode",
          align: "center",
          sortable: true,
          width: "20%"
        },
        {
          text: "이름",
          value: "name",
          align: "center",
          sortable: true,
          width: "15%"
        },
        {
          text: "사번",
          value: "employeeNumber",
          align: "center",
          sortable: true,
          width: "15%"
        },
        {
          text: "부서",
          value: "department",
          align: "center",
          sortable: true,
          width: "15%"
        },
        {
          text: "구분",
          value: "company",
          align: "center",
          sortable: true,
          width: "15%"
        }
      ],
      viewentryHeaders: [
        {
          text: "이름",
          value: "name",
          align: "start",
          sortable: true,
          width: "15%"
        },
        {
          text: "사번",
          value: "employeeNumber",
          align: "center",
          sortable: true,
          width: "15%"
        },
        {
          text: "부서",
          value: "departments",
          align: "center",
          sortable: true,
          width: "15%"
        },
        {
          text: "이메일",
          value: "email",
          align: "center",
          sortable: true,
          width: "15%"
        },
        {
          text: "연락처",
          value: "phoneNumber",
          align: "center",
          sortable: true,
          width: "15%"
        },
        {
          text: "다운로드",
          value: "download",
          align: "center",
          sortable: false,
          width: "15%"
        },
        {
          text: "",
          value: "data-table-expand",
          align: "center",
          sortable: false,
          width: "10%"
        }
      ],
      employeeHeaders: [
        {
          text: "이름",
          value: "name",
          align: "start",
          sortable: true,
          width: "15%"
        },
        {
          text: "사번",
          value: "employeeNumber",
          align: "center",
          sortable: true,
          width: "15%"
        },
        {
          text: "부서",
          value: "departments",
          align: "center",
          sortable: true,
          width: "15%"
        },
        {
          text: "이메일",
          value: "email",
          align: "center",
          sortable: true,
          width: "25%"
        },
        {
          text: "연락처",
          value: "phoneNumber",
          align: "center",
          sortable: true,
          width: "20%"
        },
        {
          text: "사진등록",
          value: "facePhoto",
          align: "center",
          sortable: false,
          width: "10%"
        }
      ],
      departmentHeaders: [
        {
          text: "부서",
          value: "name",
          align: "start",
          sortable: true,
          width: "50%"
        },
        {
          text: "인원",
          value: "count",
          align: "center",
          sortable: true,
          width: "50%"
        }
      ]
    };
  },
  computed: {
    getHeaders() {
      switch (this.type) {
        case "realtime":
          return this.realtimeHeaders;
        case "viewentry":
          return this.viewentryHeaders;
        case "employee":
          return this.employeeHeaders;
        case "department":
          return this.departmentHeaders;
        default:
          return [];
      }
    }
  },
  methods: {
    formatPhoneNumber(val) {
      switch (val.length) {
        case 8:
          return val.substring(0, 4) + "-" + val.substring(4, 8);
        case 9:
          return (
            val.substring(0, 2) +
            "-" +
            val.substring(2, 6) +
            "-" +
            val.substring(6, 9)
          );
        case 10:
          return (
            val.substring(0, 3) +
            "-" +
            val.substring(3, 6) +
            "-" +
            val.substring(6, 10)
          );
        case 11:
          return (
            val.substring(0, 3) +
            "-" +
            val.substring(3, 7) +
            "-" +
            val.substring(7, 11)
          );
        case 12:
          return (
            val.substring(0, 4) +
            "-" +
            val.substring(4, 8) +
            "-" +
            val.substring(8, 12)
          );
        default:
          return val;
      }
    },
    clickPreviewFacePhoto(face) {
      this.$emit("preview-face", { face });
    },
    clickDownload(item) {
      this.$emit("commute-expand-table", item);
    },
    checkThisBox(item) {
      // if (this.$route.name === "Employee") {
      //   this.$store.commit("checkEmployee", item.id);
      // } else if (this.$route.name === "Department") {
      //   this.$store.commit("checkDepartment", item.id);
      // }
      // this.checkCheckAllBoxes();
    },
    checkCheckAllBoxes() {
      // if (this.isCheckAllBoxes()) {
      //   this.selectAllBoxChecked = true;
      // } else {
      //   this.selectAllBoxChecked = false;
      // }
    },
    isCheckAllBoxes() {
      // let checkedList = this.tableData.filter(c => c.isChecked);
      // return this.tableData.length
      //   ? this.tableData.length === checkedList.length
      //   : false;
      return false;
    },
    checkAllBoxes() {
      // for (let i = 0; i < this.tableData.length; i += 1) {
      //   if (this.selectAllBoxChecked && this.tableData[i].isChecked) {
      //     if (this.$route.name === "Employee") {
      //       this.$store.commit("checkEmployee", this.tableData[i].id);
      //     } else if (this.$route.name === "Department") {
      //       this.$store.commit("checkDepartment", this.tableData[i].id);
      //     }
      //   } else if (!this.selectAllBoxChecked && !this.tableData[i].isChecked) {
      //     if (this.$route.name === "Employee") {
      //       this.$store.commit("checkEmployee", this.tableData[i].id);
      //     } else if (this.$route.name === "Department") {
      //       this.$store.commit("checkDepartment", this.tableData[i].id);
      //     }
      //   }
      // }
      // this.selectAllBoxChecked = !this.selectAllBoxChecked;
    }
  }
};
</script>

<style scoped>
.commute-expand-table {
  border: 1px solid #d7dae2;
}

.commute-expand-table__container {
  padding-left: 80px !important;
  padding-right: 0px !important;
}

.commute-expand-table__student-name {
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: 1px solid #484e60;
}
.data-table__checkbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
