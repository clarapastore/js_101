const readline = require("readline-sync");

function sumNums(int) {
  if (int === 1) {
    return 1;
  }
  return int + sumNums(int - 1);
}

function productNums(int) {
  if (int === 1) {
    return 1;
  }
  return int * productNums(int - 1);
}

let int = readline.question("Please enter an integer greater than 0: ");
int = parseInt(int, 10);

let operation = readline.question(
  "Enter 's' to compute the sum, or 'p' to compute the product. "
);

let result;

switch (operation) {
  case "s": {
    operation = "sum";
    result = sumNums(int);
    break;
  }
  case "p": {
    operation = "product";
    result = productNums(int);
    break;
  }
}

console.log(
  `The ${operation} of the integers between 1 and ${int} is ${result}`
);
