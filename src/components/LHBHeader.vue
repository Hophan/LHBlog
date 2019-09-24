<template>
  <div class="h-header">
    <LHBTierCard :content="content" :color="color" :digest="digest" :direction="'bottom'" :digestRange="{collapse: 0.25, expand: 0.25}"></LHBTierCard>
  </div>
</template>

<script>
import LHBTierCard from './LHBTierCard.vue'
import util from '../js/utils/HeaderUtil.js'

export default {
  name: "LHBHeader",
  components:{
    LHBTierCard
  },
  props: ["color"],
  data(){
    const _data = util.initData();
    return _data;
  }
}
</script>

<style lang="less" scoped>
.h-header{
  width: 100%;
  height: 100%;
}
</style>