function sumOfSquares(n) {
  if (n < 1) {
    return "Please enter a positive integer.";
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }

  return sum;
}

const n = 4;
console.log("Sum of squares from 1 to " + n + ": " + sumOfSquares(n));
