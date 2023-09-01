function findSmallestElement(arr) {
  if (arr.length === 0) {
    return "Array is empty.";
  }

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

const numbers = [5, 8, 2, 9, 1, 6];
console.log("Smallest element: " + findSmallestElement(numbers));
