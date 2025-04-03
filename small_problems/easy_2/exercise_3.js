// Create a function that takes two arguments,
// multiplies them together, and returns the result.

// Problem
// Input: two arguments of type number
// Output: a number. The multiplication of the two arguments
// Rules: the output must be the multiplication of the numbers
// Questions: do I have to take into account floats?
// Not sure, example doesn't show it so I'm going to
// assume that arguments are integers

// Example
// console.log(multiply(5, 3) === 15); // logs true

// Data Structure
// Since it's just handling primitives (in this case, numbers)
// I'm not going to need a data structure for this

// Algorithm
// Given two integers, num1 and num2
// Set result to multiplication of num1 and num2
// Return result

// Code

function multiply(num1, num2) {
  return num1 * num2;
}

// Tests
console.log(multiply(5, 3) === 15); // logs true
