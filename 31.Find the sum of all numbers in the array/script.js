var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (total, num) {
  return total + num;
}, 0);
console.log(sum);
