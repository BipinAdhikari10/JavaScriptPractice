function sumOfTwelveNumbers() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

var result = sumOfTwelveNumbers();
console.log("Sum of twelve numbers:", result);
