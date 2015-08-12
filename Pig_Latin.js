function translate(string) {
  string = string.split('');
  var vowelMatch = /[aeiou]/;
 
  if (vowelMatch.test(string[0])) {
    return string.join('') + 'way';
  }
 
  while (true) {
    if (!vowelMatch.test(string[0])) {
      string.push(string.splice(0, 1));
    } else {
      break;
    }
  }
  return string.join('') + 'ay';
}

translate("clonsonant");