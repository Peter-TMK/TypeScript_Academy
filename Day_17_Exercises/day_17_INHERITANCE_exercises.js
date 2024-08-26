// Exercise 1: Basic Inheritance
// Define a class named Animal with the following properties and methods:
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
// private name: string
// constructor(name: string)
// public getName(): string
// Then, define a class named Dog that extends Animal with an additional method:
// public bark(): string that returns "Woof!"
// Test the Dog class by creating an instance and calling its methods.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getName = function () {
        return "".concat(this.name);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        return "Woof!";
    };
    return Dog;
}(Animal));
var dog = new Dog("Bingo");
console.log(dog);
console.log(dog.getName());
console.log(dog.bark());
// Exercise 2: Inheritance with Additional Properties
// Define a class named Vehicle with the following properties and methods:
// private make: string
// private model: string
// constructor(make: string, model: string)
// public getDetails(): string that returns "Make: make, Model: model"
// Then, define a class named Car that extends Vehicle with an additional property:
// private numberOfDoors: number
// The Car class should have its own constructor that calls the
// parent constructor and initializes the numberOfDoors property.
// Add a method public getCarDetails(): string that returns "Make: make, Model: model, Doors: numberOfDoors"
// Test the Car class by creating an instance and calling its methods.
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    Vehicle.prototype.getDetails = function () {
        return "".concat(this.make, " ").concat(this.model);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, numberOfDoors) {
        var _this = _super.call(this, make, model) || this;
        _this.numberOfDoors = numberOfDoors;
        return _this;
    }
    Car.prototype.getCarDetails = function () {
        return _super.prototype.getDetails.call(this) + " ".concat(this.numberOfDoors);
    };
    return Car;
}(Vehicle));
var car = new Car("Honda", "12-AB", 2);
console.log(car);
console.log(car.getCarDetails());
// Exercise 3: Method Overriding
// Define a class named Shape with the following method:
// public area(): number that returns 0
// Then, define a class named Rectangle that extends Shape with the following properties and methods:
// private width: number
// private height: number
// constructor(width: number, height: number)
// Override the area() method to return the area of the rectangle.
// Test the Rectangle class by creating an instance and calling the area() method.
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.area = function () {
        return 0;
    };
    return Shape;
}());
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
    return Rectangle;
}(Shape));
var rectangle = new Rectangle(7, 6);
console.log(rectangle.area());
// Exercise 4: Inheritance and Method Overriding with Super
// Define a class named Person with the following properties and methods:
// private firstName: string
// private lastName: string
// constructor(firstName: string, lastName: string)
// public getFullName(): string that returns "firstName lastName"
// Then, define a class named Student that extends Person with the following properties and methods:
// private studentId: string
// constructor(firstName: string, lastName: string, studentId: string)
// Override the getFullName() method to return "firstName lastName (ID: studentId)" using super.
// Test the Student class by creating an instance and calling the getFullName() method.
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, studentId) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.getFullName = function () {
        return _super.prototype.getFullName.call(this) + " ".concat(this.studentId);
    };
    return Student;
}(Person));
var student = new Student("Hello", "world", "334");
console.log(student);
console.log(student.getFullName());
// Exercise 5: Inheritance with Multiple Levels
// Define a class named Employee with the following properties and methods:
// private employeeId: string
// private department: string
// constructor(employeeId: string, department: string)
// public getEmployeeDetails(): string that returns "ID: employeeId, Department: department"
// Then, define a class named Manager that extends Employee with the following properties and methods:
// private numberOfReports: number
// constructor(employeeId: string, department: string, numberOfReports: number)
// Override the getEmployeeDetails() method to return "ID: employeeId, Department: department, Reports: numberOfReports"
// Finally, define a class named Director that extends Manager with an additional property:
// private region: string
// constructor(employeeId: string, department: string, numberOfReports: number, region: string)
// Override the getEmployeeDetails() method to return "ID: employeeId, Department: department, Reports: numberOfReports, Region: region"
// Test the Director class by creating an instance and calling the getEmployeeDetails() method.
var Employee = /** @class */ (function () {
    function Employee(employeeId, department) {
        this.employeeId = employeeId;
        this.department = department;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "".concat(this.employeeId, " ").concat(this.department);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(employeeId, department, numberOfReports, region) {
        var _this = _super.call(this, employeeId, department) || this;
        _this.numberOfReports = numberOfReports;
        _this.region = region;
        return _this;
    }
    Manager.prototype.getEmployeeDetails = function () {
        return (_super.prototype.getEmployeeDetails.call(this) + " ".concat(this.numberOfReports, " ").concat(this.region));
    };
    return Manager;
}(Employee));
var manager = new Manager("123", "Tech", 53, "SW");
console.log(manager);
console.log(manager.getEmployeeDetails());
