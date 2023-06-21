function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers)); // Output: [5, 4, 3, 2, 1]
