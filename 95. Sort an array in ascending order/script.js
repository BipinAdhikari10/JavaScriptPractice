function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

const numbers = [5, 8, 2, 9, 1, 6];
console.log(sortArray(numbers)); // Output: [1, 2, 5, 6, 8, 9]
