// Write a function that takes a year as input
// and returns the century
// the return value should be a string
// that begins with the century number
// and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number
// New centuries begin in years that end with 01.
// So, the years 1901 - 2000 comprise the 20th century.

// Problem
// Input: a number indicating a year (a positive integer)
// Output: a string, indicating the century number
// Rules: string must be appended by 'st', 'nd', 'rd',
//  or 'th' as appropriate for the number
// Questions:
// How do I get centuries from years?
// It depends on the length of the year

// Examples
// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"

// Data Structure
// I'm probably just going to coerce arguments
// back and forth between strings and numbers
// to solve this one, so I don't think I'm going to need
// a data structure for this one

// Algorithm
// Get the century string
// Given an integer greater than 0 year
// set yearString to year coerced into a string
// declare century variable
// declare ending variable
// if the length of yearString is less than 3
// set century to "1"
// if the last two characters of yearString are "00"
// set century the substring that starts at index 0 of the yearString
// and ends before the last "00"
// otherwise, set century to the substring that
// starts at index 0 of the yearString
// and ends before the last two characters
// convert that into a number, then add 1
// and convert the return value into a string again

// Add appropriate ending to century number
// If century ends with "11", "12", "13"
// return "th"
// Else if it ends with 1, return "st"
// Else if it ends with 2, return "nd"
// Else if it ends with 3, return "rd"
// Else return "th"

// Code

function getCentury(year) {
  let yearString = year.toString();

  if (yearString.length < 3) {
    return "1";
  } else if (yearString.endsWith("00")) {
    return yearString.substring(0, yearString.length - 2);
  } else {
    let previousCenturyNum =
      Number(yearString.substring(0, yearString.length - 2)) + 1;
    return previousCenturyNum.toString();
  }
}

function getEnding(centuryString) {
  if (
    centuryString.endsWith("11") ||
    centuryString.endsWith("12") ||
    centuryString.endsWith("13")
  ) {
    return "th";
  } else if (centuryString.endsWith("1")) {
    return "st";
  } else if (centuryString.endsWith("2")) {
    return "nd";
  } else if (centuryString.endsWith("3")) {
    return "rd";
  } else {
    return "th";
  }
}

function century(year) {
  let century = getCentury(year);
  let ending = getEnding(century);

  return `${century}${ending}`;
}

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"
