<template>
  <LHBTierCard
    :card="{
        digestPos: digestPos,
        digestColor: color || defaultColor,
        direction: direction || 'top',
        tierable: false,
        emphasizable: false,
        expanded: true
      }"
    :style="{flex: flexLevel}"
  >
    <div style="overflow:hidden;" slot="digest">{{fieldValue}}</div>
    <div style="overflow:hidden;" slot="content"></div>
  </LHBTierCard>
</template>

<script>
import LHBTierCard from "./LHBTierCard.vue";
import util from "../js/utils/commonUtil.js";
import clockUtil from "../js/utils/ClockUtil.js";

export default {
  name: "LHBClockField",
  props: {
    value: {
      type: String,
      validator(value) {
        return clockUtil.timeValue(value) || clockUtil.separatorValue(value);
      }
    },
    color: String,
    direction: String
  },
  components: {
    LHBTierCard
  },
  data() {
    return {
      digestPos: 100,
      fieldValue: this.value
    };
  },
  computed: {
    defaultColor() {
      return 'white'//clockUtil.separatorValue(this.fieldValue) ? 'white' : util.DEFAULT_COLOR[this.fieldValue];
    },
    flexLevel() {
      return clockUtil.separatorValue(this.fieldValue) ? 1 : 5;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../lesses/base.less";
</style>