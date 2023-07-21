function toTitleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}

const text = "hello, world! how are you?";
console.log("Title case: " + toTitleCase(text));
