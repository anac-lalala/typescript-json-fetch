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
// Inference
// =======================
// Why do we care? This has advantages and downsides
// ☑ Ts can do type inference when extracting values from an array

const car = carMakers[0]; // it nows that this is an string
const mycar = carMakers.pop(); // same here

// ☑ Ts can prevent us from adding incompatible values to the array
// We can get help with 'map', 'reduce', 'forEach' functions
// so it adds autocomplete to the variable being pass into the funtion

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// ☑ Ts can prevent us from adding incompatible values to the array

// carMakers.push(100);
// To add a different kind of value we have to do something additional

let importantDates: (Date | string)[] = [new Date()];

importantDates.push("2030-10-10");
importantDates.push(new Date());

// We use arrays to represent a collaction of records with some arbitraty order
