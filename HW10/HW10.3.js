function mul(...manyMore) {
    let data = false
    let result = 1
    for( let i = 0; i< manyMore.length; i++){
    if( typeof manyMore[i] === 'number'){
        result *= manyMore[i]
        data = true
    }
    }
    return data ? result : 0
  }
  console.log(mul(1, "str", 2, 3, true))
  console.log(mul(null, "str", false, true))