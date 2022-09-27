let apples: number = 5; // type anotations usually are const
const applesSecond = 5; // this is an inference type, in fact in this file all the annotations can be deleted and won't be errors

// If declaration and initialization are on the same line, Typescript will figure out the type of the variable for us unlike 'applesError'
let applesError; // So here applessError: any
applesError = 5;

// --------------------
// Other variable examples
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// --------------------
// Built in objects
let now: Date = new Date();

// --------------------
//Array
const colors: string[] = ["red", "green", "blue"]; // string[] declarates that the type is an array of strings and the ['red', 'green', 'blue'] creates an array
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// --------------------
// Classes
class Car {
  // created with a capitalized start letter
}
let car: Car = new Car();

// --------------------
// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// --------------------
// Function
const logNumber: (i: number) => void = (i: number) => {
  // void means that the return value expected from this function is nothing
  // the first i means that is expecting a aparameter called i
  // the actual functions start after the = sign, before that is just a type annotation -> ': (i: number) => void'
  console.log(i);
};
