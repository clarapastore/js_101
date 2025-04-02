// In the modern era under the Gregorian Calendar,
// leap years occur in every year that is evenly divisible by 4,
// unless the year is also divisible by 100.
// If the year is evenly divisible by 100, then it is not a leap year,
// unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0.
// Write a function that takes any year greater than 0 as input
// and returns true if the year is a leap year,
//  or false if it is not a leap year.

// Problem
// Input: a positive integer, greater than 0 (starting from 1)
// Output: a boolean, true if integer is leap year, false if it's not
// Rules:
// A leap year is every year that can be divided by 4 and not by 100, or
// A year that can be divided by 100 and by 400
// Assuming this is true for every year greater than 0
// Questions
// What does it mean to be divisible by a number?
// It means that the division between those two numbers returns a remainder of 0
// For example, the remainder of dividing 2016 by 4 is 0.
// This means that 2016 is divisible by 0

// Examples
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// Data structure
// Not needed

// Algorithm
// Given an integer greater than 0
// Check if the integer can be divided by 4 and cannot be divided by 100
// if true, return true
// otherwise, check if the integer can be divided by 100
// and can be divided by 400
// if true, return true
// otherwise, return false

function isLeapYear(year) {
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
}

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // false
console.log(isLeapYear(400)); // true
