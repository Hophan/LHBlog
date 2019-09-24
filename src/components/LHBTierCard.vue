
<template>
  <div
    class="h-tier-card"
    :style="cardCls"
    @click="click()"
    @mouseenter="expandMe()"
    @mouseleave="collapseMe()"
  >
    <div class="h-tier-card-digest" 
        :style="{
            'width': vertical ? '100%' : digestRate,
            'height': horizon ? '100%' : digestRate,
        }"
    >
      <img v-if="ico" class="h-tier-card-digest-img" :src="require(`../assets/${ico}`)" />
      <div v-if="!ico" class="h-tier-card-digest-img">{{digest}}</div>
    </div>

    <div class="h-tier-card-content" 
        :style="{
            'width': vertical ? '100%' : contentRate,
            'height': horizon ? '100%' : contentRate,
        }"
    >
      <div class="h-tier-card-content-area">
        <div class="h-tier-card-content-text">{{content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LHBTierCard",
  props: ["content", "ico", "digest", "color", "direction", "digestRange"],
  data() {
    return {
      emphasize: false,
      expand: false
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
    top() {
      return this.direction === "top";
    },
    bottom() {
      return this.direction === "bottom";
    },
    left() {
      return this.direction === "left";
    },
    right() {
      return this.direction === "right";
    },
    vertical() {
      return this.top || this.bottom;
    },
    horizon() {
      return !this.vertical;
    },
    order(){
        return this.top || this.left;
    },
    reverse(){
        return !this.order;
    },
    cardCls(){
        const cls = {
            'background-color': this.color,
            'transition': 'all 0.5s',
            'flex-direction': this.top ? 'column' : this. bottom ? 'column-reverse' : this.left ? 'row' : 'row-reverse'
        };
        const flexAt = this.vertical ? 'height': 'width';
        cls[flexAt] = this.emphasize ? '120%' : this.expand ? '100%' : this.digestRange.collapse * 100 + '%';
        return cls;
    },
    digestRate(){
       return this.expand ? this.digestRange.expand * 100 + '%' : '100%';
    },
    contentRate(){
       return this.expand ? (1 - this.digestRange.expand) * 100 + '%' : '0%';
    }
  }
};
</script>

<style lang="less" scoped>
.h-tier-card {
  min-height: 10%;
  min-width: 10%;
  height: 100%;
  width: 100%;
  display: flex;
  transition: width 0.5s;
}
.h-tier-card-expand {
  height: 100%;
  width: 100%;
}
.h-tier-card-digest {
  cursor:pointer;
  height: 100%;
  transition: all 0.5s;
}
.h-tier-card-content {
  cursor:pointer;
  height: 0%;
  width: 100%;
  transition: all 0.5s;
}
.h-tier-card-digest-img {
//   max-height: 80%;
//   max-width: 80%;
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