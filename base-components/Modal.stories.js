import BaseModal from "./BaseModal.vue";
import CompanyForm from "../composite-components/CompanyForm.vue";
import Vue from "vue";

export default {
  title: "basics/Modal",
  parameters: {
    docs: {
      description: {
        component:
          "interactable component to inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks"
      }
    },
    actions: {
      handles: ["base-modal-hide", "base-modal-save"]
    }
  },
  component: BaseModal,
  argTypes: {
    fullscreen: {
      description: "component will take up full size of browser window",
      control: {
        type: "boolean"
      }
    },
    hideOverlay: {
      description: "prevents darkened background when component is shown",
      control: {
        type: "boolean"
      }
    },
    maxWidth: {
      description: "sets max width of component",
      control: {
        type: "number"
      }
    },
    noClickAnimation: {
      description:
        "prevents bounce effect when clicking outside component while persistent is true",
      control: {
        type: "boolean"
      }
    },
    persistent: {
      description: "prevents hiding component when clicking outside",
      control: {
        type: "boolean"
      }
    },
    scrollable: {
      description:
        "expects v-card and v-card-text component to have designated height",
      control: {
        type: "boolean"
      }
    },
    show: {
      description: "required show/hide flag for component",
      control: {
        type: "boolean"
      }
    },
    text: {
      description: "string value to render in content area",
      control: {
        type: "text"
      }
    },
    title: {
      description: "string value to render in title area",
      control: {
        type: "text"
      }
    },
    width: {
      description: "sets width of component",
      control: {
        type: "number"
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseModal, CompanyForm },
  template: `<v-app>
      <BaseModal v-bind="$props">
        <template v-if="!text.length && !!${"content" in args}" v-slot:content>
          <CompanyForm />
        </template>
      </BaseModal>
    </v-app>`
});

export const Confirm = Template.bind({});
Confirm.args = {
  show: true,
  text: "Do you want to execute this action?",
  title: "Confirm"
};

export const CompanyAdd = Template.bind({});
CompanyAdd.args = {
  content: true,
  show: true,
  text: "",
  title: "Add Company"
};
