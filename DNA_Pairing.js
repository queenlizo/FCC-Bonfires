function pair(str) {
  var finalArray=[];
    
  for(var i=0;i<str.length;i++){
    var tmpArray=[];
    var currentCharacter=str[i];

    tmpArray.push(currentCharacter);
    switch(currentCharacter) {
        case "A":
        tmpArray.push("T");
        break;
        
        case "T":
        tmpArray.push("A");
        break;
        
        case "C":
        tmpArray.push("G");
        break;
        
        case "G":
        tmpArray.push("C");
        break;
        
      default:
        break;
    }    
    finalArray.push(tmpArray);
  }  
  return finalArray;
}
console.log(pair("GCG"));
pair("GCG");