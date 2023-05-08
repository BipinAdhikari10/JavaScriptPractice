function multiplyNumber(num, times) {
  let result = num;
  for (let i = 1; i < times; i++) {
    result *= num;
  }
  return result;
}

console.log(multiplyNumber(2, 5));
