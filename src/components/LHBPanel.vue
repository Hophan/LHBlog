
<template>
  <div class="h-panel">
    <div class="h-panel-header">
      <LHBHeader :color="headerColor"></LHBHeader>
    </div>
    <div class="h-panel-body">
      <div class="h-panel-tree-menu">
        <transition name="menu">
          <LHBTreeMenu @menu-click="menuClick"></LHBTreeMenu>
        </transition>
      </div>
      <div class="h-panel-main">
        <LHBPreview></LHBPreview>
      </div>
      <div class="h-panel-comment">
        <LHBTierCard :content="'This is comment!'" :color="'#a34'" :direction="'right'" :digestPos="0" :tierable="true"></LHBTierCard>
      </div>
    </div>
    <div class="h-panel-foot">
      <LHBTierCard :content="''" :color="headerColor" :digest="'This is foot!'" :direction="'bottom'" :digestPos="0.9" :tierable="true"></LHBTierCard>
    </div>
  </div>
</template>

<script>
import LHBHeader from "./LHBHeader.vue";
import LHBTreeMenu from "./LHBTreeMenu.vue";
import LHBTierCard from "./LHBTierCard.vue";
import LHBPreview from "./LHBPreview.vue";

export default {
  name: "LHBPanel",
  components: {
    LHBHeader,
    LHBTreeMenu,
    LHBTierCard,
    LHBPreview
  },
  data() {
    return {
      headerColor: "gray"
    };
  },
  methods:{
    menuClick(e){
      console.log(e)
      this.headerColor = e.color;
    }
  }
};
</script>

<style lang="less" scoped>
.h-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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
.h-panel-tree-menu {
  flex: 2;
  height: 100%;
}
.h-panel-main {
  flex: 6;
  width: 100%;
  height: 100%;
  background-color: rgb(149, 149, 161)
}
.h-panel-comment {
  flex: 2;
  height: 100%;
}
.h-panel-header {
  flex: 2;
  width: 100%;
  height: 10%;
}
.h-panel-body {
  flex: 30;
  display: flex;
  width: 100%;
  height: 100%;
}
.h-panel-foot {
  position: fixed;
  width: 100%;
  height: 3%;
  top: 97%;
}
</style>