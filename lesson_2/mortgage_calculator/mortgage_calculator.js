// Get the loan amount
// Get annual percentage rate
// Get loan duration
// Calculate monthly payment
// Output monthly payment
// Ask to calculate another loan

let readline = require("readline-sync");
let loanAmount,
  annualInterestRate,
  loanDurationYears,
  loanDurationMonths,
  monthlyPayment;
const MONTHS_IN_A_YEAR = 12;

function removeDollarSign(amount) {
  amount = amount.trim();
  if (amount[0] === "$") {
    return amount.slice(1);
  } else {
    return amount;
  }
}

function removePercentage(interest) {
  interest = interest.trim();
  if (interest[interest.length - 1] === "%") {
    return interest.substring(0, interest.length - 1);
  } else {
    return interest;
  }
}

function loanAmountInputToNum(amount) {
  return Number(removeDollarSign(amount));
}

function interestInputToNum(interest) {
  return Number(removePercentage(interest));
}

function invalidLoanAmount(amount) {
  amount = loanAmountInputToNum(amount);
  return (
    Number.isNaN(amount) ||
    !Number.isInteger(amount) ||
    amount <= 0 ||
    amount > 1000000000
  );
}

function invalidInterestRate(interest) {
  return Number.isNaN(interest) || interest <= 0 || interest > 35;
}

function invalidLoanYears(years) {
  if (years.trim() === "") return true;
  years = Number(years);
  return (
    Number.isNaN(years) || !Number.isInteger(years) || years < 0 || years > 100
  );
}

function invalidLoanMonths(months) {
  if (months.trim() === "") return true;
  months = Number(months);
  return (
    Number.isNaN(months) ||
    !Number.isInteger(months) ||
    months < 0 ||
    months > 11
  );
}

function invalidTotalLoanDurationInMonths(months) {
  return months === 0;
}

function calculateYearlyInterestPercentage(interest) {
  return interest / 100;
}

function calculateMonthlyInterestPercentage(interest) {
  let yearlyInterestPercentage = calculateYearlyInterestPercentage(interest);
  return yearlyInterestPercentage / 12;
}

function calculateTotalLoanDurationInMonths(
  loanDurationYears,
  loanDurationMonths
) {
  let monthsOfYears = loanDurationYears * MONTHS_IN_A_YEAR;
  return monthsOfYears + loanDurationMonths;
}

function calculateMonthlyPayment(
  loanAmount,
  interest,
  loanDurationYears,
  loanDurationMonths
) {
  let monthlyInterest = calculateMonthlyInterestPercentage(interest);
  let loanDurationInMonths = calculateTotalLoanDurationInMonths(
    loanDurationYears,
    loanDurationMonths
  );
  let monthlyPayment =
    loanAmount *
    (monthlyInterest /
      (1 - Math.pow(1 + monthlyInterest, -loanDurationInMonths)));
  return monthlyPayment.toFixed(2);
}

console.log("Welcome to Mortgage Calculator!");

console.log("What's the loan amount you have to pay?");
loanAmount = readline.question();
while (invalidLoanAmount(loanAmount)) {
  console.log("Hmmm, this is not a valid amount.");
  loanAmount = readline.question();
}
loanAmount = loanAmountInputToNum(loanAmount);
console.log(`Your loan amount is ${loanAmount}`);

console.log("What's the annual interest rate?");
annualInterestRate = readline.question();
while (invalidInterestRate(annualInterestRate)) {
  console.log("Hmmm, this is not a valid amount.");
  annualInterestRate = readline.question();
}
annualInterestRate = interestInputToNum(annualInterestRate);
console.log(`Your annual interest rate is ${annualInterestRate}`);

console.log("What's your loan duration in years?");
loanDurationYears = readline.question();
console.log(`Your loan duration in years is ${loanDurationYears} years`);

console.log("What's your loan duration in months?");
loanDurationMonths = readline.question();
console.log(`Your loan duration in months is ${loanDurationMonths} months`);
console.log(
  `Your loan duration is ${loanDurationYears} years and ${loanDurationMonths} months.`
);

monthlyPayment = calculateMonthlyPayment(
  loanAmount,
  annualInterestRate,
  loanDurationYears,
  loanDurationMonths
);
console.log(`Your monthly payment is $${monthlyPayment}`);
