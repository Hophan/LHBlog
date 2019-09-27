
<template>
  <div class="h-list-menu">
    <!-- <transition-group name="list-item" class="h-list-menu"> -->
      <template v-for="(item, i) in items">
        <!-- <div  class="h-list-menu-item"> -->
          <LHBListItem :key="i" :item="item" class="h-list-menu-item"></LHBListItem>
        <!-- </div> -->
      </template>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import LHBListItem from "./LHBListItem.vue";
import util from "../js/utils/ListMenuUtil.js";

export default {
  name: "LHBListMenu",
  props: [],
  components: {
    LHBListItem
  },
  data() {
    return util.initData();
  }
};
</script>

<style lang="less" scoped>
@import "../lesses/base.less";
.h-list-menu {
  position: relative;
  display: flex;
  flex-direction: column;
}
.h-list-menu-item {
  flex-shrink: 1;
  flex-grow:1;
  flex-basis:0%;
}

.list-item-enter,
.list-item-leave-to {
  opacity: 0;
}

.list-item-leave-active {
  position: absolute;
}
</style>