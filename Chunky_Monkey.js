function chunk(arr, size) {
  // Break it up. 
  var myArray = [];
  for (var i=0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i+size));
  }
  if (arr.length) {
    myArray.push();
  }
  return myArray;
}

chunk(['a', 'b', 'c', 'd'], 2)