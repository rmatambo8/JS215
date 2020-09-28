  // separate the letters into an array of characters
  // map each character into an array of characters and reverse their order.
  // map each character by its index exponent by 8
  // reduce the final value into one.


function octalToDecimal(numberString) {
  let stringOfNumbers = numberString.split('').map(string => Number(string)).reverse();
  let transformedWithExponents = stringOfNumbers.map((number, index) => number * Math.pow(8, index));
  return transformedWithExponents.reduce((accumulator, currentValue) => accumulator + currentValue);
  // return parseInt(numberString, 8)) // << could do it in one line;
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9