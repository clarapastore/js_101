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
  interest = interestInputToNum(interest);
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

function getValidatedInput(question, invalidInputFunc, errorMsg) {
  console.log(question);
  let input = readline.question();
  while (invalidInputFunc(input)) {
    console.log(errorMsg);
    input = readline.question();
  }
  return input;
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
  monthlyInterest,
  totalLoanDurationInMonths
) {
  let monthlyPayment =
    loanAmount *
    (monthlyInterest /
      (1 - Math.pow(1 + monthlyInterest, -totalLoanDurationInMonths)));
  return monthlyPayment.toFixed(2);
}

console.log("Welcome to Mortgage Calculator!");

loanAmount = loanAmountInputToNum(
  getValidatedInput(
    "What's the mortgage amount you have to pay?",
    invalidLoanAmount,
    "Hmmm, this is not a valid loan amount.\nPlease write an integer loan amount between $1 and $1000000000 with no commas."
  )
);

annualInterestRate = interestInputToNum(
  getValidatedInput(
    "What's the annual interest rate of your mortgage?",
    invalidInterestRate,
    "Hmm, this is not a valid interest rate.\nPlease write a rate higher than 0% and lower than 35%"
  )
);

while (true) {
  loanDurationYears = Number(
    getValidatedInput(
      "What's your mortgage duration in years?",
      invalidLoanYears,
      "Hmm, this is not a valid year duration.\nPlease write an integer number between 0 and 100."
    )
  );

  loanDurationMonths = Number(
    getValidatedInput(
      "What's your loan duration in months?",
      invalidLoanMonths,
      "Hmm, this is not a valid month duration.\nPlease write an integer between 0 and 11."
    )
  );

  if (
    invalidTotalLoanDurationInMonths(
      calculateTotalLoanDurationInMonths(loanDurationYears, loanDurationMonths)
    )
  ) {
    console.log(
      "You cannot have a mortgage duration of 0 years and 0 months.\nThe total mortgage duration needs to be at least 1 month.\n"
    );
  } else {
    break;
  }
}

// Now that we've verified that everything is valid
// do the calculation

monthlyPayment = calculateMonthlyPayment(
  loanAmount,
  calculateMonthlyInterestPercentage(annualInterestRate),
  calculateTotalLoanDurationInMonths(loanDurationYears, loanDurationMonths)
);
console.log(
  `Given your mortgage amount of $${loanAmount}, your interest rate of ${annualInterestRate}%, and your total mortgage duration of ${loanDurationYears} year/s and ${loanDurationMonths} month/s:\nYour monthly payment is $${monthlyPayment}`
);
