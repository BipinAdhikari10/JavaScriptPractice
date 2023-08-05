function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

const text = "A man, a plan, a canal, Panama!";
console.log("Is it a palindrome? " + isPalindrome(text));
