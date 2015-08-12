function where(collection, source) {
  var myArray = [];
  // What's in a name?
  for (var i=0; i<collection.length; i++) {
      if (collection[i][Object.keys(source)] === source[Object.keys(source)]) {
          myArray.push(collection[i]);
      }
  }
  return myArray;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });