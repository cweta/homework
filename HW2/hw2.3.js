let randomElements=["5680"," Hello world! ","1||2 ",null]
alert(randomElements.length);

let newElement=prompt("Enter a new value!")
console.log(newElement);

randomElements.push(newElement);

let firstElement=randomElements.shift();
alert(randomElements);


