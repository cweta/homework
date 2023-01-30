function findMin(){
    console.log(arguments);
    let min = arguments[0];
     for (const funRandomElement of arguments) {
           if (funRandomElement < min) ;
        };     
         return min;
     };
     const min = findMin(1,2,3,4,5,6,7,8,9,10);
    console.log("min ",min);
 