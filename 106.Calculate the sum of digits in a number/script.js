function calculateDigitSum(number) {
  let sum = 0;

  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}

const num = 12345;
console.log("Sum of digits: " + calculateDigitSum(num));
