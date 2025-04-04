// Write a function that takes a number as an argument.
// If the argument is a positive number, return the negative of that number.
// If the argument is a negative number, return it as-is.

// Problem
// Input: an integer (positive or negative)
// Output: a negative integer
// Rules:
// Output is the negative of input
// If input is already negative, return it
// Otherwise, return the negative version of the input num

// Examples
// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

// Data structure
// Since we're working exclusively with numbers, I don't think
// I'm going to need a data structure for this

// Algorithm
// Given an integer int
// Check if int is less than 0
// If true, return int
// If false, return int multiplied by -1

function negative(int) {
  return int < 0 ? int : int * -1;
}

console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0
