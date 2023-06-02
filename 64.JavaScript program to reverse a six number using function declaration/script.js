function reverseNumber(number) {
  if (number < 100000 || number > 999999) {
    return "Invalid input. Please enter a six-digit number.";
  }

  let reversed = 0;
  while (number > 0) {
    reversed = reversed * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  return reversed;
}

// Example usage
const number = 123456;
const reversedNumber = reverseNumber(number);
console.log(reversedNumber);
