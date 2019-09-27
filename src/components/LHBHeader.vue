<template>
  <div class="h-header">
    <LHBTierCard :card="headCard">
      <template slot="digest">
        <div>{{digest}}</div>
      </template>
      <template slot="content">
        <div slot="content">{{content}}</div>
      </template>
    </LHBTierCard>
  </div>
</template>

<script>
import LHBTierCard from "./LHBTierCard.vue";
import util from "../js/utils/HeaderUtil.js";

export default {
  name: "LHBHeader",
  components: {
    LHBTierCard
  },
  props: ["color"],
  data() {
    const _data = util.initData();
    return _data;
  },
  computed: {
    headCard() {
      return {
        color: this.color,
        direction: "top",
        digestPos: 1,
        tierable: false,
        expanded: true
      };
    }
  }
};
</script>

<style lang="less" scoped>
@import '../lesses/base.less';
.h-header {
  width: 100%;
  height: 100%;
}
</style>