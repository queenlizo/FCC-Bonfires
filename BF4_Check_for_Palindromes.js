function palindrome(str) {
  // Good luck!
  var newStr = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  return newStr == newStr.split('').reverse().join('');
}




palindrome("Eve");