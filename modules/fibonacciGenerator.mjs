// generate fibs using iteration
const fibs = (number) => {
    let array = [0,1]
    for (let i = 0; i < number-2; i++) {
        array.push(array[array.length-2] + array[array.length-1])
    }
    return array
}

// generate fibs using recursion
const fibsRec = (number) => {
    // base case
    if (number === 2) {
        return [0,1]
    } else if (number === 1 ) {
        return [0]
    } else if (number === 0) {
        return []
    }
    // recursive case
    let result = fibsRec(number-1)
    return result.concat(result[result.length - 2] + result[result.length -1 ])
}

export { fibs,fibsRec }