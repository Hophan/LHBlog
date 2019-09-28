<template>
  <div class="h-v-clock">
    <template v-for="field in fields">
      <LHBClockField :key="field" :ref="field" :field="field"></LHBClockField>
    </template>
  </div>
</template>

<script>
import LHBClockField from "./LHBClockField.vue";
import util from "../js/utils/ClockUtil.js";
import _ from "lodash";
export default {
  name: "LHBClock",
  components: {
    LHBClockField
  },
  props: {
    format: String
  },
  data() {
    const initDate = new Date();
    const timeformat = this.format || "HH:mm";
    return {
      timmer: undefined,
      timeformat: timeformat,
      fields: util.format2Fields(timeformat)
    };
  },
  mounted() {
    util.internalRefresh(this);
  }
};
</script>

<style lang="less" scoped>
@import "../lesses/base.less";

.h-v-clock {
  display: flex;
  flex-direction: row;
}
</style>