<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { Calendar } from "../lib-components/index.js";

export default Vue.extend({
  name: "ServeDev",
  components: {
    Calendar
  }
});
</script>

<template>
  <div id="app">
    <Calendar />
  </div>
</template>
