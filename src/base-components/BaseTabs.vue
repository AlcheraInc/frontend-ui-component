<template>
  <v-tabs
    v-model="tabModel"
    :background-color="backgroundColor"
    :color="selectedTabTextColor"
    dark
    show-arrows
    @change="onChangeTabs($event)"
  >
    <v-tabs-slider :color="sliderColor" />
    <v-tab v-for="(tab, tIndex) in items" :key="tab + tIndex.toString()">{{
      tab
    }}</v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "BaseTabs",
  props: {
    backgroundColor: {
      type: String,
      required: false,
      default: "primary"
    },
    items: {
      type: Array,
      required: true
    },
    selectedTabTextColor: {
      type: String,
      required: false,
      default: "white"
    },
    sliderColor: {
      type: String,
      required: false,
      default: "white"
    }
  },
  data: () => {
    return {
      tabModel: ""
    };
  },
  methods: {
    onChangeTabs(evt) {
      console.debug("BaseTabs#onChangeTabs", evt);
      this.$emit("change-tabs", evt);
    }
  }
};
</script>
