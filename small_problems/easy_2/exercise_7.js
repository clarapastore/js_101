// Exclusive or

// Write a function named xor
// That takes two arguments
// It returns true if exactly one of the arguments is truthy
// False otherwise

// Problem
// Input: two values
// Output: a boolean
// Rules: return value is true if one of
// the values is true and the other one is false
// If both are true, return false
// If both are false, return false

// Examples
// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true
// console.log(xor(0, false) === false);     // true
// console.log(xor(0, 0) === false);         // true

// Data structure
// This exercise is more about comparison,
// so I don't think I'll need a data structure

// Algorithm
// Given two values, val1 and val2
// If val2 is truthy and val2 is not truthy,
// or if val1 is not truthy and val2 is truthy, return true
// otherwise, return false

let xor = (val1, val2) => (val1 && !val2) || (!val1 && val2);

console.log(xor(5, 0) === true); // true
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false); // true
console.log(xor(true, true) === false); // true
console.log(xor(0, false) === false); // true
console.log(xor(0, 0) === false); // true
