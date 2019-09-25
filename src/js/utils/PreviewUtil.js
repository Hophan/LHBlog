import _ from "lodash";
const DEFAULT_DATA = {
  items: [
    {
      digest: "Digest I"
    },
    {
      digest: "Digest II"
    },
    {
      digest: "Digest III"
    },
    {
      digest: "Digest IV"
    },
    {
      digest: "Digest V"
    },
    {
      digest: "Digest VI"
    },
    {
      digest: "Digest VII"
    },
    {
      digest: "Digest VIII"
    },
    {
      digest: "Digest IX"
    },
    {
      digest: "Digest X"
    },
    {
      digest: "Digest XI"
    },
    {
      digest: "Digest XII"
    },
    {
      digest: "Digest XIII"
    },
    {
      digest: "Digest XIV"
    },
    {
      digest: "Digest XV"
    },
    //
    {
      digest: "Digest XI"
    },
    {
      digest: "Digest XII"
    },
    {
      digest: "Digest XIII"
    },
    {
      digest: "Digest XIV"
    },
    {
      digest: "Digest XV"
    },
    {
      digest: "Digest XI"
    },
    {
      digest: "Digest XII"
    },
    {
      digest: "Digest XIII"
    },
    {
      digest: "Digest XIV"
    },
    {
      digest: "Digest XV"
    }
  ]
};

const initData = function() {
  const _data = _.extend(DEFAULT_DATA, {});
  _.forEach(_data.items, (element, idx) => {
    element.content = "Read      Like      Share";
    element.key = idx;
  });
  return _data;
};

export default {
  initData: initData
};
