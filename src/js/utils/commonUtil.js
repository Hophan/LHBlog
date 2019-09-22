export default {
  cacheFn: function(fn) {
    let cache = {};
    return function(arg) {
      let hit = cache[arg];
      return hit || (cache[arg] = fn(arg));
    };
  }
};
