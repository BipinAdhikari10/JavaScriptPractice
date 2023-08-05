function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

const numbers = [5, 8, 2, 9, 1, 6];
console.log("Average of array elements: " + calculateAverage(numbers));
