import _ from "lodash";

const DEFAULT_DATA = {
  content: "Tier Card Title."
};

export default {
  initData: function() {
    return _.extend(DEFAULT_DATA, {});
  }
};
