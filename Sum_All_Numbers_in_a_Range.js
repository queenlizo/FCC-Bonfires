function sumAll(arr) {
    var highNum = Math.max(arr[0], arr[1]);
    var lowNum = Math.min(arr[0], arr[1]);
    var myArray = [];
    
    for (var i = lowNum; i <= highNum; i++) {
        myArray.push(i);
    }
    return(myArray.reduce(function (a,b) {
        return a+b;
    }));
}

sumAll([1, 4]);