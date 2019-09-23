
<template>
  <div class="h-panel">
    <div class="h-panel-header">
      <LHBHeader :color="headerColor"></LHBHeader>
    </div>
    <div class="h-panel-body">
      <div class="h-panel-tree-menu">
        <transition name="menu">
          <LHBTreeMenu></LHBTreeMenu>
        </transition>
      </div>
      <div class="h-panel-main">MAIN PANEL</div>
    </div>
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
  data() {
    return {
      headerColor: "gray"
    };
  }
};
</script>

<style lang="less" scoped>
.h-panel {
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
.h-panel{
  widows: 100%;
  height: 100%;
}
.h-panel-header {
  width: 100%;
  height: 10%;
}
.h-panel-body {
  display: flex;
  width: 100%;
  height: 100%;
}
.h-panel-tree-menu {
  position: relative;
  width: 20%;
  height: 100%;
  top: -10%;
  left: 0%;
}
.h-panel-main {
  width: 60%;
  height: 100%;
}
</style>