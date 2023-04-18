const multiply = (num, factor) => {
  let result = 0;
  for (let i = 0; i < factor; i++) {
    result += num;
  }
  return result;
};
console.log(multiply(4, 5));
console.log(multiply(3, 3));
