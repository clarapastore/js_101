// TODO: create a prompt function to differentiate from stout of terminal
// TODO: export functions to a separate mortgage_functions.js file
// TODO: import mortgage_functions.js file
// TODO: refactor function calls to be made from imported functions
// of mortgage_functions.js file
// TODO: allow the user to ask for another mortgage calculation
// TODO: find a way to clear the console every now and then,
// especially when there are lots of wrong attempts

let readline = require("readline-sync");
const MESSAGES = require("./messages.json");
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

function prompt(message) {
  console.log(`=> ${message}`);
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
  prompt(question);
  let input = readline.question();
  while (invalidInputFunc(input)) {
    prompt(errorMsg);
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

prompt(MESSAGES.welcome);

loanAmount = loanAmountInputToNum(
  getValidatedInput(
    MESSAGES.loanQuestion,
    invalidLoanAmount,
    MESSAGES.invalidLoan
  )
);

annualInterestRate = interestInputToNum(
  getValidatedInput(
    MESSAGES.interestQuestion,
    invalidInterestRate,
    MESSAGES.invalidInterest
  )
);

while (true) {
  loanDurationYears = Number(
    getValidatedInput(
      MESSAGES.loanYearsQuestion,
      invalidLoanYears,
      MESSAGES.invalidYears
    )
  );

  loanDurationMonths = Number(
    getValidatedInput(
      MESSAGES.loanMonthsQuestion,
      invalidLoanMonths,
      MESSAGES.invalidMonths
    )
  );

  if (
    invalidTotalLoanDurationInMonths(
      calculateTotalLoanDurationInMonths(loanDurationYears, loanDurationMonths)
    )
  ) {
    prompt(MESSAGES.invalidTotalMonths);
  } else {
    break;
  }
}

monthlyPayment = calculateMonthlyPayment(
  loanAmount,
  calculateMonthlyInterestPercentage(annualInterestRate),
  calculateTotalLoanDurationInMonths(loanDurationYears, loanDurationMonths)
);
prompt(
  `Given your mortgage amount of $${loanAmount}, your interest rate of ${annualInterestRate}%, and your total mortgage duration of ${loanDurationYears} year/s and ${loanDurationMonths} month/s:\nYour monthly payment is $${monthlyPayment}`
);
