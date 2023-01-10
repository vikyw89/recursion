const replicate = (times, content) => {
    // base case
    if (times < 1) {
        return []
    }
    // recursive case
    return [content].concat(replicate(times-1, content))
}

export { replicate }