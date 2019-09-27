import _ from "lodash";

const DEFAULT_MENU_COLOR = [
  "#c23531",
  "#af5a5f",
  "#61a0a8",
  "#d48265",
  "#91c7ae",
  "#749f83",
  "#ca8622",
  "#bda29a",
  "#6e7074",
  "#546570",
  "#c4ccd3"
];

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
  _.forEach(data.items, item => {
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
    ++idx > DEFAULT_MENU_COLOR.length && (idx = 0);
    return DEFAULT_MENU_COLOR[idx];
  };
})();

export default {
  initData: initData
};
