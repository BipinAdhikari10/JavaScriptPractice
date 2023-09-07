function longestWordLength(sentence) {
  const words = sentence.split(" ");
  let maxLength = 0;

  for (let word of words) {
    const length = word.length;
    if (length > maxLength) {
      maxLength = length;
    }
  }

  return maxLength;
}

const text = "The quick brown fox jumps over the lazy dog";
console.log("Length of the longest word: " + longestWordLength(text));
