function findFirstIndex(arr, element) {
  return arr.indexOf(element);
}

const numbers = [1, 2, 3, 4, 5];
console.log(findFirstIndex(numbers, 3)); // Output: 2
console.log(findFirstIndex(numbers, 6)); // Output: -1
