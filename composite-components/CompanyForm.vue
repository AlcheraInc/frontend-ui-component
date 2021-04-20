<template>
  <v-form ref="formRef" v-model="valid" class="login-form">
    <div class="row">
      <div class="section">
        <div class="section-title">Company Name</div>
        <div class="section-content">
          <BaseTextField
            autofocus
            color="#406eff"
            placeholder="Company Name"
            :rules="[required]"
            :value.sync="companyName"
            @change-base-text-field="companyName = $event"
          />
        </div>
      </div>
      <div class="section">
        <div class="section-title">Phone Number</div>
        <div class="section-content">
          <BaseTextField
            color="#406eff"
            placeholder="02-000-000"
            :rules="[required]"
            type="tel"
            :value.sync="phoneNumber"
            @change-base-text-field="phoneNumber = $event"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="section">
        <div class="section-title">Qualifications</div>
        <div class="section-content">
          <BaseTextarea
            color="#406eff"
            outlined
            placeholder="50 character max"
          />
        </div>
      </div>
      <div class="section">
        <div class="section-title">Memo</div>
        <div class="section-content">
          <BaseTextarea
            color="#406eff"
            outlined
            placeholder="100 character max"
          />
        </div>
      </div>
    </div>
  </v-form>
</template>

<script>
import BaseTextarea from "../base-components/BaseTextarea";
import BaseTextField from "../base-components/BaseTextField";

export default {
  name: "LoginForm",
  components: {
    BaseTextarea,
    BaseTextField
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
      companyName: "",
      phoneNumber: "",
      qualifications: "",
      memo: "",
      required: val => val.length > 1 || "Required"
    };
  }
};
</script>

<style scoped>
.login-form {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 50px 0px 50px;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
}
.section {
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.section-title {
  margin-bottom: 10px;
}
.section-content {
}
</style>
