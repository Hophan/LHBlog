<template>
  <LHBTierCard
    :card="{
        digestPos: digestPos,
        digestColor: color || defaultColor,
        direction: direction,
        tierable: false,
        emphasizable: false,
        expanded: true
      }"
  >
    <div style="overflow:hidden;" slot="digest">{{value}}</div>
    <div style="overflow:hidden;" slot="content"></div>
  </LHBTierCard>
</template>

<script>
import LHBTierCard from "./LHBTierCard.vue";
import util from "../js/utils/commonUtil.js";
export default {
  name: "LHBClockField",
  props: {
    value: Number,
    color: String,
    direction: String,
    pos: Number
  },
  components: {
    LHBTierCard
  },
  data() {
    return {
      digestPos: this.pos
    };
  },
  computed: {
    defaultColor() {
      return util.DEFAULT_COLOR[this.value];
    },
    // digestValue() {
    //   return this.direction === "top" || this.direction === "left"
    //     ? ""
    //     : this.value;
    // },
    // contentValue() {
    //   return this.direction === "top" || this.direction === "left"
    //     ? this.value
    //     : "";
    // },
    // realPos() {
    //   return this.direction === "top" || this.direction === "left"
    //     ? 100 - this.digestPos
    //     : this.digestPos;
    // }
  }
};
</script>

<style lang="less" scoped>
@import "../lesses/base.less";
</style>