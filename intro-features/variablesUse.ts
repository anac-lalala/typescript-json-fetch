// =======================
// What is an 'any' type:
// =======================
// A type that indicates that typescrupt has no idea what is going on
// Is better to avoid it at all costs

// =======================
// When to use annotations Case 1
// =======================
// 1) When a function that returns 'any' type and we need to clarify the value

const json = '{"x": 10, "y": 20}';
// Typescript doesn't have any idea of the result in this JSON.parse
const coordinates = JSON.parse(json);

// as a result it just says 'const coordinates: any'
// Because TS infered that coordinate types are any this is not an error:
coordinates.asdasdasdasdasdasddfgd;

// how to fix this:
const coordinatesFixed: { x: number; y: number } = JSON.parse(json);

// =======================
// When to use annotations  Case 2
// =======================
// 2) When we declare a variable on one line and initialize it later

let words = ["red", "blue", "green"];
// let foundWord: boolean; // This is option A, to declare before initialiaze
let foundWord = false; // This is option B, to declare and initialiaze at the same time. Is the best option

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// =======================
// When to use annotations  Case 3
// =======================
// When we hant a variable to have a type that can't be interferred
// When we have to provide more than one type

let numbers = [-10, -1, -12];
let numberAbobeZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAbobeZero = numbers[i];
  }
}
