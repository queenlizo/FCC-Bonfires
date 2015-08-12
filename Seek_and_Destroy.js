function destroyer(arr) {
  var toRemove = [];
  
  for (var i = 1; i < arguments.length; i++) {
    toRemove.push(arguments[i]);
  }
  
  // Remove all the values
  return arr.filter(function(value) {
    return toRemove.indexOf(value) < 0;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);