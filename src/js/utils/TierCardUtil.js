import util from "./commonUtil.js";

const throttleChangeStatus = function(delay) {
  const throttleApply = util.throttleApply(function(status) {
    if (this.card.tierable) {
      this.expand = status;
    }
    if (this.card.emphasizable) {
      this.emphasize = status;
    }
  }, delay);
  return function(status) {
    throttleApply(this, status);
  };
};

export default {
  throttleChangeStatus: throttleChangeStatus
};
