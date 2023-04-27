function sumOddNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) sum += arr[i];
  }
  return sum;
}

const numbers = [2, 4, 5, 6, 1];
sum = sumOddNumbers(numbers);
console.log(sum);
