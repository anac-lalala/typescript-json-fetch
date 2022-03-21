// =======================
// Type Annotations for functions
// =======================
// Code added to tell TS about the type of arguments (receives) and return values
// The anotations are for the function itself

// Arguments annotation
const add = (a: number, b: number) => {};

// Return annotation
const addB = (a, b): number => {
  return a + b;
};
// Both cases
const addC = (a: number, b: number): number => {
  return a + b;
};
// =======================
// Type Inference for functions
// =======================
// TS figures out value returned in a function

// In this case TS guesses we are going to return a number
const addD = (a: number, e: number) => {
  return a + e;
};
// In this case TS we made a mistake and there is no return
// but TS says just that the return is void unless...
const addE = (a: number, e: number) => {
  a + e;
};
// unless we put the return annotation instead:
// const addF = (a: number, e: number): number => {
//   a + e;
// };

// =======================
// Annotations for anonymous functions
// =======================

function divide(a: number, b: number): number {
  return a / b;
}

const divideV = function (a: number, b: number): number {
  return a / b;
};

// =======================
// Void
// =======================

const voidTest = (message: string): void => {
  return null; // can return undefine or simply not return anything at all
};

// =======================
// Never
// =======================
// Used when the function is never ever going to return anything
// Usage is pretty rare... but here's the example

const throwError = (message: string): never => {
  throw new Error(message);
  // return null; // there won't be any return
};

// A more used way is this (Not using never):
const throwErrorCommon = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};
// Another without a return:
const throwErrorVoid = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// =======================
// Functions and parameters 'Destructuring with annotations
// =======================
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather(todaysWeather);

// Distructuring the paramethers in ES2015
// In this case destructuring and type notation are thw separate objects
const logWeatherE5 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
