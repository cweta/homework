//1_1
const newArray=[2,3,4,5]
    let sum=1;
    for(let i=0; i<newArray.length;i++){
    sum=sum*newArray[i]
        console.log(sum)
}
console.log(sum)




//1_2
const newArray=[2,3,4,5];
let i=newArray.length-1
let sum=1
while(i>=0){
    sum=sum*newArray[i]
    i--
    console.log(sum)
}
console.log(sum)