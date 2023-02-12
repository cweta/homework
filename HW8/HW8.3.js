let str="cdbBdbsbz";
let regExp=/[[d][b]+[d]/i;
let result=regExp.exec(str);
if(result[0]){
    let regExp2=/b+/i;
    let regExp3=/d$/;
    let elem=regExp2.exec(result[0])
    let elem2=regExp3.exec(result[0])
    let arr = [result[0], elem[0], elem2[0]]
    console.log(arr)
}