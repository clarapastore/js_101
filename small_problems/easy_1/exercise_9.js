// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752,
// which was a leap year. Prior to 1752, they used the Julian Calendar.
//  Under the Julian Calendar, leap years occur in any year
// that is evenly divisible by 4.

// Using this information, update the function from
// the previous exercise to determine leap years both before and after 1752.

// Problem:
// Update the function so that:
// If the year is less than 1752
// and if the year is divisible by 4, then it's a leap year
// Otherwise, do your normal check

// Examples:

// Data Structure

// Algorithm

// Code
function isLeapYear(year) {
  if (year < 1752) {
    return year % 4 === 0;
  } else {
    return (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  }
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
console.log(isLeapYear(1700)); // true
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // true
console.log(isLeapYear(400)); // true
