

function calcRectangleArea(){
    let width=+prompt("введіть ширину")
    let height=+prompt("введіть висоту")
    if(typeof width == "number" && typeof height == "number" && width>0 && height>0){
        return width*height
    }else{
        return "Введіть коректні дані"
    }
}

console.log(calcRectangleArea())
