function containsValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(containsValue(numbers, 3)); // Output: true
console.log(containsValue(numbers, 6)); // Output: false
