// Write a function that takes one argument, a positive integer
// and returns a string of alternating '1's and '0's
// always starting with a '1'
// the length of the string should match the given integer

// Problem
// Input: a number (positive integer)
// Output: a string
// Rules:
// Output string length must match input number
// Output string must be made of alternating 1s and 0s
// Output string must always start with 1

// Examples
// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// Data structure
// This looks more like a looping structure
// Rather than necessarily iterating through a data structure
// Also, since we're working with mostly primitives
// I don't think I'll need an array or object here

// Algorithm
// Given a positive integer int
// Set count to 0
// Set outputStr to ""
// While count is less than int
// If count is even
// assign outputStr to outputStr + "1"
// otherwise
// assign outputStr to outputStr + "0"
// assign count to count + 1
// return outputStr

// Code
function stringy(int) {
  let count = 0;
  let outputStr = "";

  while (count < int) {
    if (count % 2 === 0) {
      outputStr += "1";
    } else {
      outputStr += "0";
    }
    count += 1;
  }
  return outputStr;
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
