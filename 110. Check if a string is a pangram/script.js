function isPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowercaseStr = str.toLowerCase();

  for (let char of alphabet) {
    if (!lowercaseStr.includes(char)) {
      return false;
    }
  }

  return true;
}

const sentence = "The quick brown fox jumps over the lazy dog";
console.log("Is it a pangram? " + isPangram(sentence));
