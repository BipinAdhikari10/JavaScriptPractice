function subtractEvenNumbers(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result -= arr[i];
    }
  }

  return result;
}
const numbers = [10, 4, 7, 2, 9, 6];
const subtractionResult = subtractEvenNumbers(numbers);
console.log(subtractionResult);
