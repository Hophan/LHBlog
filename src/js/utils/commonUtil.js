const DEFAULT_COLOR = [
  "#c23531",
  "#af5a5f",
  "#61a0a8",
  "#d48265",
  "#91c7ae",
  "#749f83",
  "#ca8622",
  "#bda29a",
  "#6e7074",
  "#546570"
];

export default {
  DEFAULT_COLOR: DEFAULT_COLOR,
  cacheFn(fn) {
    let cache = {};
    return function(arg) {
      let hit = cache[arg];
      return hit || (cache[arg] = fn(arg));
    };
  },
  throttleApply(fn, delay) {
    let timmer = undefined;
    return function() {
      if (timmer !== undefined) {
        clearTimeout(timmer);
      }
      let self = undefined,
        _arguments = [];
      if (arguments && arguments.length > 0) {
        _arguments = Array.from(arguments);
        self = _arguments.shift();
      }
      timmer = setTimeout(() => {
        fn.apply(self, _arguments);
        timmer = undefined;
      }, delay);
    };
  }
};
