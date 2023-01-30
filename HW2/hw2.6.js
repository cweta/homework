let a=prompt("side A")
console.log(a)
let b=prompt("side B")
console.log(b)
let c=prompt("side C")
console.log(c)

if(a>0 && b>0 && c>0){
let s=(a+b+c)*0.5
let s_Area=Math.sqrt(s*(s-a)*(s-b)*(s-c))
alert("Ttiand area is "+ s_Area.toFixed(3))
}
 eles {
  alert("unexpected result")
}
 if((a*a+b*b===c*c)||(b*b+c*c===a*a)||(c*c+a*a===b*b)){
  alert("is not rectangular");
} else {
   alert("unexpected result")
}