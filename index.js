import { fibs, fibsRec } from "./modules/fibonacciGenerator.mjs"
import { mergeSort } from "./modules/iterativeMergeSort.mjs"
import { recursiveMergeSort } from "./modules/mergeSort.mjs"
import { timSort } from "./modules/timSort.mjs"

// let fibsInput = 2
// console.time(`generating ${fibsInput} fibs using iteration`)
// const iterativeFibs = fibs(fibsInput)
// console.timeEnd(`generating ${fibsInput} fibs using iteration`)

// console.time(`generating ${fibsInput} fibs using recursion`)
// const recursiveFibs = fibsRec(fibsInput)
// console.timeEnd(`generating ${fibsInput} fibs using recursion`)

let arrayInput = 100000
// console.time(`populating ${arrayInput} array`)
let randomArray = []
for (let i = 0; i < arrayInput; i++){
    randomArray.push(Math.floor(Math.random() * 10000))
}
let randomArray2 = [...randomArray]
// console.timeEnd(`populating ${arrayInput} array`)

console.time(`sorting ${arrayInput.toLocaleString()} array using mergeSort iteratively`)
const sortedArray = mergeSort(randomArray)
console.timeEnd(`sorting ${arrayInput.toLocaleString()} array using mergeSort iteratively`)
// console.log({sortedArray})

console.time(`sorting ${arrayInput.toLocaleString()} array using mergeSort recursively`)
const sortedArray2 = recursiveMergeSort(randomArray2)
console.timeEnd(`sorting ${arrayInput.toLocaleString()} array using mergeSort recursively`)
// console.log({sortedArray2})

// console.time(`sorting ${arrayInput.toLocaleString()} array using timSort`)
// const sortedArray2 = timSort(randomArray2, randomArray2.length)
// console.timeEnd(`sorting ${arrayInput.toLocaleString()} array using timSort`)
// console.log({sortedArray2})