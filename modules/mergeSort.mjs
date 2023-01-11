const recursiveMergeSort = (arr) => {
    // base case
    if (arr.length === 1) {
        return [arr[0]]
    }
    // recursive case
    let left = arr.slice(0,Math.ceil(arr.length / 2))
    let right = arr.slice(Math.ceil(arr.length / 2))
    let sortedLeft = recursiveMergeSort(left)
    let sortedRight = recursiveMergeSort(right)
    let sorted = []
    sorting:
    for (let i = 0; i < Infinity; i++) {
        switch (true) {
            case !sortedLeft[0]:
                sorted.push(...sortedRight)
                break sorting
            case !sortedRight[0]:
                sorted.push(...sortedLeft)
                break sorting
            case sortedLeft[0] <= sortedRight[0]:
                sorted.push(sortedLeft[0])
                sortedLeft.shift()
                break
            case sortedRight[0] <= sortedLeft[0]:
                sorted.push(sortedRight[0])
                sortedRight.shift()
                break
        }
    }
    return sorted
}

export { recursiveMergeSort }
