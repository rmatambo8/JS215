// Problem Description
// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

// In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). arrayOfLettersly the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

// there are two aspects to this problem:
// encoding, decoding.
// we will be using a transposition cipher that gets its name from how its encoded.
// message is written on successive rails
// moves up when it gets to the bottom.
// there can be different numbers of rails.
// the encoding positions follow the same patterns.

// rules
/*
 - string input can have spaces
 - string input is all upper case
 - the cipher message is read based on rows
 - there are dots in between the values of the ciphers
 - there is a way to decrypt a massage
  - cipher text is filled allong the rows.
  - each letter is placed on the rows.
  - the odd indexed letters all go on the second row
  - the first method will output encoded
    - encoded is a capitalized string with all letters based on transposed position
  - the second method will output decoded.

  Aim: Take a string of text, parse it for letters and capitalize them and encode them
  Take an encoded string, return the decoded string in capitalized no space letters.

  data structure:
  Arrays - 2 d arrays for transposition

  Algorithm
  - encode the string message
    - clean the string message
    - create 3 arrays the length of the string
    - create a way to oscillate between the three arrays
    - spread the message through the three arrays and filter for letters row by row and return the values
    - return the encoded message
  - decode the string message
    - declare a last index variable for each letter.
    - create 3 arrays of the length of the string
  -  place values in rails
    - place a letter every 4 letters while less than size and row = 1
    - place a letter every odd index while less than size and row = 2
    - place a letter every 4 letters starting from index2 when row = 3
    - retrieve a string that follows transposition pattern.
    - start from row 0, go to row 1, 2, 1, 0, 1, 2, 3,
*/

function encode(ciphertext) {
  let cleanedtext = cleanText(ciphertext)
  let rails = createArrays(cleanedtext);
  encodeValuesInto(rails, cleanedtext)
  return joinWords(rails);
}

function decode(codedtext) {
  let rails = createArrays(codedtext);
  let arrayOfLetters = [];

  decodeValuesTo(rails, codedtext)
  pushValuesInto(arrayOfLetters, rails, codedtext);

  return arrayOfLetters.join('');
}

function cleanText(ciphertext) {
  return ciphertext.replace(/[^A-Z]/ig, '').toUpperCase();
}

function oscilator(previousRow, currentRow) {
  if (currentRow === 2 || currentRow === 0) return 1;
  return previousRow === 2 ? 0 : 2
}

function joinWords(rails) {
  return rails.map((rail) => rail.filter((a) => a.match(/[A-Z]/)).join('')).join('');
}
function createArrays(string) {
  let size = string.length
  return[Array(size), Array(size), Array(size)];
}
function letterPlacing(row) {
  let myRowSpacing = {0: 4, 1: 2, 2: 4}
  return myRowSpacing[row]
}

function encodeValuesInto(rails, cleanedtext) {
  let previousRow;
  let nextRow = 0
  for (let index = 0; index < cleanedtext.length; index+= 1) {
    [previousRow, rails[nextRow][index], nextRow] = [nextRow, cleanedtext[index], oscilator(previousRow, nextRow)]
  }
}


function decodeValuesTo(rails, text) {
  let letter = 0
  let newLetter = letter;
  for (let index = 0, letter = 0, row = 0; index < text.length; index += letterPlacing(row), letter += 1) {
    rails[0][index] = text[letter]
    newLetter = letter + 1
  }

  for (let index = 1, letter = newLetter, row = 1; index < text.length; index += letterPlacing(row), letter += 1) {
    rails[1][index] = text[letter]
    newLetter = letter + 1
  }

  for (let index = 2, letter = newLetter, row = 2 ; index < text.length; index += letterPlacing(row), letter += 1) {
    rails[2][index] = text[letter]
  }
}

function pushValuesInto(arrayOfLetters, rails, codedtext) {
  codedtext.split('').forEach(((_, index) => {
    rails.forEach(rail => {
      if (rail[index] !== undefined) arrayOfLetters.push(rail[index]);
    });
  }));
}
// console.log(cleanText("#@!$@#$# hi") === 'HI');
console.log(encode("WE ARE DISCOVERED FLEE AT ONCE") === 'WECRLTEERDSOEEFEAOCAIVDEN');
console.log(decode('WECRLTEERDSOEEFEAOCAIVDEN') === "WEAREDISCOVEREDFLEEATONCE");