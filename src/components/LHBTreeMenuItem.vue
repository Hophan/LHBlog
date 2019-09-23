
<template>
  <div
    class="h-tree-menu-item"
    :style="{'background-color':item.color, 'z-index': item.key}"
    :class="{ 'h-tree-menu-item-emphasize': emphasize, 'h-tree-menu-item-no-emphasize': !emphasize, 'h-tree-menu-item-disactive': !item.active, 'h-tree-menu-item-active': item.active}"
    @click="loadContent()"
    @mouseenter="activate()"
    @mouseleave="disactivate()"
  >
    <div class="h-tree-menu-digest" :class="{ 'h-tree-menu-digest-active': item.active }">
      <img v-if="item.ico" class="h-tree-menu-digest-img" :src="require(`../assets/${item.ico}`)" />
    </div>

    <div class="h-tree-menu-content" :class="{ 'h-tree-menu-content-active': item.active }">
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
    activate() {
      // !this.parent.active && (this.parent.active = this.emphasize = true);
    },
    disactivate() {
      // this.parent.active && (this.parent.active = this.emphasize = false);
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
.h-tree-menu-item-disactive {
  width: 25%;
}
.h-tree-menu-item-active {
  width: 100%;
}
.h-tree-menu-digest {
  cursor: pointer;
  width: 100%;
  transition: all 0.5s;
}
.h-tree-menu-digest-active {
  width: 25%;
  z-index: 999;
}
.h-tree-menu-content {
  cursor: pointer;
  width: 0%;
  transition: all 0.5s;
}
.h-tree-menu-content-active {
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
  transform: scale(1.2);
  transition: all 0.5s;
}
.h-tree-menu-item-no-emphasize {
  transition: all 0.5s;
}
</style>

<style lang="less" scoped>
@import "../lesses/common.less";
</style>