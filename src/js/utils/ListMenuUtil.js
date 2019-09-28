import _ from "lodash";
import util from "./commonUtil.js";

const DEFAULT_DATA = {
  items: [
    {
      ico: "hophan.jpg",
      content: "Blog I."
    },
    {
      ico: "kurisu.jpg",
      content: "Blog II."
    },
    {
      ico: "logo.png",
      content: "Blog III."
    },
    {
      ico: "rio.jpg",
      content: "Blog IV."
    },
    {
      ico: "hophan.jpg",
      content: "Blog V."
    },
    {
      ico: "kurisu.jpg",
      content: "Blog VI."
    },
    {
      ico: "logo.png",
      content: "Blog VII."
    },
    {
      ico: "rio.jpg",
      content: "Blog VIII."
    },
    {
      ico: "hophan.jpg",
      content: "Blog IX."
    },
    {
      ico: "kurisu.jpg",
      content: "Blog X."
    }
  ]
};

function initData() {
  const data = _.extend(DEFAULT_DATA, {});
  _.forEach(data.items, (item, i) => {
    item.key = i;
    item.color = nextColor();
    item.digestPos = 40;
    item.direction = "left";
    item.tierable = true;
    item.emphasizable = true;
  });
  return data;
}

const nextColor = (function() {
  let idx = -1;
  return function() {
    ++idx > util.DEFAULT_COLOR.length && (idx = 0);
    return util.DEFAULT_COLOR[idx];
  };
})();

export default {
  initData: initData
};
