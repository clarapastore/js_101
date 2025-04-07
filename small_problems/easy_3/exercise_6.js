// Create a simple madlib program that prompts for a noun,
// a verb, an adverb, and an adjective,
// and injects them into a story that you create.

// Problem:
// Input: 4 strings: noun, verb, adjective, adverb
// Output: 3 strings that inject input in them
// Questions:
// Does the story template have to change every time the program is run?
// Doesn't look like it, since there is only one example
// Do I need input validation?
// Doesn't look like it, especially since the weirder the input
// The funnier it should be, in theory

// Examples
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

// Data structure
// Since we're working with strings and
// interpolation/concatenation of them
// I don't think I'm going to need a data structure

// Algorithm
// Set noun to input
// Set verb to input
// Set adj to input
// Set adv to input
// Output the string: Do you verb your adj noun adv? That's hilarious
// Output the string: The adj noun verb + s adv over the lazy noun.
// Output the string: The noun adv verb + s up adj Joe's turtle.

// Code
const readline = require("readline-sync");

let noun = readline.question("Enter a noun: ");
let verb = readline.question("Enter a verb: ");
let adj = readline.question("Enter an adjective: ");
let adv = readline.question("Enter an adverb: ");

console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!`);
console.log(`The ${adj} ${noun} ${verb}s ${adv} over the lazy ${noun}.`);
console.log(`The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`);
