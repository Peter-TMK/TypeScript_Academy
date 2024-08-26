// Exercise 1: Abstract Shape Class
// Define an abstract class named Shape with the following:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// An abstract method area() that returns a number.
// An abstract method perimeter() that returns a number.
// Then, create two derived classes Circle and Rectangle:
// Circle should have a property radius and implement the area() and perimeter() methods.
// Rectangle should have properties width and height and implement the area() and perimeter() methods.
// Create instances of both classes and log their area and perimeter.
// Abstract class Shape
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
// Derived class Circle
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}(Shape));
// Derived class Rectangle
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}(Shape));
// Test the classes
var circle = new Circle(5);
console.log("Circle Area:", circle.area());
console.log("Circle Perimeter:", circle.perimeter());
var rectangle = new Rectangle(4, 6);
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        return this.constructor.name;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        return "Bark";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        return "Meow";
    };
    return Cat;
}(Animal));
var dog = new Dog();
console.log("Dog", dog.makeSound());
console.log("Dog", dog.move());
var cat = new Cat();
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
var Payment = /** @class */ (function () {
    function Payment() {
    }
    return Payment;
}());
var CreditCardPayment = /** @class */ (function (_super) {
    __extends(CreditCardPayment, _super);
    function CreditCardPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditCardPayment.prototype.processPayment = function (amount) {
        return "Payment of ".concat(amount, " via Credit Card");
    };
    return CreditCardPayment;
}(Payment));
var PayPalPayment = /** @class */ (function (_super) {
    __extends(PayPalPayment, _super);
    function PayPalPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPalPayment.prototype.processPayment = function (amount) {
        return "Payment of ".concat(amount, " via Paypal");
    };
    return PayPalPayment;
}(Payment));
var creditCardPayment = new CreditCardPayment();
var payPalPayment = new PayPalPayment();
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
var Appliance = /** @class */ (function () {
    function Appliance() {
    }
    return Appliance;
}());
var WashingMachine = /** @class */ (function (_super) {
    __extends(WashingMachine, _super);
    function WashingMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WashingMachine.prototype.turnOn = function () {
        return "Washing machine IS ON";
    };
    WashingMachine.prototype.turnOff = function () {
        return "Washing machine IS OFF";
    };
    return WashingMachine;
}(Appliance));
var Refrigerator = /** @class */ (function (_super) {
    __extends(Refrigerator, _super);
    function Refrigerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Refrigerator.prototype.turnOn = function () {
        return "Refrigerator IS ON";
    };
    Refrigerator.prototype.turnOff = function () {
        return "Refrigerator IS OFF";
    };
    return Refrigerator;
}(Appliance));
var washingMachine = new WashingMachine();
var refrigerator = new Refrigerator();
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
var Transport = /** @class */ (function () {
    function Transport() {
    }
    return Transport;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.start = function () {
        return "Car STARTED!";
    };
    Car.prototype.stop = function () {
        return "Car STOPPED!";
    };
    return Car;
}(Transport));
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bicycle.prototype.start = function () {
        return "Bicycle STARTED!";
    };
    Bicycle.prototype.stop = function () {
        return "Bicycle STOPPED!";
    };
    return Bicycle;
}(Transport));
var car = new Car();
var bicycle = new Bicycle();
console.log(car.start());
console.log(car.stop());
console.log(bicycle.start());
console.log(bicycle.stop());
