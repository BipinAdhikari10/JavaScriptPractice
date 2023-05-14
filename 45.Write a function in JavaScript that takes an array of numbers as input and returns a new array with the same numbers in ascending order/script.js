function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);
