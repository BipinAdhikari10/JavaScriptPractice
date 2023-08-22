function sumOfNaturalNumbers(n) {
  if (n < 1) {
    return "Please enter a positive integer.";
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

const n = 5;
console.log(
  "Sum of first " + n + " natural numbers: " + sumOfNaturalNumbers(n)
);
