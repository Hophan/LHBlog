
<template>
  <div class="h-tree-menu">
    <transition-group name="tree-item">
      <template v-for="item in list">
        <LHBTreeMenuItem v-show="item.show" :key="item.key" :item="item" :parent="self"></LHBTreeMenuItem>
      </template>
    </transition-group>
  </div>
</template>

<script>
import LHBTreeMenuItem from "./LHBTreeMenuItem.vue";
import util from "../js/utils/TreeMenuUtil.js";

export default {
  name: "LHBTreeMenu",
  props: [],
  components: {
    LHBTreeMenuItem
  },
  data() {
    return util.initData();
  },
  computed: {
    self() {
      return this;
    }
  },
  watch: {
    expand() {
      this.expanding = true;
      let vm = this;
      let idx = 0;
      const _expand = function() {
        if (idx >= vm.display.length) {
          vm.expanding = false;
          return;
        }
        if (vm.expandTarget != vm.expand) {
          idx = 0;
          vm.expand = vm.expandTarget;
        } else {
          vm.display[idx].expand = vm.expand;
        }
        ++idx;
        setTimeout(_expand, 50);
      };
      setTimeout(_expand, 50);
    },
    expandTarget() {
      if (!this.expanding && this.expand !== this.expandTarget) {
        this.expand = this.expandTarget;
      }
    },
    header(newv, oriv) {
      this.switching = true;
      oriv.show = false;
      oriv.children.forEach(element => (element.show = false));
      newv.expand = newv.show = true;
      newv.children.forEach(element => (element.expand = element.show = true));
      this.display = [newv].concat(newv.children);
      const vm = this;
      setTimeout(() => (vm.switching = false), 500);
    }
  }
};
</script>

<style lang="less" scoped>
.h-tree-menu {
  height: 100%;
  width: 100%;
}

.tree-item-move,
.tree-item-enter-active,
.tree-item-leave-active {
  transition: all 0.5s;
}
.tree-item-enter,
.tree-item-leave-to {
  opacity: 0;
  transition: all 0.5s;
}
.tree-item-leave-active {
  position: absolute;
}
</style>