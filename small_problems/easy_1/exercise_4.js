const readline = require("readline-sync");
const SQ_FT_IN_SQ_MT = 10.7639;

console.log("Enter the length of the room in meters");
let lengthInM = readline.question();
console.log("Enter the width of the room in meters");
let widthInM = readline.question();

lengthInM = Number(lengthInM);
widthInM = Number(widthInM);

let areaInSqM = lengthInM * widthInM;
let areaInSqFt = areaInSqM * SQ_FT_IN_SQ_MT;
areaInSqFt = areaInSqFt.toFixed(2);

console.log(
  `The area of the room is ${areaInSqM} square meters (${areaInSqFt} square feet).`
);
