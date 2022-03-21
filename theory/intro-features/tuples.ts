// =======================
// Tuples
// =======================

// structures similar to arrays where each element represent some property
// Its order is critical

// Usually we use an object for ordering this properties with keys values
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// This case represent those properties in the order for for ts all the array items can be interchangable
// this can breack down our data model
const pepsiError = ["brown", true, 40];

// This is a tupple, this protects each element order
const pepsi: [string, boolean, number] = ["brown", true, 40];

// When creating more elements like this, it would be bothersome to write the types each time
// In this case we can use a type alias

type Drink = [string, boolean, number];

const cocaCola: Drink = ["brown", true, 50];
const sprite: Drink = ["clear", true, 20];
const tea: Drink = ["brown", false, 0];

// =======================
// Tuples are not commonly used
// =======================
// The elemens are not declarative by themselves, so its usually for thinks like cvs and tables
// So they are replace mostly with objects
