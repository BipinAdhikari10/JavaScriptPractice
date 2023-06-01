const reverseNumber = (number) => {
  const reversed = String(number).split("").reverse().join("");
  return parseInt(reversed);
};

const numberToReverse = 12345;
const reversedNumber = reverseNumber(numberToReverse);
console.log(reversedNumber);
