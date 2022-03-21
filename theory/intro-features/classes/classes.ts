// =======================
//  Classes
// =======================
// Are blueprints of sources,
// used to create an object that has some values and methods to represent a thing

class Vehicle {
  drive(): void {
    console.log("chiga chuga");
  }

  honk(): void {
    console.log("honk");
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

class Car extends Vehicle {
  drive(): void {
    console.log("vroom");
  }
}
const car = new Car();
car.drive();
car.honk();

//  Differences between ES6 and TS:
// =======================
//  Modifiers
// =======================
// These are keywords that we can place in diferent methids and properties inside a class:
// ☑ public --> default, methods or propety can be called and used anywhere. Like our first ecamples in this doc
// ☑ private --> can only be called by other methods in the same clase
// ☑ protected --> can be called by other methods in the same clase or in child classes

class VehicleMod {
  public drive(): void {
    console.log("chiga chuga");
  }

  protected honk(): void {
    console.log("honk");
  }
}

class CarMod extends VehicleMod {
  drive(): void {
    console.log("vroom");
  }
}
const carMod = new CarMod();
carMod.drive();
// carMod.honk(); // This turns an error because the function is protected
