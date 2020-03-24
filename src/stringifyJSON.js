// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';

  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  if ((typeof obj === 'function') || (obj === undefined)) {
    return null;
  }
  if ((typeof obj !== 'object') || (obj === null)) {
    return String(obj);
  }

  if (Array.isArray(obj)) {
    result += '[';
    result += obj.map(
        function(item) {
          return stringifyJSON(item);
        }).join(',');
    result += ']';

  }

  if (!Array.isArray(obj))  {
    result += '{';
    result += Object.entries(obj).map(
      function([key, item]) {
        item = stringifyJSON(item);
        if (item === null) {
          return null;
        }
      return `"${key}":${item}`;
    }).filter(
      function(item) {
        return item !== null;
    }).join(',');

    result += '}';
  }

  return result;
};
