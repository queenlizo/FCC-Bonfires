function titleCase(str) {
  var strArray = str.toLowerCase().split("");
 
  for (var i = 0; i < strArray.length; i++){ 
    if (i === 0){
      strArray[i]= strArray[i].toUpperCase();
     }
     else if (strArray[i] === " "){
      strArray[i+1] = strArray[i+1].toUpperCase();
     }
     else {
       continue;
     }
   }
  return strArray.join('');
}

titleCase("I'm a little tea pot");