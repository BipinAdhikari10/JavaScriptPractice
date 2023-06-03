function reverseNumber(number) {
  const numberString = String(number);
  const reversedString = numberString.split("").reverse().join("");
  const reversedNumber = parseInt(reversedString, 10);
  return reversedNumber;
}

// Example usage:
const number = 12345;
const reversedNumber = reverseNumber(number);
console.log(reversedNumber); // Output: 54321
