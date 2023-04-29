function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const numbers = [2, 4, 6, 8, 10];
const average = calculateAverage(numbers);
console.log(average);
