// =======================
//  Initialize variable inside a class
// =======================

// class Vehicle {
//   color: string = "red"; // this initialize a varible inside a class

//   protected honk(): void {
//     console.log("beep");
//   }
// }

// class Car extends Vehicle {
//   private drive(): void {
//     console.log("vroom");
//   }

//   startDrivingProcess(): void {
//     this.drive();
//   }
// }

// =======================
//  Adding arguments to a class
// =======================
// This is done with a constructor function

class Vehicle {
  // color: string = "red"; // Is not necessary to initialize the variable here because of the contructore
  // we can also do this the long way:
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }
  // short way
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

// =======================
//  Inheritance
// =======================

class Car extends Vehicle {
  private drive(): void {
    console.log("vroom");
  }
}

const car = new Car("red"); // Need a string because the main constructor Vehicle needs it

// Adding a new constructor whithout loosing the first one
class CarAdvanced extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // super calls the constructor in Vehicle
  }
}

const carAdvanced = new CarAdvanced(4, "red");
