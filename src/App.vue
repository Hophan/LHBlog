<template>
  <div id="app">
    <LHBPanel></LHBPanel>
  </div>
</template>

<script>
import LHBPanel from "./components/LHBPanel.vue";

export default {
  name: "app",
  components: {
    LHBPanel
  }
};
</script>

<style lang="less">
@import "./lesses/base.less";
</style>