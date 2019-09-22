import util from "../js/utils/commonUtil.js";

const DEFAULT_MENU_CLOLR = [
  "#c23531",
  "#2f4554",
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

export default util.cacheFn(function() {
  const data = {
    items: []
  };
  const addItems = () => {
    data.items.length < 10 &&
      (data.items.push({
        description: `Item No.${data.items.length}`,
        key: data.items.length,
        color: DEFAULT_MENU_CLOLR[data.items.length],
        active: false
      }),
      addItems());
  };
  addItems();
  return data;
});
