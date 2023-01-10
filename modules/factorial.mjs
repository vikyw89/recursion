const factorial = (number) => {
    // base case
    if (number === 1) {
        return number
    }
    // recursive case
    return number * factorial(number - 1)
}

export { factorial }