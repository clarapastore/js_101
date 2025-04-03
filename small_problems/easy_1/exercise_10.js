// Write a function that computes the sum
// of all numbers between 1 and some other number, inclusive,
// that are multiples of 3 or 5.
// For instance, if the supplied number is 20,
// the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Problem
// Input: a number type. Integer, greater than 1
// Output: a number type. The sum of all numbers between 1 and input
// that are multiples of 3 or 5
// Rules: input will be positive integer, greater than 1
// Input is included in the sum if it's a multiple of 3 or 5
// Multiple of 3 means that if we divide input by 3, remainder is 0
// Multiple of 5 means that if we divide input by 5, remainder is 0

// Examples
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// Data Structure
// This looks like something that can be solved with a looping mechanism
// Unless I want to solve this using things like reduce,
// I can forego data structures

// Algorithm
// Given a positive integer greater than one int
// Set iterator variable to 1
// Set sum variable to 0
// While iterator is less than or equal int
// If the remainder of iterator / 3 is 0
// Reassign sum to sum + iterator
// Else if the remainder of iterator / 5 is 0
// Reassign sum to sum + iterator
// Else do nothing
// Reassign iterator to iterator + 1
// Return sum

// Code

function multisum(int) {
  let sum = 0;
  for (let count = 1; count <= int; count += 1) {
    if (count % 3 === 0 || count % 5 === 0) {
      sum += count;
    }
  }
  return sum;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168
