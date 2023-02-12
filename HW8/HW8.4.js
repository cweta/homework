let reg=/([A-Za-z]+)\s([A-Za-z]+)/
let str = "Java Script"
let newstr=str.replace(reg,'$2, $1')
console.log(newstr)
