function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example usage
const numbers = [5, 2, 9, 1, 7];
console.log(calculateSum(numbers)); // Output: 24
