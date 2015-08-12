function where(arr, num) {
  // Find my place in this sorted array.
  arr = arr.concat(num).sort();
  myArray = [];
  for (var i = 0; i < arr.length; i++){
    myArray = arr.indexOf(num);
  }

  return myArray;
}

where([40, 60], 50);