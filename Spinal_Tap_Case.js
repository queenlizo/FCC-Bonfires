function spinalCase(str) {
  var space = /[\ _]/gi;
  var lowCase = /([a-z])\w+/g;
  var upCase = /([A-Z])\w+/;
  var upCaseSplit = str.split(/(?=[A-Z])/g);
  var strSplit = " ";
  console.log(upCaseSplit);
  
    if(space.test(str) === true) {
        return str.toLowerCase().replace(space, '-');
    } else {
        return upCaseSplit.join(" ").toLowerCase().replace(space, '-');
    }
}

spinalCase('thisIsSpinalTap');