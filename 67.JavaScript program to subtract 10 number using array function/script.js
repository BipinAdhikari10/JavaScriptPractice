function subtractNumbers(numbers) {
  // Perform subtraction operation
  const result = numbers.reduce(
    (accumulator, currentValue) => accumulator - currentValue
  );

  return result;
}

// Input numbers
const numbers = [5, 3, 2, 7, 1, 9, 4, 6, 8, 10];

// Subtract numbers using the function
const subtractionResult = subtractNumbers(numbers);

console.log("Result:", subtractionResult);
