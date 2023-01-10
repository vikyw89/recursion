const totalInteger = (arr) => {
    // base case
    if (arr.length === 0){
        return 0
    }
    // recursive case
    let result = 0
    for (let value of arr) {
        if (typeof(value) === 'object') {
            result += totalInteger(value)
        } else if (typeof(value) === 'number'){
            result += 1
        }
    }
    return result
}

export { totalInteger }