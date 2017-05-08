// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var finalResults = [];

  function searchChildren(node) {
    if (!node.hasChildNodes) {
      if (node.className.includes(className)) {
        finalResults.push(node);
      }
    } else {
      if (node.className.includes(className)) {
        finalResults.push(node);
      }
      for (var i = 0; i < node.children.length; i++) {
        searchChildren(node.children[i]);
      }
    }
  }
  searchChildren(document.body);
  return finalResults;
};
