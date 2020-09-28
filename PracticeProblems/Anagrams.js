// separate each word to its characters
// sort the characters by alphabetical order
// check if both arrays have all characters in the same order
// select values that have equivalent characters.

function anagram(word, list) {
  let sortedCharacters = (givenWord) => givenWord.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0) > 0);
  let myWord = sortedCharacters(word)
  let areAnagrams = (arr1, arr2) => arr1.every((letter, index) => letter === arr2[index]);
  let final = list.filter(possibleAnagram => areAnagrams(myWord, sortedCharacters(possibleAnagram)));

  return final;
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]
