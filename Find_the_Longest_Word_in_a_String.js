function findLongestWord(str) {
  var strArray = str.split(" ");
  var count = 0;
  for(var i = 0; i < strArray.length; i++){
    if(strArray[i].length > count){
        count = strArray[i].length;
         
    }
  }    
 return count;
}

findLongestWord('The quick brown fox jumped over the lazy dog');