<template>
  <v-form ref="formRef" v-model="valid" class="login-form">
    <BaseTextField
      autofocus
      color="#406eff"
      placeholder="ID"
      :rules="[required]"
      :value.sync="username"
      @change-base-text-field="username = $event"
    />
    <BaseTextField
      color="#406eff"
      placeholder="PW"
      :rules="[required]"
      type="password"
      :value.sync="password"
      @change-base-text-field="password = $event"
    />
    <ButtonWrapper
      :loading="loading"
      prebuiltStyle="login"
      style="margin-top: 15px"
      text="Login"
      type="submit"
      @click-button-wrapper="submit()"
    />
  </v-form>
</template>

<script>
import BaseTextField from "../base-components/BaseTextField";
import ButtonWrapper from "../base-components/ButtonWrapper";

export default {
  name: "LoginForm",
  components: {
    BaseTextField,
    ButtonWrapper
  },
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => {
    return {
      valid: true,
      username: "",
      password: "",
      required: val => val.length > 1 || "Required"
    };
  },
  methods: {
    submit() {
      if (this.$refs.formRef.validate()) {
        this.$emit("form-submit", {
          username: this.username,
          password: this.password
        });
      }
    }
  }
};
</script>

<style scoped></style>
