// =======================
//  Interfaces
// =======================
// creates a new type describing property names and value types of an object
// Interfaces are types

const oldVehicle = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(vehicle.name, vehicle.year, vehicle.broken);
};

printVehicle(oldVehicle);

// this type annotations becomes harder to read when adding more properties
// in this situations we can use interface
// Then using interface we wirte with a capital letter at the begining

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicleWithInterface = (vehicle: Vehicle): void => {
  console.log(vehicle.name, vehicle.year, vehicle.broken);
};

// printVehicleWithInterface(oldVehicle);

// Behind the scenes TS checks it the element used through the function has the correspondent types
// if a property has a different name or a type is not the expected TS will show an error

// const oldVehicleError = {
//   name: "civic",
//   ayear: 2000,
//   broken: "no",
// };

// printVehicleWithInterface(oldVehicleError);

// =======================
//  Sintax of Interfaces
// =======================
// Interfaces can also admit other type of values like functions and dates

const vehicleOldAdv = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

interface VehicleAdv {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string; // a funtion that returns a string with no arguments in this case
}

const printVehicleFunction = (vehicle: VehicleAdv): void => {
  console.log(vehicle.summary());
};

printVehicleFunction(vehicleOldAdv);

// ☑ Functions in interfaces
// With functions TS only checks if the interface VehicleAdv has summary
// we can takeout the other types and there won't be an error
// This makes a more generic function and we can reuse it

interface Reportable {
  summary(): string; // There is no more types here
}

const vehicleItem = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drinkItem = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// Both objects are different but have the same function with a return of string
// This is a general strategy used for reusable code in TS
// the given interface is ac ting like a 'gatekeeper'
printSummary(vehicleItem);
printSummary(drinkItem);
