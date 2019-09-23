
<template>
  <div
    class="h-tree-menu-item"
    :style="{'background-color':item.color, 'z-index': item.key}"
    :class="{ 'h-tree-menu-item-emphasize': emphasize, 'h-tree-menu-item-no-emphasize': !emphasize, 'h-tree-menu-item-collapse': !item.expand, 'h-tree-menu-item-expand': item.expand}"
    @click="loadContent()"
    @mouseenter="expand()"
    @mouseleave="collapse()"
  >
    <div class="h-tree-menu-digest" :class="{ 'h-tree-menu-digest-expand': item.expand }">
      <img v-if="item.ico" class="h-tree-menu-digest-img" :src="require(`../assets/${item.ico}`)" />
    </div>

    <div class="h-tree-menu-content" :class="{ 'h-tree-menu-content-expand': item.expand }">
      <div class="h-tree-menu-content-area">
        <p class="h-tree-menu-content-text">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LHBTreeMenuItem",
  props: ["item", "parent"],
  data() {
    return {
      emphasize: false
    };
  },
  methods: {
    expand() {
      this.emphasize = true;
      if (this.switching){
        return;
      }
      this.parent.expandTarget = true;
    },
    collapse() {
      this.emphasize = false;
      if (this.switching){
        return;
      }
      this.parent.expandTarget = false;
    },
    loadContent() {
      if (!this.isHeader){
        this.parent.header = this.item;
      }else{
        this.parent.header = this.item.parent;
      }
    }
  },
  computed: {
    isHeader(){
      return this.parent.header == this.item;
    },
    switching(){
      return this.parent.switching;
    }
  },
  watch:{
    show(){
      this.emphasize = false;
    }
  }
};
</script>

<style lang="less" scoped>
.h-tree-menu-item {
  min-height: 10%;
  max-height: 10%;
  display: flex;
  transition: width 0.5s;
}
.h-tree-menu-item-collapse {
  width: 25%;
}
.h-tree-menu-item-expand {
  width: 100%;
}
.h-tree-menu-digest {
  cursor: pointer;
  width: 100%;
  transition: all 0.5s;
}
.h-tree-menu-digest-expand {
  width: 25%;
  z-index: 999;
}
.h-tree-menu-content {
  cursor: pointer;
  width: 0%;
  transition: all 0.5s;
}
.h-tree-menu-content-expand {
  width: 75%;
  z-index: 999;
}
.h-tree-menu-digest-img {

  max-height: 80%;
  max-width: 80%;
  padding: 10%;
}
.h-tree-menu-content-area {
  position: relative;
  height: 80%;
  width: 80%;
  top: 10%;
  left: 10%;
}
.h-tree-menu-content-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.h-tree-menu-item-emphasize {
  width: 120%;
  transition: all 0.5s;
}
.h-tree-menu-item-no-emphasize {
  transition: all 0.5s;
}
</style>

<style lang="less" scoped>
@import "../lesses/common.less";
</style>