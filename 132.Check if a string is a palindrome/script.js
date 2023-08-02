function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

const text = "racecar";
console.log("Is it a palindrome? " + isPalindrome(text));
