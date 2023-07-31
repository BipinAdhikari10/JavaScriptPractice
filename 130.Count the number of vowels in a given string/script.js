function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const text = "Hello, how are you?";
console.log("Number of vowels: " + countVowels(text));
