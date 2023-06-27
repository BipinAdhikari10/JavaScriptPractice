function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

const numbers = [5, 8, 2, 9, 1, 6];
console.log(calculateAverage(numbers)); // Output: 5.166666666666667
