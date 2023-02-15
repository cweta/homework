let data =  new Date()
let timeNow = data.getHours()

if (timeNow >= 23 && timeNow <= 5) {
    alert("Good night!")
} else {
    if (timeNow >= 5 && timeNow <= 11) {
        alert("Good morning!")
    }
}
if ( timeNow >=11 && timeNow <= 17) {
    alert("Good afternoon!")
} else{
    if ( timeNow >= 17 && timeNow <=23) {
        alert("Good evening!")
    }
}
