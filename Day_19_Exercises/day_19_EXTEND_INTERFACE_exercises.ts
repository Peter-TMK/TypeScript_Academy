// Exercise 1: Extending a Basic Interface
// Create a basic interface Shape with the following methods:

// area(): number
// perimeter(): number
// Now, create an interface Circle that extends Shape and adds the following property:

// radius: number
// Implement the Circle interface in a class and provide implementations for the area() and perimeter() methods.

interface Shape {
  area(): number;
  perimeter(): number;
}

interface Circle extends Shape {
  radius: number;
}

class MyCircle implements Circle {
  constructor(public radius: number) {}
  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

let myCircle = new MyCircle(4);
console.log(myCircle.area());
console.log(myCircle.perimeter());
console.log(myCircle.radius);

// Exercise 2: Multiple Interface Inheritance
// Define two interfaces: Drivable with a method drive(): void and Flyable with a method fly(): void.

// Create an interface FlyingCar that extends both Drivable and Flyable.
// Then, create a class that implements the FlyingCar interface, providing implementations for both drive() and fly() methods.

interface Drivable {
  drive(): void;
}

interface Flyable {
  fly(): void;
}

interface FlyingCar extends Drivable, Flyable {}

class FlyingCarClass implements FlyingCar {
  drive() {
    return "Drivable car";
  }

  fly() {
    return "Flyable car";
  }
}

let flyingCarClass = new FlyingCarClass();
console.log(flyingCarClass.drive());
console.log(flyingCarClass.fly());

// Exercise 3: Extending a Class with an Interface
// Create a class Machine with a private property power: boolean and a method turnOn(): void that sets power to true.

// Define an interface AdvancedMachine that extends Machine and adds a method turnOff(): void.

// Create a subclass Robot that extends Machine and implements the AdvancedMachine interface,
// providing implementations for both turnOn() and turnOff() methods.

class Machine {
  private power: boolean = false;

  turnOn(): void {
    this.power = true;
    console.log("Machine is ON");
  }
}

interface AdvancedMachine extends Machine {
  turnOff(): void;
}

class Robot extends Machine implements AdvancedMachine {
  turnOff(): void {
    console.log("Machine is OFF");
  }
}

let robot = new Robot();
robot.turnOn();
robot.turnOff();

// Exercise 4: Extending an Interface with Optional Properties
// Create an interface Person with the properties firstName: string and lastName: string.

// Extend this interface to create an interface Employee that adds the following optional properties:

// employeeId?: number
// department?: string
// Write a function that accepts an Employee object and logs the full name along with any optional properties that are provided.

interface IPerson {
  firstName: string;
  lastName: string;
}

interface IEmployee extends IPerson {
  employeeId?: number;
  department?: string;
}

const employeeFunction = (employee: IEmployee) => {
  console.log(employee);
};

employeeFunction({
  firstName: "Hello",
  lastName: "world",
  employeeId: 12,
  department: "Tech",
});
// Exercise 5: Extending an Interface with Function Signatures
// Create an interface Logger with a method log(message: string): void.

// Extend the Logger interface to create an interface DetailedLogger that adds
// a method logWithDetails(message: string, level: string): void.

// Create a class ConsoleLogger that implements DetailedLogger
// and provides implementations for both log() and logWithDetails() methods.
// Test the class by logging messages with different levels of detail.

interface Logger {
  log(message: string): void;
}

interface DetailedLogger extends Logger {
  logWithDetails(message: string, level: string): void;
}

class ConsoleLogger implements DetailedLogger {
  log(message: string): void {
    console.log(message);
  }

  logWithDetails(message: string, level: string): void {
    console.log(message, level);
  }
}

let consoleLogger = new ConsoleLogger();

consoleLogger.log("Logging well!");
consoleLogger.logWithDetails("Logging well!", "BETTER");
