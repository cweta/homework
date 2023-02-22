let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

let map = new Map()
for( let i=0; i<keys.length; i++){
    map.set( keys[i], values[i])
}
console.log(map.size); // 4
	console.log(map.get(2))