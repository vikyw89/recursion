import { fibs, fibsRec } from "./modules/fibonacci.js"
import { mergeSort } from "./modules/mergeSort.js"

let fibsInput = 4000
console.time(`generating ${fibsInput} fibs using iteration`)
const iterativeFibs = fibs(fibsInput)
console.timeEnd(`generating ${fibsInput} fibs using iteration`)

console.time(`generating ${fibsInput} fibs using recursion`)
const recursiveFibs = fibsRec(fibsInput)
console.timeEnd(`generating ${fibsInput} fibs using recursion`)

let arrayInput = 1000
// console.time(`populating ${arrayInput} array`)
let randomArray = []
for (let i = 0; i < 50000; i++){
    randomArray.push(Math.floor(Math.random() * 10000))
}
// console.timeEnd(`populating ${arrayInput} array`)

console.time(`sorting ${arrayInput} array using mergeSort recursively`)
const sortedArray = mergeSort(randomArray)
// console.log({sortedArray})
console.timeEnd(`sorting ${arrayInput} array using mergeSort recursively`)