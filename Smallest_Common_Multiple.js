function smallestCommons(arr) {

  	var highNum = Math.max(arr[0], arr[1]);
    var lowNum = Math.min(arr[0], arr[1]);
    var myArray = [];
    
    for (var i = lowNum; i <= highNum; i++) {
        myArray.push(i);
    }
        console.log(myArray);
  	

  	for(var k, j, n, d, r = 1; (n = myArray.pop()) != undefined;)
        while(n > 1){
            if(n % 2){
                for (k = 3, j = Math.floor(Math.sqrt(n)); k <= j && n % k; k += 2);
                d = k <= j ? k : n;
            }
            else
                d = 2;
            for(n /= d, r *= d, k = myArray.length; k; !(myArray[--k] % d) && (myArray[k] /= d) == 1 && myArray.splice(k, 1));
        }
    return r;
     }
    
smallestCommons([13,1]);
