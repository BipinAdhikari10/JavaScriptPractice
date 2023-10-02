function sumOfPositiveNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

// Test the function
const numberArray = [-1, 2, 3, -4, 5, -6];
const result = sumOfPositiveNumbers(numberArray);
console.log("Sum of positive numbers:", result);
