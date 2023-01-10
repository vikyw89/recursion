const power = (base,exponent) => {
    // base case
    if (exponent === 0) {
        return 1
    }
    // recursive case
    return base * power(base, exponent - 1)
}

export { power }