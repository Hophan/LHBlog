
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
import Mocker from "../mock/TreeMenu.js";

function initData(data) {
  data.display = [data.root].concat(data.root.children);
  data.list = listItems(data.root, 0);
  data.root.parent = data.root;
  data.header = data.root;
  data.display.forEach( element => element.show = true);
}

function listItems(item, key) {
  item.color || (item.color = Mocker.nextColor());
  item.key = key
  item.active = true;
  item.show = false;
  let tmpItems = [item];
  item.children.forEach(element => {
    element.parent = item;
    let childItems = listItems(element, key + 1);
    tmpItems = tmpItems.concat(childItems);
    key += childItems.length;
  });
  return tmpItems;
}

export default {
  name: "LHBTreeMenu",
  props: [],
  components: {
    LHBTreeMenuItem
  },
  data() {
    var _data = Mocker.mock();
    _data.active = true;
    initData(_data);
    // if (_data.display.length < Mocker.MAX_ITEM_NUM) {
    //   _data.display.push(Mocker.mockItem);
    // }
    return _data;
  },
  computed: {
    self() {
      return this;
    },
    activating() {
      if (this.display.length <= 0) {
        return false;
      }
      let stat = this.display[0].active;
      for (let i = 1; i < this.display.length; ++i) {
        if (this.display[i].active != stat) {
          return true;
        }
      }
      return false;
    }
  },
  watch: {
    active() {
      let vm = this;
      for (let i = 0; i < vm.display.length; ++i) {
        setTimeout(function() {
          vm.display[i].active = vm.active;
        }, 50 * i);
      }
    },
    header(newv, oriv) {
      this.display = [newv].concat(newv.children);
      oriv.show = false;
      oriv.children.forEach(element => element.show = false);
      newv.show = true;
      newv.children.forEach(element => element.show = true);
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
  transition: all 0.5s;
}
.tree-item-leave-active {
  position: absolute;
}
</style>