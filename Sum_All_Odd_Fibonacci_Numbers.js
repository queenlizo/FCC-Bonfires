function sumFibs(num) {
    var fibArr = [],
    i = 0,
    j = 1;
    
    fibArr.push(i);
    fibArr.push(j);
    
    while (fibArr[j] + fibArr[i] <= num) {
            fibArr.push(fibArr[j] + fibArr[i]); 
                j++;
                i++;       
    }
  	
  	var sum = 0;
    for (var k = 0; k < fibArr.length; k++) { 
            if (fibArr[k]%2 !== 0) {  
                sum = sum + fibArr[k];
            }
    }
    return sum;
} 

sumFibs(12);