let lastElem = function (arr, count) {
    if (isNaN(+count)) {
      return arr[arr.length - 1];
    } else{
        if(count>=arr.length){
            return arr 
        } else{
            return arr.slice(-count)
        }
    }
  };
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

