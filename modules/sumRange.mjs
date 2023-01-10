const sumRange = (number) => {
    // base case
    if (number === 1) {
        return 1
    }
    // recursive case
    return number + sumRange(number - 1)
}

export { sumRange }