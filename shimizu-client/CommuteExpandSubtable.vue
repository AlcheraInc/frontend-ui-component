<template>
  <v-data-table
    :headers="headers"
    :items="sortedItems"
    :items-per-page="10000"
    :item-key="'id'"
    hide-default-footer
    class="commute-expand-table"
    no-data-text="데이터가 없습니다."
  >
    <!-- start text column -->
    <template v-slot:item.start_mode="{ item }">
      <div>{{ !!item.in_time ? '입장' : '' }}</div>
    </template>

    <!-- end text column -->
    <template v-slot:item.end_mode="{ item }">
      <div>{{ !!item.out_time ? '퇴장' : '' }}</div>
    </template>
  </v-data-table>
</template>

<script>
import moment from 'moment'

export default {
  name: 'CommuteExpandSubtable',
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      headers: [
        {
          text: '확인 시각',
          value: 'in_time',
          align: 'start',
          sortable: false,
          width: '30%',
        },
        {
          text: '구분',
          value: 'start_mode',
          align: 'center',
          sortable: false,
          width: '20%',
        },
        {
          text: '확인 시각',
          value: 'out_time',
          align: 'center',
          sortable: false,
          width: '30%',
        },
        {
          text: '구분',
          value: 'end_mode',
          align: 'center',
          sortable: false,
          width: '20%',
        },
      ],
    }
  },
  computed: {
    sortedItems() {
      if (this.items.length < 1) {
        return []
      }
      let result = []
      for (let i = 0; i < this.items.length; i += 1) {
        result.push({
          date_time: this.items[i].date_time,
          in_time: !!this.items[i].in_time
            ? moment(this.items[i].in_time, 'YYYY-MM-DDTHH:mm:ssZ').format(
                'YYYY.MM.DD HH:mm:ss'
              )
            : '',
          out_time: !!this.items[i].out_time
            ? moment(this.items[i].out_time, 'YYYY-MM-DDTHH:mm:ssZ').format(
                'YYYY.MM.DD HH:mm:ss'
              )
            : '',
        })
      }
      return result.sort(
        (a, b) =>
          new Date(b.date_time).getTime() - new Date(a.date_time).getTime()
      )
    },
  },
}
</script>

<style scoped>
.commute-expand-table {
  border: 1px solid #d7dae2;
}
</style>
