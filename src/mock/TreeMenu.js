/* eslint-disable prettier/prettier */
import util from "../js/utils/commonUtil.js";
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
    leaf: false,
    ico: "hophan.jpg",
    content: "Hophan's main page.",
    children: [
      {
        leaf: false,
        ico: "rio.jpg",
        content: "Hophan's blogs.",
        children: [
          {
            active: false,
            leaf: false,
            ico: "",
            content: "Blog I.",
            children: []
          },
          {
            leaf: false,
            ico: "",
            content: "Blog II.",
            children: []
          },
          {
            leaf: false,
            ico: "",
            content: "Blog II.",
            children: []
          },
          {
            leaf: false,
            ico: "",
            content: "Blog IV.",
            children: []
          },
          {
            leaf: false,
            ico: "",
            content: "Blog V.",
            children: []
          }]
      },
      {
        leaf: false,
        ico: "kurisu.jpg",
        content: "Hophan's games.",
        children: []
      }]
  }
};

export default {
  mock: util.cacheFn(function () {
    const data = _.extend(DEFAULT_DATA, {});
    return data;
  }),
  MAX_ITEM_NUM: MAX_MENU_NUM,
  mockItem: (function () {
    return {
      key: 'mock',
      color: 'gray',
      active: false,
      show: true,
      leaf: true,
      ico: "",
      content: "",
      children: []
    }
  }()),
  nextColor: (function () {
    let idx = -1;
    return function () {
      ++idx > DEFAULT_MENU_COLOR.length && (idx = 0);
      return DEFAULT_MENU_COLOR[idx];
    }
  }())
};
