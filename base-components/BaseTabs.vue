<template>
  <v-tabs v-model="tabModel" :color="backgroundColor" dark show-arrows @change="onChangeTabs($event)">
    <v-tabs-slider :color="sliderColor" />
    <v-tab v-for="(tab, tIndex) in items" :key="tab + tIndex.toString()">{{ tab }}</v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'BaseTabs',
  props: {
    items: {
      type: Array,
      required: true,
    },
    sliderColor: {
      type: String,
      required: false,
      default: 'white',
    },
  },
  data: () => {
    return {
      tabModel: '',
    }
  },
  methods: {
    onChangeTabs(evt) {
      console.debug('BaseTabs#onChangeTabs', evt)
    },
  },
}
</script>
