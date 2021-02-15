// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function (obj) {

  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  }
  if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    return `[${obj.map(function (ele) {
      return stringifyJSON(ele);
    })}]`;

  } else {
    var objArray = [];
    for (var key in obj) {
      if (typeof obj[key] == 'function' || obj[key] === undefined) {
        continue;
      }
      objArray.push(`${stringifyJSON(key)}:${stringifyJSON(obj[key])}`);
    }
    return result = `{${objArray}}`;
  }
};