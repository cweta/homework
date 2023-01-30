function randArray(value, num) {
    let array = [];
    for (let i = 0; i < value; i++){
    array.push(Math.floor(Math.random()*num));
 }
return array
};

randArray(5,500)