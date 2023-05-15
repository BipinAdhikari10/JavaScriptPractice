function sumEvenNumbers(numbers) {
  return numbers.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
}
const numbers = [1, 2, 3, 4, 5, 6];
const sumOfEvenNumbers = sumEvenNumbers(numbers);
console.log(sumOfEvenNumbers);
