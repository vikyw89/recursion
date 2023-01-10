const all = (array, fn) => {
    // base case
    if (array.length === 0) {
        return true
    } else if (!fn(array[0])) {
        return false
    }
    // recursive case
    return all(array.slice(1), fn) 
}

export { all }