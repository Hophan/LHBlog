
<template>
  <div class="h-list-menu">
    <template v-for="item in items">
      <LHBListItem
        :key="item.key"
        :item="item"
        class="h-list-menu-item"
        @list-item-expand="expand"
        @list-item-collapse="collapse"
      ></LHBListItem>
    </template>
  </div>
</template>

<script>
import LHBListItem from "./LHBListItem.vue";
import util from "../js/utils/ListMenuUtil.js";
import _ from "lodash";

export default {
  name: "LHBListMenu",
  props: [],
  components: {
    LHBListItem
  },
  data() {
    return {};
  },
  methods: {
    changeExpandOrCollapse(){

    },
    expand(key) {
      // console.log("expand:" + key);
      this.changeExpandOrCollapse(true);
    },
    collapse(key) {
      // console.log("collapse:" + key);
      this.changeExpandOrCollapse(false);
    }
  },
  computed: {
    items() {
      return util.initData();
    }
  },
  mounted(){
    this.changeExpandOrCollapse = util.throttleExpandOrCollapse(20);
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
  flex-grow: 1;
  flex-basis: 0%;
}

.list-item-enter,
.list-item-leave-to {
  opacity: 0;
}

.list-item-leave-active {
  position: absolute;
}
</style>