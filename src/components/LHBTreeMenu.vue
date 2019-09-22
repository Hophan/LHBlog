
<template>
  <div class="h-tree-menu">
      <template v-for="item in items">
        <LHBTreeMenuItem
          :key="item.key"
          :data="item"
          :parent="self"
        ></LHBTreeMenuItem>
      </template>
  </div>
</template>

<script>
import LHBTreeMenuItem from "./LHBTreeMenuItem.vue";
import Mocker from "../mock/TreeMenu.js";

export default {
  name: "LHBTreeMenu",
  props: [],
  components: {
    LHBTreeMenuItem
  },
  data() {
    var _data = Mocker();
    _data.active = false;
    return _data;
  },
  computed: {
    self() {
      return this;
    },
    itemCount(){
      return this.items.length;
    },
    activating(){
      if (this.itemCount <= 0){
        return false;
      }
      let stat = this.items[0].active;
      for (let i = 0; i < this.itemCount; ++i){
        if (this.items[i].active != stat){
          return true;
        }
      }
      return false;
    }
  },
  watch: {
    active() {
      let vm = this;
      for (let i = 0; i < vm.items.length; ++i){
        setTimeout(function(){vm.items[i].active = vm.active}, 50 * i);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.h-tree-menu {
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 20%;
}
</style>