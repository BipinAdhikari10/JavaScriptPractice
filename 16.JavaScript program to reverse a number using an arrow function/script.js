const reverseNumber = (num) => {
  let reversed = 0;
  while (num !== 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
};

console.log(reverseNumber(12345));
console.log(reverseNumber(987654321));
