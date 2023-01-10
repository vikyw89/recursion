let result

// const sumRange = (number) => {
//     // base case
//     if (number === 1) {
//         return 1
//     }
//     let result = number + sumRange(number - 1)
//     console.log(result)
//     return result
// }

// result = sumRange(3)

// const power = (base,exponent) => {
//     // base case
//     if (exponent === 0) {
//         return 1
//     }
//     // recursion
//     let result = base * power(base, exponent - 1)
//     return result
// }

// result = power(2,0)

// const factorial = (number) => {
//     // base case
//     if (number === 1) {
//         return number
//     }
//     // recursion
//     let result = number * factorial(number - 1)
//     return result
// }

// result = factorial(5)

// const all = (array, fn) => {
//     // base case
//     if (array.length === 0) {
//         return true
//     } else if (!fn(array[0])) {
//         return false
//     }
//     // recursion
//     let temp = array.slice(1)
//     return all(temp, fn) 
// }

// let allAreLessThanSeven = all([1,5,4], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false

// const productOfArray = (arr) => {
//     // base case
//     if (arr.length === 1) {
//         return arr[0]
//     }
//     // recursion
//     let temp = [...arr]
//     return temp.shift() * productOfArray(temp) 
// }

// let six = productOfArray([1,2,3]) // 6
// let sixty = productOfArray([1,2,3,10]) // 60

// console.log(six)
// console.log(sixty)

// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// const contains = (obj, searchValue) => {
//     // recursion
//     for (let key in obj) {
// 		if(typeof obj[key] === 'object'){
// 			return contains(obj[key], searchValue);
// 		}
//     }
//     // break case
//     if (Object.values(obj).filter(item=> item === searchValue).length === 1){
//         return true
//     } else {
//         return false
//     }
// }

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false

// console.log(hasIt)
// console.log(doesntHaveIt)

// const totalIntegers = (arr) => {
//     // break case
//     if (arr.length === 0){
//         return 0
//     }
//     // recursion
//     let result = 0
//     for (let value of arr) {
//         if (typeof(value) === 'object') {
//             result += totalIntegers(value)
//         } else if (typeof(value) === 'number'){
//             result += 1
//         }
//     }
//     return result
// }
// console.log(totalIntegers([2,[1,[1]]]))
// let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log(seven)


// const SumSquares = (arr) => {
//     console.log(arr)
//     // break case
//     if (arr.length === 0) {
//         return 0
//     }
//     // recursion
//     let result = 0
//     for (let value of arr) {
//         if (typeof(value) === 'number') {
//             result += value * value
//         } else if (typeof(value) === 'object') {
//             result += SumSquares(value)
//         }
//     }
//     return result
// }


// var l = [1,2,3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1,2],3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1 = 1

// l = [10,[[10],10],[10]] 
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

// const replicate = (a,b) => {
//     // break case
//     if (a < 1) {
//         return []
//     }
//     // recursion
//     return [b].concat(replicate(a-1, b))
// }

// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []

// write fibs using iteration

// const fibs = (number) => {
//     let array = [0,1]
//     for (let i = 0; i < number-2; i++) {
//         array.push(array[array.length-2] + array[array.length-1])
//     }
//     return array
// }

// console.log(fibs(10))

// const fibsRec = (number) => {
//     // base case
//     if (number === 2) {
//         return [0,1]
//     }
//     // recursion case
//     let result = fibsRec(number-1)
//     return result.concat(result[result.length - 2] + result[result.length -1 ])
// }

// console.log(fibsRec(10))

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
    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case !sortedLeft[0]:
                result.push(sortedRight[0])
                sortedRight.shift()
                break
            case !sortedRight[0]:
                result.push(sortedLeft[0])
                sortedLeft.shift()
                break
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

console.dir(mergeSort([1,54,6,6,9,1,-2,6,70,282]))