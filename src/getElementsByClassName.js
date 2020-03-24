// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
 var getElementsByClassName = function(className) {
  var result = [];

  var classElements = function(item) {
    if (item.classList && item.classList.contains(className)) {
      result.push(item);
    }

    if (item.childNodes) {
      item.childNodes.forEach(function(child) {
        classElements(child);
      });
    }
  }

  classElements(document.body);

  return result;
 };