import _ from "lodash";

const DEFAULT_DATA = {
  content: "THIS IS TITLE!",
  digest: ""
};

export default {
  initData: function() {
    return _.extend(DEFAULT_DATA, {});
  }
};
