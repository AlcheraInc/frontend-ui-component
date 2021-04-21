<template>
  <v-dialog
    v-model="show"
    :fullscreen="fullscreen"
    :hide-overlay="hideOverlay"
    :max-width="maxWidth"
    :no-click-animation="noClickAnimation"
    :persistent="persistent"
    :scrollable="scrollable"
    :width="width"
    @keydown.esc="hide()"
    @click:outside="hide()"
  >
    <v-card>
      <v-card-title
        ><div class="title">{{ title }}</div>
        <v-icon large class="close-icon" @click="hide()">close</v-icon>
      </v-card-title>
      <v-card-text v-if="text.length">{{ text }}</v-card-text>
      <slot name="content" v-else />
      <v-card-actions class="card-actions">
        <ButtonWrapper
          color="#d8d9da"
          text="Cancel"
          textColor="#43425d"
          width="120"
          @click-button-wrapper="hide()"
        />
        <ButtonWrapper text="Save" width="120" @click-button-wrapper="save()" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ButtonWrapper from "./ButtonWrapper";

export default {
  name: "BaseModal",
  components: {
    ButtonWrapper
  },
  props: {
    fullscreen: {
      type: Boolean,
      required: false,
      default: false
    },
    hideOverlay: {
      type: Boolean,
      required: false,
      default: false
    },
    maxWidth: {
      type: String,
      required: false,
      default: "800"
    },
    noClickAnimation: {
      type: Boolean,
      required: false,
      default: false
    },
    persistent: {
      type: Boolean,
      required: false,
      default: false
    },
    scrollable: {
      type: Boolean,
      required: false,
      default: false
    },
    show: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    width: {
      type: [Number, String],
      required: false
    }
  },
  data: () => {
    return {};
  },
  methods: {
    hide() {
      this.$emit("base-modal-hide");
    },
    save() {
      this.$emit("base-modal-save");
    }
  }
};
</script>

<style scoped>
.title {
  color: #3a7bc6;
}
.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
}
.card-actions {
  display: flex;
  justify-content: flex-end;
  padding-right: 40px !important;
  padding-bottom: 30px !important;
}
</style>
