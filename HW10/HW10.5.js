let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder(keys, values){
let result = new Map()
for( let i=0; i<keys.length; i++){
    map.set( keys[i], values[i])
} 
return result 
}
let map = mapBuilder(keys, values)
console.log(map.size); // 4
	console.log(map.get(2))