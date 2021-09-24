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
    <!-- headers -->
    <template v-slot:header.empty="{ header }">
      <div class="d-flex align-center justify-end">
        <span v-if="['expand', 'download'].includes(header.value)">{{
          header.text
        }}</span>
      </div>
    </template>

    <!-- header's checkbox -->
    <template v-slot:header.data-table-select>
      <div class="data-table__checkbox" @click="checkAllBoxes()">
        <img
          v-if="selectAllBoxChecked"
          src="../stories/assets/icon_checkbox_checked.svg"
          height="20"
          width="20"
          style="cursor: pointer"
        />
        <img
          v-else
          src="../stories/assets/icon_checkbox_empty.svg"
          height="20"
          width="20"
          style="cursor: pointer"
        />
      </div>
    </template>

    <!-- item's checkbox -->
    <template v-slot:item.data-table-select="{ item }">
      <div class="data-table__checkbox" @click="checkThisBox(item)">
        <img
          :src="isCheckedItem(item) ? iconFilledCheckbox : iconEmptyCheckbox"
          height="20"
          width="20"
          style="cursor: pointer"
        />
      </div>
    </template>

    <!-- departments(employees) column -->
    <template v-slot:item.departments="{ item }">
      <div>
        {{ item.departments.map(dept => dept.department_name).join(", ") }}
      </div>
    </template>

    <!-- phone number(employees) column -->
    <template v-slot:item.phoneNumber="{ item }">
      <div>
        {{
          !item.phoneNumber.includes("-")
            ? formatPhoneNumber(item.phoneNumber)
            : item.phoneNumber
        }}
      </div>
    </template>

    <!-- face photo(employees) column -->
    <template v-slot:item.facePhoto="{ item }">
      <div v-if="!!item.face && item.face !== ''">
        <img
          src="../stories/assets/icon_face_photo_blue.svg"
          :style="!!item.face && item.face !== '' ? 'cursor: pointer' : ''"
          @click="clickPreviewFacePhoto(item.face)"
        />
      </div>
      <div v-else>
        <img
          src="../stories/assets/icon_face_photo_gray.svg"
          :style="!!item.face && item.face !== '' ? 'cursor: pointer' : ''"
          @click="clickPreviewFacePhoto(item.face)"
        />
      </div>
    </template>

    <!-- download column -->
    <template v-slot:item.download="{ item }">
      <img
        v-if="item.logs && item.logs.length"
        src="../stories/assets/icon_download_blue.svg"
        style="cursor: pointer"
        @click="clickDownload(item)"
      />
      <img v-else src="../stories/assets/icon_download_grey.svg" />
    </template>

    <!-- memberCount(department) column -->
    <template v-slot:item.count="{ item }">
      <div>
        {{ item.count + "명" }}
      </div>
    </template>

    <!-- expand slot -->
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length" class="commute-expand-table__container">
        <commute-expand-subtable :items="item.logs" />
      </td>
    </template>
  </v-data-table>
</template>

<script>
import { VDataTable } from "vuetify/lib";
import CommuteExpandSubtable from "./CommuteExpandSubtable";

export default {
  name: "ExpandTable",
  components: {
    VDataTable,
    CommuteExpandSubtable
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
    isCheckedItem(item) {
      // if (this.type === 'employee') {
      //   return !!this.selectedEmployeeIdMap[item.id]
      // }
      // return !!this.selectedDepartmentIdMap[item.id]
      return false;
    },
    checkThisBox(item) {
      // this.$store.dispatch(`select${this.$route.name}`, item.id)
      console.debug("checkThisBox ", item);
    },
    checkAllBoxes() {
      // if (!this.selectAllBoxChecked) {
      //   for (let i = 0; i < this.tableData.length; i += 1) {
      //     if (!this.selectedItems.includes(Number(this.tableData[i].id))) {
      //       this.$store.dispatch(`select${this.$route.name}`, this.tableData[i].id)
      //     }
      //   }
      // } else {
      //   this.$store.commit(`clearCheck${this.$route.name}`)
      // }
      console.debug("checkAllBoxes");
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
