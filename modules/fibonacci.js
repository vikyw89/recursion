// write fibs using iteration
const fibs = (number) => {
    let array = [0,1]
    for (let i = 0; i < number-2; i++) {
        array.push(array[array.length-2] + array[array.length-1])
    }
    return array
}

// write fibs using recursion
const fibsRec = (number) => {
    // base case
    if (number === 2) {
        return [0,1]
    }
    // recursion case
    let result = fibsRec(number-1)
    return result.concat(result[result.length - 2] + result[result.length -1 ])
}

export { fibs,fibsRec }