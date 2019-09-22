
<template>
  <div class="h-panel">
    <LHBHeader :color="headerColor"></LHBHeader>
    <transition name="menu">
      <LHBTreeMenu></LHBTreeMenu>
    </transition>
  </div>
</template>

<script>
import LHBHeader from "./LHBHeader.vue";
import LHBTreeMenu from "./LHBTreeMenu.vue";

export default {
  name: "LHBPanel",
  components: {
    LHBHeader,
    LHBTreeMenu
  },
  data(){
    return {
      headerColor: "gray"
    };
  }
};
</script>

<style lang="less" scoped>
  .h-panel{
    // min-height: 100%;
    height: 100%;
  }
  .menu-move,
  .menu-enter-active,
  .menu-leave-active {
    transition: all 0.5s;
  }
  .menu-enter,
  .menu-leave-to {
    // opacity: 0;
    transform: translateX(-100%);
  }
  .menu-leave-active {
    position: absolute;
  }
</style>