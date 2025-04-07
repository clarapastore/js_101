// A double number is an even length number whose left-side digits
// Are exactly the same as its right side digits
// For example, 44, 3333, 103103 and 7676 are all double numbers
// Whereas 444, 334433 and 107 are not

// Write a function that returns the number provided as an argument
// multiplied by two, unless the argument is a double number
// in which case return the double number as is

// Problem
// Input: a positive integer
// Output: the input integer (if it's a double number),
// otherwise, the input integer multiplied by two
// Rules: a double number is a number that has the same digits on its left side
// As the digits on the right side
// Question: how you you figure out if a number is a double number?
// The first thing is that it has to have even digits (2, 4, 6, etc)
// Then, you compare the right side and the left side
// If they are the same, then it's a double number

// Examples
// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

// Data structures
// I'm not sure I will need a data structure for this

// Algorithm
// Given a positive integer int
// Set intString to int coerced into the string
// If the length of the intString is even
// Set leftDigits to the substring of intString
// starting from index 0 to index of the length of intString / 2
// Set rightDigits to the substring of intString
// starting from index of the length of intString / 2
// to the end of the intString
// if leftDigits and rightDigits are the same
// return int
// otherwise, return int * 2

// Code

function twice(int) {
  let intString = int.toString();
  if (intString.length % 2 === 0) {
    let leftDigits = intString.substring(0, intString.length / 2);
    let rightDigits = intString.substring(intString.length / 2);
    return leftDigits === rightDigits ? int : int * 2;
  } else {
    return int * 2;
  }
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676
