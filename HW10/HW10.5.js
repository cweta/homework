let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
 
let keysArray = Object.entries(keys)
console.log(keysArray)
let valuesArrays = Object.entries(values)
console.log(valuesArrays)

let map = new Map(Object.entries(keysArray))
console.log(map)

let map= new Map([
    [keys, values]
])
map.forEach((value, key) =>{
    console.log(value, key)
})