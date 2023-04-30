function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

const string = "mum";
console.log(isPalindrome(string));

const string2 = "Bipin";
console.log(isPalindrome(string2));
