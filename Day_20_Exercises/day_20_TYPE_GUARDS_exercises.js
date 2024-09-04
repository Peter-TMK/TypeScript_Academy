// 1. Type Guard with typeof Operator
// Create a function calculate that takes two arguments a and b of type string | number.
// Use the typeof operator within the function to determine if both arguments are numbers or strings.
// If both are numbers, return their sum. If both are strings, return their concatenation.
// Throw an error if the arguments are of different types.
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
function numOrString(a, b) {
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
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        return "Boo Hoo";
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        return "Meow meow";
    };
    return Cat;
}());
function makeSound(animal) {
    // let msg: string;
    if (animal instanceof Dog) {
        return animal.bark();
    }
    else if (animal instanceof Cat) {
        return animal.meow();
    }
    return "Unknown Input";
}
var dog = new Dog();
var cat = new Cat();
console.log(makeSound(dog));
console.log(makeSound(cat));
function getDetails(params) {
    if ("accessLevel" in params) {
        return "This is params.accessLevel";
    }
    else if ("username" in params) {
        return "This is params.username";
    }
    else {
        return "Invalid details";
    }
}
var admin = { accessLevel: "superuser" };
var user = { username: "john_doe" };
console.log(getDetails(admin)); // Outputs: Admin with access level: superuser
console.log(getDetails(user)); // Outputs: User with username: john_doe
function isCircle(shape) {
    return shape.radius !== undefined;
}
function area(shape) {
    if (isCircle(shape)) {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        return Math.pow(shape.sideLength, 2);
    }
}
var circle = { radius: 5 };
var square = { sideLength: 4, width: 6 };
console.log(area(circle)); // Outputs: 78.53981633974483 (Area of the circle)
console.log(area(square)); // Outputs: 16 (Area of the square)
// 5. Combining Multiple Type Guards
// Define three classes: Employee with a method getSalary(), Manager with a method getBonus(), and Intern with a method getStipend().
// Create a function getCompensation that takes a parameter of type Employee | Manager | Intern.
// Use a combination of typeof, instanceof, and user-defined type guards to determine the type of the parameter
// and return the appropriate compensation (salary, bonus, or stipend).
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getSalary = function () {
        return 50000; // Example salary
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getBonus = function () {
        return 10000; // Example bonus
    };
    return Manager;
}(Employee));
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Intern.prototype.getStipend = function () {
        return 2000; // Example stipend
    };
    return Intern;
}(Employee));
// User-defined type guard to check if an object is a Manager
function isManager(emp) {
    return emp.getBonus !== undefined;
}
// User-defined type guard to check if an object is an Intern
function isIntern(emp) {
    return emp.getStipend !== undefined;
}
function getCompensation(emp) {
    if (isManager(emp)) {
        return emp.getSalary() + emp.getBonus();
    }
    else if (isIntern(emp)) {
        return emp.getStipend();
    }
    else {
        return emp.getSalary();
    }
}
var employee = new Employee();
var manager = new Manager();
var intern = new Intern();
console.log(getCompensation(employee)); // Outputs: 50000 (Employee salary)
console.log(getCompensation(manager)); // Outputs: 60000 (Manager salary + bonus)
console.log(getCompensation(intern)); // Outputs: 2000 (Intern stipend)
