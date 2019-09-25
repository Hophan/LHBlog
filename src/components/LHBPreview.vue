<template>
  <div class="h-preview">
    <!-- <transition-group name="preview"> -->
      <template v-for="item in items">
        <div :key="item.key" class="h-preview-item">
          <LHBTierCard
            :key="item.key"
            :content="item.content"
            :color="'white'"
            :digest="item.digest"
            :direction="'top'"
            :digestPos="0.9"
            :tierable="false"
            :expanded="true"
          ></LHBTierCard>
        </div>
      </template>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import LHBTierCard from "./LHBTierCard.vue";
import PreviewUtil from "../js/utils/PreviewUtil.js";
export default {
  name: "LHBPreview",
  components: {
      LHBTierCard
  },
  data() {
    return PreviewUtil.initData();
  }
};
</script>

<style lang="less" scoped>
.h-preview {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  overflow-y: scroll;
}
.h-preview-item {
  width: 30%;
  height: 30%;
}
</style>