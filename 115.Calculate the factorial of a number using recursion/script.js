function calculateFactorialRecursive(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  return number * calculateFactorialRecursive(number - 1);
}

const num = 5;
console.log("Factorial: " + calculateFactorialRecursive(num));
