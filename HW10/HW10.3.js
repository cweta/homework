function mul(...manyMore) {
    let result = 1
    for( let i = 0; i< manyMore.length; i++){
    if( typeof manyMore[i] === 'number'){
        result *= manyMore[i]
    }
    }
    return result
  }
  console.log(mul(1, "str", 2, 3, true))
  console.log(mul(null, "str", false, true))