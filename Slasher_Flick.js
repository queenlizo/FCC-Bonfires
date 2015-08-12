function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var myArray = arr.slice(howMany);
  myArray.splice();
  return myArray;
}

slasher([1, 2, 3], 2);