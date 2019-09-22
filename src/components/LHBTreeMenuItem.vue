
<template>
  <div
    class="h-tree-menu-item"
    :style="{'background-color':data.color}"
    :class="{ 'h-tree-menu-item-emphasize': emphasize, 'h-tree-menu-item-no-emphasize': !emphasize, 'h-tree-menu-item-disactive': !data.active, 'h-tree-menu-item-active': data.active}"
    @click="loadContent()"
    @mouseenter="activate()"
    @mouseleave="disactivate()"
  >
    <div
      class="h-tree-menu-digest"
      :class="{ 'h-tree-menu-digest-active': data.active }"
    >
      <img class="h-tree-menu-digest-img" src="../assets/logo.png" />
    </div>

    <div
      class="h-tree-menu-content"
      :class="{ 'h-tree-menu-content-active': data.active }"
    >
      <div class="h-tree-menu-content-description" v-show="data.active">{{data.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LHBTreeMenuItem",
  props: ["data", "parent"],
  data() {
    return {
      emphasize: false
    };
  },
  methods: {
    activate() {
      !this.parent.active && (this.parent.active = this.emphasize = true);
    },
    disactivate() {
      this.parent.active && (this.parent.active = this.emphasize = false);
    },
    loadContent() {}
  }
};
</script>

<style lang="less" scoped>
.h-tree-menu-item {
  min-height: 10%;
  max-height: 10%;
  display: flex;
  transition: width .5s;
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
  transition: width .5s;
}
.h-tree-menu-digest-active {
  width: 25%;
}
.h-tree-menu-content {
  cursor: pointer;
  width: 0%;
  transition: width 0.5s;
}
.h-tree-menu-content-active {
  width: 75%;
}
.h-tree-menu-digest-img {
  height: 100%;
  width: 100%;
}
.h-tree-menu-content-description {
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