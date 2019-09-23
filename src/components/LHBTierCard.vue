
<template>
  <div
    class="h-tier-card"
    :style="{'background-color':color}"
    :class="{ 'h-tier-card-emphasize': emphasize, 'h-tier-card-no-emphasize': !emphasize, 'h-tier-card-collapse': !expand, 'h-tier-card-expand': expand}"
    @click="click()"
    @mouseenter="expandMe()"
    @mouseleave="collapseMe()"
  >
    <div class="h-tier-card-digest" :class="{ 'h-tier-card-digest-expand': expand }">
      <img v-if="ico" class="h-tier-card-digest-img" :src="require(`../assets/${ico}`)" />
    </div>

    <div class="h-tier-card-content" :class="{ 'h-tier-card-content-expand': expand }">
      <div class="h-tier-card-content-area">
        <p class="h-tier-card-content-text">{{content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LHBTierCard",
  props: ["content", "ico", "color"],
  data() {
    return {
      emphasize: false,
      expand: true
    };
  },
  methods: {
    expandMe() {
      this.expand = true;
    },
    collapseMe() {
      this.expand = false;
    },
    click() {}
  },
  computed: {
      collapseCls(){
        return '';
      },
      expandCls(){
        return '';
      },
      emphasizeCls(){
        return '';
      },
      noemphasizeCls(){
        return '';
      },
  }
};
</script>

<style lang="less" scoped>
.h-tier-card {
  height: 100%;
  width: 100%;
  display: flex;
  transition: width 0.5s;
}
</style>


<style lang="less" scoped>
.h-tier-card-collapse {
  height: 25%;
}
.h-tier-card-expand {
  height: 100%;
}
.h-tier-card-digest {
  cursor: pointer;
  height: 100%;
  transition: all 0.5s;
}
.h-tier-card-digest-expand {
  height: 25%;
}
.h-tier-card-content {
  cursor: pointer;
  height: 0%;
  width: 100%;
  transition: all 0.5s;
}
.h-tier-card-content-expand {
  height: 75%;
}
.h-tier-card-digest-img {
  max-height: 80%;
  max-width: 80%;
  padding: 10%;
}
.h-tier-card-content-area {
  position: relative;
  height: 80%;
  width: 80%;
  top: 10%;
  left: 10%;
}
.h-tier-card-content-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  height: 100%;
  width: 100%;
}
.h-tier-card-emphasize {
  height: 120%;
  transition: all 0.5s;
}
.h-tier-card-no-emphasize {
  transition: all 0.5s;
}
</style>