
<template>
  <div class="h-panel">
    <div class="h-panel-header">
      <LHBHeader :color="headerColor"></LHBHeader>
    </div>
    <div class="h-panel-body">
      <div class="h-panel-tree-menu">
        <transition name="menu">
          <!-- <LHBTreeMenu @menu-click="menuClick"></LHBTreeMenu> -->
          <LHBListMenu></LHBListMenu>
        </transition>
      </div>
      <div class="h-panel-main">
        <!-- <LHBPreview></LHBPreview> -->
      </div>
      <div class="h-panel-comment">
        <LHBTierCard :card="commentCard"></LHBTierCard>
      </div>
    </div>
    <div class="h-panel-foot">
      <!-- <div class="h-panel-foot-clock">
        <LHBClock></LHBClock>
      </div> -->
    </div>
    <div class="h-panel-clock">
      <LHBClock></LHBClock>
    </div>
  </div>
</template>

<script>
import LHBHeader from "./LHBHeader.vue";
import LHBTreeMenu from "./LHBTreeMenu.vue";
import LHBTierCard from "./LHBTierCard.vue";
import LHBPreview from "./LHBPreview.vue";
import LHBListMenu from "./LHBListMenu.vue";
import LHBClock from "./LHBClock.vue";

export default {
  name: "LHBPanel",
  components: {
    LHBHeader,
    LHBTreeMenu,
    LHBTierCard,
    LHBPreview,
    LHBListMenu,
    LHBClock
  },
  data() {
    return {
      headerColor: "gray"
    };
  },
  methods: {
    menuClick(e) {
      this.headerColor = e.color;
    }
  },
  computed: {
    footCard() {
      return {
        content: "",
        color: this.headerColor,
        digest: "This is foot!",
        direction: "bottom",
        digestPos: 90,
        tierable: true
      };
    },
    commentCard() {
      return {
        content: "This is comment!",
        color: "#a34",
        direction: "right",
        digestPos: 10,
        tierable: true,
        emphasizable: false
      };
    },
    listItem() {
      return {
        content: "This is ListItem!",
        color: "blue",
        ico: "hophan.jpg",
        direction: "left",
        digestPos: 10,
        tierable: true,
        emphasizable: true
      };
    }
  }
};
</script>

<style lang="less" scoped>
@import "../lesses/base.less";
.h-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.menu-move,
.menu-enter-active,
.menu-leave-active {
  transition: @normal-transition;
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
  background-color: rgb(149, 149, 161);
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
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  width: 100%;
  height: 3%;
  top: 97%;
}
.h-panel-clock {
  position: absolute;
  width: 5%;
  height: 2%;
}
</style>