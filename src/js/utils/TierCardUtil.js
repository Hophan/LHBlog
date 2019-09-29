import util from "./commonUtil.js";

const throttleChangeStatus = function(delay) {
  const throttleApply = util.throttleApply(function(status) {
    if (this.card.tierable) {
      this.expand = status;
      this.$emit(status ? "tier-card-expand" : "tier-card-collapse");
    }
    if (this.card.emphasizable) {
      this.emphasize = status;
      this.$emit(status ? "tier-card-emphasize" : "tier-card-noemphasize");
    }
  }, delay);
  return function(status) {
    throttleApply(this, status);
  };
};

export default {
  throttleChangeStatus: throttleChangeStatus
};
