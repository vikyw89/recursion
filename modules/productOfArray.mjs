const productOfArray = (arr) => {
    // base case
    if (arr.length === 1) {
        return arr[0]
    }
    // recursive case
    let temp = [...arr]
    return temp.shift() * productOfArray(temp) 
}

export { productOfArray }