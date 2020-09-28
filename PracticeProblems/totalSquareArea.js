// abstractions
/*
get the area of a single rectangle.
transform the areas of all rectangles
sum all of the areas of all rectangles
*/

function totalArea(rectangles) {
  let oneRectangle = (length, width) => length * width;
  let areaOneRectangle = rectangles.map( rectangle => oneRectangle(rectangle[0], rectangle[1]));
  let final = areaOneRectangle.reduce((previousElement, currentElement) => previousElement + currentElement);
  return final
}
// check if a pair is a rectangle or a square
// select the squares
// find the total area of the squares.
function totalSquareArea(rectangles) {
  let checkSquare = (elements) => elements.every(element => elements[0] === element);
  let squares = rectangles.filter (rectangle => checkSquare(rectangle));
  return totalArea(squares)
}
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

console.log(totalSquareArea(rectangles));    // 121