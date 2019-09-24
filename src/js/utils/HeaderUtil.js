import _ from "lodash";

const DEFAULT_DATA = {
  content: "Tier Card Content.",
  digest: "Tier Card Digest"
};

export default {
  initData: function() {
    return _.extend(DEFAULT_DATA, {});
  }
};
