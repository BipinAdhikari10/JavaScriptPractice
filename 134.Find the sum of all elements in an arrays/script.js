function sumArrayElements(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const numbers = [5, 8, 2, 9, 1, 6];
console.log("Sum of array elements: " + sumArrayElements(numbers));
