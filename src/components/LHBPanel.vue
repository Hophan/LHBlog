
<template>
  <div class="h-panel">
    <div class="h-panel-tree-menu">
      <transition name="menu">
        <LHBTreeMenu></LHBTreeMenu>
      </transition>
    </div>
    <div class="h-panel-content">
      <div class="h-panel-header">
        <LHBHeader :color="headerColor"></LHBHeader>
      </div>
      <div class="h-panel-body">
        <div class="h-panel-main">MAIN PANEL</div>
      </div>
    </div>
    <div class="h-panel-comment"></div>
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
  display: flex;
  height: 100%;
}
.menu-move,
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s;
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.menu-leave-active {
  position: absolute;
}
.h-panel {
  widows: 100%;
  height: 100%;
}
.h-panel-tree-menu {
  flex: 2;
  height: 100%;
}
.h-panel-content {
  flex: 6;
  height: 100%;
}
.h-panel-comment{
  flex:2;
  height: 100%;
}
.h-panel-header {
  width: 100%;
  height: 10%;
}
.h-panel-body {
  width: 100%;
  height: 100%;
}
.h-panel-main {
  width: 100%;
  height: 100%;
}
</style>