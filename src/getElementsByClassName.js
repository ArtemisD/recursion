// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];

  function searchChildren(node) {
    //if node has a class list
    if (node.classList) {
      //check if node classList contains className
      if (node.className.includes(className)) {
        //if it does, push that node to results
        results.push(node);
      }
    }
    //if that node has childNodes
    if (node.childNodes)
    //use a for loop to check if node has children
      for (var i = 0; i < node.childNodes.length; i++) {
        //if it does, recursively check if those children have children
        searchChildren(node.childNodes[i]);
      }
    }
    //call function on entire document.body to start and ensure all nodes are checked
  searchChildren(document.body);
  //return all nodes that contain passed in className
  return results;
};
