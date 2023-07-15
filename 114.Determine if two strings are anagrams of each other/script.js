function areAnagrams(str1, str2) {
  const sortedStr1 = str1.toLowerCase().split("").sort().join("");
  const sortedStr2 = str2.toLowerCase().split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

const string1 = "listen";
const string2 = "silent";
console.log("Are they anagrams? " + areAnagrams(string1, string2));
