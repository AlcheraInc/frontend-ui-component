<template>
  <v-select
    :color="color"
    :dense="dense"
    :item-color="itemColor"
    :items="filteredItems"
    :item-text="itemText"
    :item-value="itemValue"
    :label="label"
    :load-first-item="loadFirstItem"
    :menu-props="menuProps"
    :multiple="multiple"
    :noDataText="noDataText"
    :outlined="outlined"
    :prepend-inner-icon="prependInnerIcon"
    :search-option="searchOption"
    :show-all-option="showAllOption"
    :item-icon-color="itemIconColor"
    :item-icon-selected="itemIconSelected"
    :item-icon-unselected="itemIconUnselected"
    v-model="selectedItem"
    @change="emitChange()"
  >
    <template v-slot:prepend-item>
      <!-- show all option -->
      <v-list-item v-if="showAllOption" ripple @click="deselectAll()">
        <v-list-item-content>
          <v-list-item-title style="text-align: center"
            >Show All</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <!-- search option -->
      <SearchTextField
        v-if="searchOption"
        class="search-text-field"
        :outlined="false"
        placeholder="Search"
        :value.sync="search"
        @search-input="search = $event"
      />
    </template>
    <template v-slot:item="{ item }">
      <div v-if="!multiple">
        <v-icon v-if="!!itemIconSelected && !!itemIconUnselected">{{
          item.value === selectedItem ? itemIconSelected : itemIconUnselected
        }}</v-icon>
        {{ item.text }}
      </div>
      <v-list-item v-else ripple @click="selectItem(item)">
        <v-list-item-action>
          <v-icon
            v-if="!!itemIconSelected && !!itemIconUnselected"
            :color="selectedItemIndex(item) > -1 ? itemIconColor : ''"
            >{{
              selectedItemIndex(item) > -1
                ? itemIconSelected
                : itemIconUnselected
            }}</v-icon
          >
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-select>
</template>

<script>
import SearchTextField from "./Search";

export default {
  name: "BaseSelect",
  components: {
    SearchTextField
  },
  props: {
    color: {
      type: String,
      required: false
    },
    dense: {
      type: Boolean,
      required: false
    },
    itemColor: {
      type: String,
      required: false
    },
    itemIconColor: {
      type: String,
      required: false,
      default: ""
    },
    itemIconSelected: {
      type: String,
      required: false
    },
    itemIconUnselected: {
      type: String,
      required: false
    },
    items: {
      type: Array,
      required: true
    },
    itemText: {
      type: String,
      required: false
    },
    itemValue: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    },
    loadFirstItem: {
      type: Boolean,
      required: false,
      default: false
    },
    menuProps: {
      type: Object,
      required: false
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    noDataText: {
      type: String,
      required: false,
      default: "No data found."
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false
    },
    prependInnerIcon: {
      type: String,
      required: false
    },
    showAllOption: {
      type: Boolean,
      required: false,
      default: false
    },
    searchOption: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => {
    return {
      search: "",
      selectedItem: []
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        (item.text || item)
          .toString()
          .toLowerCase()
          .includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    deselectAll() {
      this.selectedItem = [];
      this.emitChange();
    },
    initFirstItem() {
      this.selectedItem = this.items[0].value;
    },
    selectedItemIndex(item) {
      return this.selectedItem.indexOf(item);
    },
    selectItem(item) {
      const index = this.selectedItemIndex(item);
      index > -1
        ? this.selectedItem.splice(index, 1)
        : this.selectedItem.splice(this.selectedItem.length, 0, item);
      this.selectedItem.sort((a, b) => a - b);
      this.emitChange();
    },
    emitChange() {
      this.$emit("change-base-select", this.selectedItem);
    }
  },
  mounted() {
    if (this.loadFirstItem) {
      this.initFirstItem();
    }
  }
};
</script>

<style scoped>
.search-text-field {
  overflow: hidden;
  padding: 6px 16px 0;
  background-color: #f5f6fb;
}
</style>
