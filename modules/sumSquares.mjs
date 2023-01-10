const SumSquares = (arr) => {
    // base case
    if (arr.length === 0) {
        return 0
    }
    // recursive case
    let result = 0
    for (let value of arr) {
        if (typeof(value) === 'number') {
            result += value * value
        } else if (typeof(value) === 'object') {
            result += SumSquares(value)
        }
    }
    return result
}

export { SumSquares }