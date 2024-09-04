// 1. Type Guard with typeof Operator
// Create a function calculate that takes two arguments a and b of type string | number.
// Use the typeof operator within the function to determine if both arguments are numbers or strings.
// If both are numbers, return their sum. If both are strings, return their concatenation.
// Throw an error if the arguments are of different types.

type NumType = string | number;

function numOrString(a: NumType, b: NumType) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error("Invalid Inputs!");
}

console.log(numOrString("Today is ", "Wednesday"));
console.log(numOrString(7, 9));

// 2. Type Guard with instanceof Operator
// Define two classes: Dog with a method bark() and Cat with a method meow().
// Create a function makeSound that takes a parameter of type Dog | Cat.
// Use the instanceof operator to determine if the parameter is a Dog or Cat,
// and call the appropriate method (bark or meow).

class Dog {
  bark() {
    return "Boo Hoo";
  }
}

class Cat {
  meow() {
    return "Meow meow";
  }
}

type Animal = Dog | Cat;

function makeSound(animal: Animal): string {
  // let msg: string;

  if (animal instanceof Dog) {
    return animal.bark();
  } else if (animal instanceof Cat) {
    return animal.meow();
  }

  return "Unknown Input";
}
let dog = new Dog();
let cat = new Cat();

console.log(makeSound(dog));
console.log(makeSound(cat));

// 3. Type Guard with in Operator
// Define two interfaces: Admin with a property accessLevel and User with a property username.
// Create a function getDetails that takes a parameter of type Admin | User.
// Use the in operator to check if the parameter is an Admin or User, and return a string with the relevant details.

interface Admin {
  accessLevel: string;
}

interface User {
  username: string;
}

type Join = Admin | User;

function getDetails(params: Join): string {
  if ("accessLevel" in params) {
    return "This is params.accessLevel";
  } else if ("username" in params) {
    return "This is params.username";
  } else {
    return "Invalid details";
  }
}

const admin: Admin = { accessLevel: "superuser" };
const user: User = { username: "john_doe" };

console.log(getDetails(admin)); // Outputs: Admin with access level: superuser
console.log(getDetails(user)); // Outputs: User with username: john_doe

// 4. User-defined Type Guard
// Define two interfaces: Circle with a property radius and Square with a property sideLength.
// Create a user-defined type guard function isCircle that checks if an object is of type Circle.
// Write a function getArea that takes a parameter of type Circle | Square, uses the isCircle type guard to determine the type,
// and returns the area of the shape.

interface Circle {
  radius: number;
}

interface Square {
  sideLength: number;
  width: number;
}

type Shape = Circle | Square;

function isCircle(shape: Shape): shape is Circle {
  return (shape as Circle).radius !== undefined;
}

function area(shape: Shape): number {
  if (isCircle(shape)) {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

const circle: Circle = { radius: 5 };
const square: Square = { sideLength: 4, width: 6 };

console.log(area(circle)); // Outputs: 78.53981633974483 (Area of the circle)
console.log(area(square)); // Outputs: 16 (Area of the square)

// 5. Combining Multiple Type Guards
// Define three classes: Employee with a method getSalary(), Manager with a method getBonus(), and Intern with a method getStipend().
// Create a function getCompensation that takes a parameter of type Employee | Manager | Intern.
// Use a combination of typeof, instanceof, and user-defined type guards to determine the type of the parameter
// and return the appropriate compensation (salary, bonus, or stipend).

class Employee {
  getSalary(): number {
    return 50000; // Example salary
  }
}

class Manager extends Employee {
  getBonus(): number {
    return 10000; // Example bonus
  }
}

class Intern extends Employee {
  getStipend(): number {
    return 2000; // Example stipend
  }
}

// User-defined type guard to check if an object is a Manager
function isManager(emp: Employee): emp is Manager {
  return (emp as Manager).getBonus !== undefined;
}

// User-defined type guard to check if an object is an Intern
function isIntern(emp: Employee): emp is Intern {
  return (emp as Intern).getStipend !== undefined;
}

function getCompensation(emp: Employee): number {
  if (isManager(emp)) {
    return emp.getSalary() + emp.getBonus();
  } else if (isIntern(emp)) {
    return emp.getStipend();
  } else {
    return emp.getSalary();
  }
}

const employee = new Employee();
const manager = new Manager();
const intern = new Intern();

console.log(getCompensation(employee)); // Outputs: 50000 (Employee salary)
console.log(getCompensation(manager)); // Outputs: 60000 (Manager salary + bonus)
console.log(getCompensation(intern)); // Outputs: 2000 (Intern stipend)
