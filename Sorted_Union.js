function unite(arr1, arr2, arr3) {
    var flattened = arr1.concat(arr2, arr3);
    var myArray = [];
    var merge = function(coll,item) {
        if (coll.indexOf(item) < 0)
            coll.push(item);
            return coll;
        };
    arr1 = arr2.reduce(merge, arr1);
    arr1 = arr3.reduce(merge, arr1);
  return arr1;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);