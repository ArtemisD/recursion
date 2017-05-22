// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  //check if obj is a number or boolean
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    //if it is, return obj as a string
    return '' + obj;
  }

  //check if obj is a string
  if (typeof obj === 'string') {
    //if it is a string, return that obj as a string
    return '"' + obj + '"';
  }
  //check if obj is null, undefined, or a function
  if (obj === null || typeof obj === undefined || typeof obj === 'function') {
    //if it is null, return null as a string
    return 'null';
  }
  //check if obj is an array
  if (Array.isArray(obj)) {
    //if it is, initiate temp array to store stringified values of array
    var result = [];
    //iterate through every element in array
    obj.forEach(function(element) {
      //recursively call function for every element in array
      result.push(stringifyJSON(element));
    });
    //join temp array and return array as a string
    return '[' + result.join(',') + ']';
  }
  //check if obj is an object
  if (typeof obj === 'object') {
    // if it is, initiate temp array to store stringified values of obj
    var result = [];
    for (var key in obj) {
      //recursively call function on every key & value (ignore if value is undefined or a function)
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        //push every key:value pair to temp array
        result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }
    //join temp array and return obj as a stirng
    return '{' + result.join(',') + '}';
  }

};
