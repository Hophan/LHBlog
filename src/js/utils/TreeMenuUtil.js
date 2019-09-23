import _ from "lodash";

const MAX_MENU_NUM = 10;

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
  root: {
    ico: "hophan.jpg",
    content: "Hophan's main page.",
    children: [
      {
        ico: "rio.jpg",
        content: "Hophan's blogs.",
        children: [
          {
            ico: "",
            content: "Blog I.",
            children: []
          },
          {
            ico: "",
            content: "Blog II.",
            children: []
          },
          {
            ico: "",
            content: "Blog II.",
            children: []
          },
          {
            ico: "",
            content: "Blog IV.",
            children: []
          },
          {
            ico: "",
            content: "Blog V.",
            children: []
          }
        ]
      },
      {
        ico: "kurisu.jpg",
        content: "Hophan's games.",
        children: []
      }
    ]
  }
};

function initData() {
  const data = _.extend(DEFAULT_DATA, {});
  data.switching = false;
  data.header = data.root;
  data.expand = false;
  data.expanding = false;
  data.expandTarget = false;
  data.root.parent = data.root;
  data.list = listItems(data.root, -1);
  data.display = [data.root].concat(data.root.children);
  _.forEach(data.display, item => (item.show = true));
  return data;
}

function listItems(parent, key) {
  let items = [parent];
  parent.key = key + 1;
  parent.expand = false;
  parent.color = nextColor();
  _.forEach(parent.children, item => {
    item.expand = false;
    item.parent = parent;
    item.show = false;
    items = items.concat(listItems(item, key + items.length));
  });
  return items;
}

const mockItem = (function() {
  return {
    key: "mock",
    color: "gray",
    show: true,
    ico: "",
    content: "",
    children: []
  };
})();

const nextColor = (function() {
  let idx = -1;
  return function() {
    ++idx > DEFAULT_MENU_COLOR.length && (idx = 0);
    return DEFAULT_MENU_COLOR[idx];
  };
})();

export default {
  mockItem: mockItem,
  nextColor: nextColor,
  MAX_ITEM_NUM: MAX_MENU_NUM,
  initData: initData
};
