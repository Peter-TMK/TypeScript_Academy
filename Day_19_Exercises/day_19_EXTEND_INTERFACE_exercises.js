// Exercise 1: Extending a Basic Interface
// Create a basic interface Shape with the following methods:
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
var MyCircle = /** @class */ (function () {
    function MyCircle(radius) {
        this.radius = radius;
    }
    MyCircle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    MyCircle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return MyCircle;
}());
var myCircle = new MyCircle(4);
console.log(myCircle.area());
console.log(myCircle.perimeter());
console.log(myCircle.radius);
var FlyingCarClass = /** @class */ (function () {
    function FlyingCarClass() {
    }
    FlyingCarClass.prototype.drive = function () {
        return "Drivable car";
    };
    FlyingCarClass.prototype.fly = function () {
        return "Flyable car";
    };
    return FlyingCarClass;
}());
var flyingCarClass = new FlyingCarClass();
console.log(flyingCarClass.drive());
console.log(flyingCarClass.fly());
// Exercise 3: Extending a Class with an Interface
// Create a class Machine with a private property power: boolean and a method turnOn(): void that sets power to true.
// Define an interface AdvancedMachine that extends Machine and adds a method turnOff(): void.
// Create a subclass Robot that extends Machine and implements the AdvancedMachine interface,
// providing implementations for both turnOn() and turnOff() methods.
var Machine = /** @class */ (function () {
    function Machine() {
        this.power = false;
    }
    Machine.prototype.turnOn = function () {
        this.power = true;
        console.log("Machine is ON");
    };
    return Machine;
}());
var Robot = /** @class */ (function (_super) {
    __extends(Robot, _super);
    function Robot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Robot.prototype.turnOff = function () {
        console.log("Machine is OFF");
    };
    return Robot;
}(Machine));
var robot = new Robot();
robot.turnOn();
robot.turnOff();
var employeeFunction = function (employee) {
    console.log(employee);
};
employeeFunction({
    firstName: "Hello",
    lastName: "world",
    employeeId: 12,
    department: "Tech"
});
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (message) {
        console.log(message);
    };
    ConsoleLogger.prototype.logWithDetails = function (message, level) {
        console.log(message, level);
    };
    return ConsoleLogger;
}());
var consoleLogger = new ConsoleLogger();
consoleLogger.log("Logging well!");
consoleLogger.logWithDetails("Logging well!", "BETTER");
