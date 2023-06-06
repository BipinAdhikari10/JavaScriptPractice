const subtractNumbers = (...numbers) => {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result -= numbers[i];
  }
  return result;
};

const numbers = [10, 5, 3, 2, 8, 12, 4, 9, 6, 1, 7];
const subtractionResult = subtractNumbers(...numbers);
console.log(subtractionResult);
