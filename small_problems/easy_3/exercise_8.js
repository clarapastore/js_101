// Write a function that determines the mean (average) of the three scores
// passed to it
// and returns the letter associated with that grade

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

// Tested values are all between 0 and 100.
// There is no need to check for negative values or values greater than 100.

// Problem
// Input: 3 integers, between 0 and 100 inclusive
// Output: a string. "A", "B", "C", "D", "F"
// Rules: calculate the average of the 3 numerical inputs
// If the result of the calculation is between 0 (inclusive) and 60 (exclusive)
// Return "F"
// If the result of the calculation is between 60 (inclusive) and 70 (exclusive)
// Return "D"
// If the result of the calculation is between 70 (inclusive) and 80 (exclusive)
// Return "C"
// If the result of the calculation is between 80 (inclusive) and 90 (exclusive)
// Return "B"
// If the result of the calculation is between 90 (inclusive)
// and 100 (inclusive)
// Return "A"

// Examples:
// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

// Data structure
// I don't think I'm going to need a data structure for this

// Algorithm:
// Given positive integers grade1, grade2, grade3 between 0 and 100 (inclusive)
// Set average to (grade1 + grade2 + grade3) / 3
// If average is between 0 (inclusive) and 60 (exclusive)
// Return "F"
// If average is between 60 (inclusive) and 70 (exclusive)
// Return "D"
// If average is between 70 (inclusive) and 80 (exclusive)
// Return "C"
// If average is between 80 (inclusive) and 90 (exclusive)
// Return "B"
// If average is between 90 (inclusive) and 100 (inclusive)
// return "A"

// Code
function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else return "F";
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
