<template>
  <v-menu
    ref="datePickerRef"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="formattedDateValue"
        :color="color"
        :disabled="disabled"
        readonly
        v-bind="attrs"
        v-on="on"
      >
        <template v-slot:append>
          <v-icon>date_range</v-icon>
        </template>
      </v-text-field>
    </template>
    <v-date-picker
      :value="selectedDate"
      :color="color"
      :disabled-date-picker="disabledDatePicker"
      :locale="locale"
      :type="type"
      @input="chooseDate($event)"
    />
  </v-menu>
</template>

<script>
import moment from "moment";

export default {
  name: "BaseDatePicker",
  props: {
    color: {
      type: String,
      required: false,
      default: "#406eff"
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    disabledDatePicker: {
      type: Boolean,
      required: false,
      default: false
    },
    dateFormat: {
      type: String,
      required: false,
      default: "YYYY-MM-DD"
    },
    locale: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "date"
    }
  },
  data: () => {
    return {
      menu: false,
      selectedDate: new Date().toISOString().substr(0, 10)
    };
  },
  computed: {
    formattedDateValue() {
      return this.selectedDate
        ? moment(this.selectedDate).format(this.dateFormat)
        : "";
    }
  },
  methods: {
    chooseDate(val) {
      this.selectedDate = val;
      this.menu = false;
    }
  }
};
</script>

<style scoped></style>
