function repeat(str, num) {
  // repeat after "me'
  var newString = "";
  if (num < 1) {
    return '';
  } else {
    for (i=0; i<num; i++) {
      newString = newString + str;
    }
  }
  return newString;
}

repeat('abc', 3);