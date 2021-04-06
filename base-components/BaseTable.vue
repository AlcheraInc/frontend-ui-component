<template>
  <v-data-table
    :headers="headers"
    :hide-default-footer="hideFooter"
    :items="items"
    :item-key="itemKey"
    :multi-sort="multisort"
    :no-data-text="noDataText"
    :show-select="showSelect"
  />
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    hideFooter: {
      type: Boolean,
      required: false,
      default: false,
    },
    items: {
      type: Array,
      required: true,
    },
    itemKey: {
      type: String,
      required: true,
    },
    multisort: {
      type: Boolean,
      required: false,
      default: true,
    },
    noDataText: {
      type: String,
      required: false,
      default: 'No data found.',
    },
    showSelect: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
