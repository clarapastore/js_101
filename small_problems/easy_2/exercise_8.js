// Write a function that contains every other element of an array
// that is passed in as an argument
// The values in the returned list should be those values
// that are in the 1st, 3rd, 5th, and so on elements of the argument Array

// Problem
// Input: An array
// Output: an array
// Rules: The output array should contain
//  only the elements at even indeces of the input array

// Examples
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// Data structure
// Since we're working with arrays and the operation looks like
// it involves looping, I will use array iteration methods for this

// Algorithm
// Given an array of elements arr
// Set filteredArr to []
// Set iterator to 0
// While iterator is less than length of arr
// If iterator is even, access element of arr at index iterator
// add the element accessed to filteredArr
// set iterator to iterator + 1
// return filteredArr

function oddities(arr) {
  return arr.filter((_, ind) => ind % 2 === 0);
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
