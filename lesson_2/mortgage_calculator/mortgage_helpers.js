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

function calculateYearlyInterestPercentage(interest) {
  return interest / 100;
}

module.exports = {
  removeDollarSign,
  removePercentage,
  calculateYearlyInterestPercentage,
};
