import BaseSelect from "./BaseSelect.vue";
import Vue from "vue";

export default {
  title: "basics/Select",
  parameters: {
    docs: {
      description: {
        component: "List of options for user to select from"
      }
    }
  },
  component: BaseSelect,
  argTypes: {
    color: {
      description: "color of component",
      control: {
        type: "color"
      }
    },
    dense: {
      description: "dense style",
      control: {
        type: "boolean"
      }
    },
    itemColor: {
      description: "color of selected items",
      control: {
        type: "color"
      }
    },
    items: {
      description: "list of options to populate component",
      control: {
        type: "object"
      }
    },
    itemText: {
      description: 'name of key in "items" array to show in component',
      control: {
        type: "text"
      }
    },
    itemValue: {
      description: 'name of key in "item" array to use when item is selected',
      control: {
        type: "text"
      }
    },
    label: {
      description: "label text value",
      control: {
        type: "text"
      }
    },
    loadFirstItem: {
      description: "if set to true, select first item on load",
      control: {
        type: "boolean"
      }
    },
    menuProps: {
      description: 'see vuetify v-select\'s "menu-props"',
      control: {
        type: "object"
      }
    },
    multiple: {
      description: "allow multi-select",
      control: {
        type: "boolean"
      }
    },
    noDataText: {
      description: "default text when no data is given",
      control: {
        type: "text"
      }
    },
    outlined: {
      description: "outlined style",
      control: {
        type: "boolean"
      }
    },
    prependInnerIcon: {
      description: "mdi icon name to input into prepend-inner slot",
      control: {
        type: "text"
      }
    },
    searchOption: {
      description: "show search text field in component",
      control: {
        type: "boolean"
      }
    },
    showAllOption: {
      description: 'show "Select All" option in component',
      control: {
        type: "boolean"
      }
    },
    itemIconColor: {
      description: "color of v-icon in each item",
      control: {
        type: "color"
      }
    },
    itemIconSelected: {
      description: "mdi icon name to show selected option",
      control: {
        type: "text"
      }
    },
    itemIconUnselected: {
      description: "mdi icon name to show unselected option",
      control: {
        type: "text"
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseSelect },
  template:
    '<v-app><BaseSelect v-bind="$props" /><v-btn style="margin-top:140px">Hide Dropdown</v-btn></v-app>'
});

export const SelectNormal = Template.bind({});
SelectNormal.args = {
  color: "#1976d2",
  dense: true,
  label: "Label",
  itemColor: "#1976d2",
  itemIconColor: "#528cff",
  itemIconSelected: "check_box",
  itemIconUnselected: "check_box_outline_blank",
  items: [
    {
      text: "Gate 1",
      value: "Gate 1"
    },
    {
      text: "Gate 2",
      value: "Gate 2"
    },
    {
      text: "Gate 3",
      value: "Gate 3"
    },
    {
      text: "Gate 4",
      value: "Gate 4"
    }
  ],
  itemText: "text",
  itemValue: "value",
  menuProps: {
    top: false,
    maxHeight: "152",
    offsetY: true
  },
  multiple: true,
  searchOption: true
};

export const HealthCheck = Template.bind({});
HealthCheck.args = {
  color: "#1976d2",
  dense: true,
  itemColor: "#1976d2",
  itemIconSelected: "radio_button_on",
  itemIconUnselected: "radio_button_off",
  items: [
    {
      text: "Show All",
      value: "Show All"
    },
    {
      text: "OK",
      value: "OK"
    },
    {
      text: "NG",
      value: "NG"
    }
  ],
  itemText: "text",
  itemValue: "value",
  menuProps: {
    top: false,
    maxHeight: "152",
    offsetY: true
  },
  label: "Health Check",
  loadFirstItem: true,
  outlined: true,
  prependInnerIcon: "radio_button_on"
};

export const Qualification = Template.bind({});
Qualification.args = {
  color: "#1976d2",
  dense: true,
  itemColor: "#1976d2",
  itemIconSelected: "check_box",
  itemIconUnselected: "check_box_outline_blank",
  items: [
    {
      text: "1",
      value: "Qualification #1"
    },
    {
      text: "2",
      value: "Qualification #2"
    },
    {
      text: "7",
      value: "Qualification #3"
    }
  ],
  itemText: "text",
  itemValue: "value",
  menuProps: {
    top: false,
    maxHeight: "152",
    offsetY: true
  },
  multiple: true,
  label: "Qualification",
  outlined: true,
  prependInnerIcon: "check_box",
  searchOption: true,
  showAllOption: true
};
