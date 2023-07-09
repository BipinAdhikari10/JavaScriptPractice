function capitalizeWords(sentence) {
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(" ");
}

const sentence = "hello world, how are you?";
console.log("Capitalized sentence: " + capitalizeWords(sentence));
