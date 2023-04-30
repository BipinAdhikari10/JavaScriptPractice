function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
const str1 = "racecar";
console.log(isPalindrome(str1));

const str2 = "hello";
console.log(isPalindrome(str2));
