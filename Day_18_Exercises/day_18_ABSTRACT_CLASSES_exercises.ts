// Exercise 1: Abstract Shape Class
// Define an abstract class named Shape with the following:

// An abstract method area() that returns a number.
// An abstract method perimeter() that returns a number.
// Then, create two derived classes Circle and Rectangle:

// Circle should have a property radius and implement the area() and perimeter() methods.
// Rectangle should have properties width and height and implement the area() and perimeter() methods.
// Create instances of both classes and log their area and perimeter.

// Abstract class Shape
abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;
}

// Derived class Circle
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Derived class Rectangle
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// Test the classes
const circle = new Circle(5);
console.log("Circle Area:", circle.area());
console.log("Circle Perimeter:", circle.perimeter());

const rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", rectangle.area());
console.log("Rectangle Perimeter:", rectangle.perimeter());

// Exercise 2: Abstract Animal Class
// Define an abstract class named Animal with the following:

// An abstract method makeSound() that returns a string.
// A method move() that returns a string indicating the movement of the animal.
// Then, create two derived classes Dog and Cat:

// Dog should implement the makeSound() method to return "Bark".
// Cat should implement the makeSound() method to return "Meow".
// Create instances of both classes and log their sounds and movement.

abstract class Animal {
  abstract makeSound(): string;
  move(): string {
    return this.constructor.name;
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

let dog = new Dog();
console.log("Dog", dog.makeSound());
console.log("Dog", dog.move());

let cat = new Cat();
console.log("Cat", cat.makeSound());
console.log("Cat", cat.move());

// Exercise 3: Abstract Payment Class
// Define an abstract class named Payment with the following:

// An abstract method processPayment(amount: number): string.
// Then, create two derived classes CreditCardPayment and PayPalPayment:

// CreditCardPayment should implement the processPayment() method to return a
// message indicating the payment was processed via credit card.
// PayPalPayment should implement the processPayment() method to return a
// message indicating the payment was processed via PayPal.
// Create instances of both classes and log the result of processing payments.

abstract class Payment {
  abstract processPayment(amount: number): string;
}

class CreditCardPayment extends Payment {
  processPayment(amount: number): string {
    return `Payment of ${amount} via Credit Card`;
  }
}

class PayPalPayment extends Payment {
  processPayment(amount: number): string {
    return `Payment of ${amount} via Paypal`;
  }
}

let creditCardPayment = new CreditCardPayment();
let payPalPayment = new PayPalPayment();

console.log(creditCardPayment.processPayment(4600));
console.log(payPalPayment.processPayment(6500));

// Exercise 4: Abstract Appliance Class
// Define an abstract class named Appliance with the following:

// An abstract method turnOn() that returns a string.
// An abstract method turnOff() that returns a string.
// Then, create two derived classes WashingMachine and Refrigerator:

// WashingMachine should implement the turnOn() and turnOff() methods to return appropriate messages.
// Refrigerator should implement the turnOn() and turnOff() methods to return appropriate messages.
// Create instances of both classes and log the result of turning them on and off.

abstract class Appliance {
  abstract turnOn(): string;
  abstract turnOff(): string;
}

class WashingMachine extends Appliance {
  turnOn(): string {
    return "Washing machine IS ON";
  }

  turnOff(): string {
    return "Washing machine IS OFF";
  }
}

class Refrigerator extends Appliance {
  turnOn(): string {
    return "Refrigerator IS ON";
  }

  turnOff(): string {
    return "Refrigerator IS OFF";
  }
}

let washingMachine = new WashingMachine();
let refrigerator = new Refrigerator();

console.log(washingMachine.turnOn());
console.log(washingMachine.turnOff());

console.log(refrigerator.turnOn());
console.log(refrigerator.turnOff());

// Exercise 5: Abstract Transport Class
// Define an abstract class named Transport with the following:

// An abstract method start() that returns a string.
// An abstract method stop() that returns a string.
// Then, create two derived classes Car and Bicycle:

// Car should implement the start() and stop() methods to return appropriate messages.
// Bicycle should implement the start() and stop() methods to return appropriate messages.
// Create instances of both classes and log the result of starting and stopping them.

abstract class Transport {
  abstract start(): string;
  abstract stop(): string;
}

class Car extends Transport {
  start(): string {
    return "Car STARTED!";
  }
  stop(): string {
    return "Car STOPPED!";
  }
}

class Bicycle extends Transport {
  start(): string {
    return "Bicycle STARTED!";
  }
  stop(): string {
    return "Bicycle STOPPED!";
  }
}

let car = new Car();
let bicycle = new Bicycle();

console.log(car.start());
console.log(car.stop());

console.log(bicycle.start());
console.log(bicycle.stop());
