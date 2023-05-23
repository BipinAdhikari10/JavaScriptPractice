function filterEvenNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 === 0;
  });
}
var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6]
