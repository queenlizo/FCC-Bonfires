function largestOfFour(arr) {
  // You can do this!
  var largest = 0;
  var myArray = [];

  for (var i=0; i < arr.length; i++) {
    largest=0;
    for(var h=0; h < arr[i].length;h++){
    if (largest < arr[i][h]) {
      largest=arr[i][h];
      myArray[i] = arr[i][h];
      }
    }
    }
  return myArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);