
<template>
  <div :style="cardStyle">
    <!-- digest -->
    <div
      class="h-tier-card-digest"
      :style="digestStyle"
      @click="click"
      @mouseenter="expandMe"
      @mouseleave="collapseMe"
    >
      <div>
        <slot name="digest">
          <div class="h-tier-card-text">Digest here.</div>
        </slot>
      </div>
    </div>
    <!-- content -->
    <div
      class="h-tier-card-content"
      :style="contentStyle"
      @click="click"
      @mouseenter="expandMe"
      @mouseleave="collapseMe"
    >
      <div v-show="expand">
        <slot name="content">
          <div class="h-tier-card-text">Content here.</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import util from "../js/utils/TierCardUtil.js";

export default {
  name: "LHBTierCard",
  props: {
    card: {
      type: Object,
      validator: function(card) {
        return (
          ["top", "bottom", "left", "right"].indexOf(card.direction) !== -1 &&
          card.digestPos >= 0 &&
          card.digestPos <= 100
        );
      }
    }
  },
  data() {
    return {
      emphasize: false,
      expand: !!this.card.expanded
    };
  },
  watch: {
    expand(newv, oriv) {
      this.$emit(newv ? "tier-card-expand" : "tier-card-collapse");
    },
    emphasize(newv, oriv) {
      this.$emit(newv ? "tier-card-emphasize" : "tier-card-noemphasize");
    }
  },
  beforeMount() {
    // init changeStatus with Throttle method.
    this.changeStatus = util.throttleChangeStatus(20);
  },
  methods: {
    changeStatus() {
      // place holder.
    },
    expandMe() {
      this.changeStatus(true);
    },
    collapseMe() {
      this.changeStatus(false);
    },
    click() {
      this.$emit("tier-card-click", this.data);
    }
  },
  computed: {
    top() {
      return this.card.direction === "top";
    },
    bottom() {
      return this.card.direction === "bottom";
    },
    left() {
      return this.card.direction === "left";
    },
    right() {
      return this.card.direction === "right";
    },
    flexAttr() {
      return this.top || this.bottom ? "height" : "width";
    },
    fixedAttr() {
      return this.left || this.right ? "height" : "width";
    },
    flexDir() {
      return this.top
        ? "column"
        : this.bottom
        ? "column-reverse"
        : this.left
        ? "row"
        : "row-reverse";
    },
    cardStyle() {
      const style = {
        display: "flex",
        "flex-direction": this.flexDir,
        width: this.emphasize ? "120%" : "100%",
        height: this.emphasize ? "120%" : "100%"
      };
      return style;
    },
    contentStyle() {
      const style = {
        "flex-grow": this.expand ? 1 : 0,
        "background-color": this.card.contentColor || this.card.color
      };
      style[this.flexAttr] = this.expand ? "100%" : "0";
      style[`max-${this.flexAttr}`] = `${100 - this.card.digestPos}%`;
      return style;
    },
    digestStyle() {
      const style = {
        "flex-basis": `${this.card.digestPos}%`,
        "background-color": this.card.digestColor || this.card.color
      };
      style[`max-${this.flexAttr}`] = `${this.card.digestPos}%`;
      return style;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../lesses/base.less";

.h-tier-card-digest {
  cursor: default;
  flex-grow: 0;
  flex-shrink: 0;
}
.h-tier-card-content {
  cursor: default;
  flex-basis: 0%;
  flex-shrink: 0;
}
.h-tier-card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>