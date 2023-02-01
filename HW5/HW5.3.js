let person={
    firstName: "Василий",
    surname: "Петров",
    patronym: "Иванович"
 } 
    function showFullName(firstPart,lastPart){
        alert(this[firstPart]+ " "+ this[lastPart])