import util from "./commonUtil.js";
import _ from "lodash";

const VALUES = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SEPARATORS = [" ", ":", "-", "/"];

const calculators = {
  y0(date) {
    return Math.floor(date.getFullYear() / 1000);
  },
  y1(date) {
    return Math.floor(date.getFullYear() / 100) % 10;
  },
  y2(date) {
    return Math.floor(date.getFullYear() / 10) % 100;
  },
  y3(date) {
    return Math.floor(date.getFullYear()) % 10;
  },
  M0(date) {
    return Math.floor((date.getMonth() + 1) / 10);
  },
  M1(date) {
    return (date.getMonth() + 1) % 10;
  },
  d0(date) {
    return Math.floor(date.getDate() / 10);
  },
  d1(date) {
    return date.getDate() % 10;
  },
  H0(date) {
    return Math.floor(date.getHours() / 10);
  },
  H1(date) {
    return date.getHours() % 10;
  },
  m0(date) {
    return Math.floor(date.getMinutes() / 10);
  },
  m1(date) {
    return date.getMinutes() % 10;
  },
  s0(date) {
    return Math.floor(date.getSeconds() / 10);
  },
  s1(date) {
    return date.getSeconds() % 10;
  }
};

const format2Fields = util.cacheFn(function(format) {
  const fields = [];
  const holder2idx = {};
  _.forEach(format, holder => {
    if (holder2idx[holder] === undefined) {
      holder2idx[holder] = -1;
    }
    const value = `${holder}${++holder2idx[holder]}`;
    if (value in calculators || separatorField(value)) {
      fields.push(value);
    }
  });
  return fields;
});

const calculate = function(date, field) {
  if (!(date instanceof Date) || !(timeField(field) || separatorField(field))) {
    throw new Error("unrecognized arguments for calculate.");
  }
  if (separatorField(field)) {
    return field[0];
  }
  return calculators[field](date);
};

const timeValue = function(value) {
  return VALUES.indexOf(value) != -1;
};

const separatorValue = function(value) {
  return SEPARATORS.indexOf(value) != -1;
};

const timeField = util.cacheFn(function(field) {
  return /^[yMdHms]\d+$/.test(field);
});

const separatorField = util.cacheFn(function(field) {
  return /^[- :/]\d+$/.test(field);
});

const second0Exist = util.cacheFn(function(format) {
  return /^.*ss.*$/.test(format);
});

const isSecond0Field = function(field) {
  return field === "s1";
};

const internalRefresh = function(vm){
  function start() {
    vm.timmer = setInterval(function() {
      const postDate = new Date(new Date().getTime() + 500);
      second0Exist(vm.timeformat) &&
        (vm.$refs.s1[0].digestPos = vm.$refs.s1[0].digestPos === 0 ? 100 : 0);
      _.forEach(vm.fields, field => {
        const value = calculate(postDate, field);
        if (vm.$refs[field][0].fieldValue !== value) {
          !isSecond0Field(field) && (vm.$refs[field][0].digestPos = 0);
          setTimeout(() => {
            !isSecond0Field(field) && (vm.$refs[field][0].digestPos = 100);
            vm.$refs[field][0].fieldValue = value;
          }, 500);
        }
      });
    }, 500);
  }
  setTimeout(start, 1000 - (new Date().getTime() % 1000));
}

export default {
  calculate,
  timeValue,
  separatorValue,
  timeField,
  separatorField,
  second0Exist,
  isSecond0Field,
  format2Fields,
  internalRefresh
};
