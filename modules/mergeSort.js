const mergeSort = (arr) => {
    // break case
    if (arr.length === 1) {
        return [arr[0]]
    }
    // recursion case (split array into 2 then sort it)
    let left = arr.slice(0,Math.ceil(arr.length / 2))
    let right = arr.slice(Math.ceil(arr.length / 2))
    let sortedLeft = mergeSort(left)
    let sortedRight = mergeSort(right)
    let result = []
    sorting:
    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case !sortedLeft[0]:
                result.push(...sortedRight)
                break sorting
            case !sortedRight[0]:
                result.push(...sortedLeft)
                break sorting
            case sortedLeft[0] <= sortedRight[0]:
                result.push(sortedLeft[0])
                sortedLeft.shift()
                break
            case sortedRight[0] <= sortedLeft[0]:
                result.push(sortedRight[0])
                sortedRight.shift()
                break
        }
    }
    return result
}

export { mergeSort }
