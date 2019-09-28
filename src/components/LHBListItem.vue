
<template>
  <LHBTierCard
    :card="item"
    @tier-card-click="itemClick"
    @tier-card-expand="expand"
    @tier-card-collapse="collapse"
  >
    <template slot="digest">
      <img v-if="item.ico" class="h-tree-menu-digest-img" :src="require(`../assets/${item.ico}`)" />
    </template>
    <template slot="content">
      <div class="h-tree-menu-content-area">
        <p class="h-tree-menu-content-text">{{item.content}}</p>
      </div>
    </template>
  </LHBTierCard>
</template>

<script>
import LHBTierCard from "./LHBTierCard.vue";

export default {
  name: "LHBListItem",
  props: ["item"],
  components: {
    LHBTierCard
  },
  methods: {
    itemClick(e) {
      this.$emit("list-item-click", e);
    },
    expand() {
      this.$emit("list-item-expand", this.item.key);
    },
    collapse() {
      this.$emit("list-item-collapse", this.item.key);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../lesses/base.less";

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
  height: 100%;
  width: 100%;
}
</style>