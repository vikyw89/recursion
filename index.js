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

const replicate = (a,b) => {
    // break case
    if (a < 1) {
        return []
    }
    // recursion
    return [b].concat(replicate(a-1, b))
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []