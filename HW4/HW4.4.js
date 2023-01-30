function showUser(id){
    try {
        if(id>0){
            return {'id': id}            
         }else{
            return error
         }
    } catch (error) {
        return(`ID must not be negative: ${id}`)
    }
}
console.log(showUser(5))

function showUsers(ids){
    let result=[]
    ids.forEach(element => {
        result.push(showUser(element))
    });
    return result
}

console.log(showUsers([7, -12, 44, 22]))