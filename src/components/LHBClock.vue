<template>
  <div class="h-v-clock">
    <div style="flex:2;">
      <LHBClockField ref="H" :value="H" :direction="'top'" :pos="100"></LHBClockField>
    </div>
    <div style="flex:2;">
      <LHBClockField ref="h" :value="h" :direction="'top'" :pos="100"></LHBClockField>
    </div>
    <div style="flex:1; background-color: white;">:</div>
    <div style="flex:2;">
      <LHBClockField ref="M" :value="M" :direction="'top'" :pos="100"></LHBClockField>
    </div>
    <div style="flex:2;">
      <LHBClockField ref="m" :value="m" :direction="'top'" :pos="100"></LHBClockField>
    </div>
    <div style="flex:1; background-color: white;">:</div>
    <div style="flex:2;">
      <LHBClockField ref="S" :value="S" :direction="'top'" :pos="100"></LHBClockField>
    </div>
    <div style="flex:2;">
      <LHBClockField ref="s" :value="s" :direction="'top'" :pos="100"></LHBClockField>
    </div>
  </div>
</template>

<script>
import LHBClockField from "./LHBClockField.vue";
export default {
  name: "LHBClock",
  components: {
    LHBClockField
  },
  props:{
    format: String
  },
  data() {
    return {
      timmer: undefined,
      H: Math.floor(new Date().getHours() / 10),
      h: new Date().getHours() % 10,
      M: Math.floor(new Date().getMinutes() / 10),
      m: new Date().getMinutes() % 10,
      S: Math.floor(new Date().getSeconds() / 10),
      s: new Date().getSeconds() % 10
    };
  },
  computed:{
    timeFormat(){
      return format || "HH:mm:ss";
    }
  },
  mounted() {
    const vm = this;
    function start() {
      vm.timmer = setInterval(function() {
        const postDate = new Date(new Date().getTime() + 500);
        const postField = {
          H: Math.floor(postDate.getHours() / 10),
          h: postDate.getHours() % 10,
          M: Math.floor(postDate.getMinutes() / 10),
          m: postDate.getMinutes() % 10,
          S: Math.floor(postDate.getSeconds() / 10),
          s: postDate.getSeconds() % 10
        };
        vm.$refs.s.digestPos = vm.$refs.s.digestPos === 0 ? 100 : 0;
        for (const key in postField) {
          if (vm[key] !== postField[key]) {
            key != "s" && (vm.$refs[key].digestPos = 0);
            setTimeout(() => {
              key != "s" && (vm.$refs[key].digestPos = 100);
              vm[key] = postField[key];
            }, 500);
          }
        }
      }, 500);
    }
    setTimeout(start, 1000 - (new Date().getTime() % 1000));
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