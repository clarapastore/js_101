// Write a function that takes two strings as arguments,
// determines the length of the two strings,
// and then returns the result of concatenating
// the shorter string, the longer string, and the shorter string once again.
// You may assume that the strings are of different lengths.

// Problem
// Input: two strings
// Output: concatenation of the short string, long string and short string again
// Rules: you can assume strings are of different length

// Examples
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

// 'abc' 'defgh' // short + long + short

// Data structure
// Since I need to check the length of the
// string to determine which one is the shorter one,
//  and then perform concatenation
// I don't think I'll need a data structure for this

// Algoirthm
// Given two strings, str1, and str2, of different length
// Check if str1 is shorter than str2
// if true, return concatenation of str1 + str2 + str1
// otherwise, return the concatenation of str2 + str1 + str2

function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
}

console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"
