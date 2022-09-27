// =======================
// Typed arrays
// =======================
// Arrays where each element is some consistent type of value
// When declaring arrays we put a restriction for its data

const carMakers = ["toyota", "audi", "ford", "chevrolet", "renault"];

let futureStringsArray: string[] = [];

// Two dimension array
let carsByMake: string[][] = [];

carsByMake = [
  ["f150"],
  ["corolla"],
  ["camaro"],
  ["clio"],
  ["cx5"],
  ["Fortuner "],
];

// =======================
// Inferenced Help by TS
// =======================
// Why do we care? This has advantages and downsides
// ☑ TS can do type inference when extracting values from an array

const car = carMakers[0]; // TS knows that this is a string
const mycar = carMakers.pop(); // Same here

// ☑ TS can prevent us from adding incompatible values to the array
//  carMakers.push(100) -> Error

// ☑ TS can provide help with 'map', 'reduce', 'forEach' functions
// so suggests autocomplete to the variable being pass into the funtion
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// =======================
// Flexible types inside an array
// =======================
// To add a different kind of value we have to do something additional

let importantDates: (Date | string)[] = [new Date()];

importantDates.push("2030-10-10"); // this is a string and there is no error
importantDates.push(new Date());
// importantDates.push(10); // but number still registers as an error

// We use arrays to represent a collaction of records with some arbitraty order
