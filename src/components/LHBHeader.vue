<template>
  <div class="h-header" :style="{'background-color': color}">{{title}}</div>
</template>

<script>
export default {
  name: "LHBHeader",
  props: ["color"],
  data(){
    return {
      title: "Header Title"
    }
  }
}
</script>

<style lang="less" scoped>
.h-header{
  width: 100%;
  height: 100%;
}
</style>