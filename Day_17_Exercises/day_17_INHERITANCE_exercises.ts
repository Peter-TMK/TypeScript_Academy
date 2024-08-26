// Exercise 1: Basic Inheritance
// Define a class named Animal with the following properties and methods:

// private name: string
// constructor(name: string)
// public getName(): string
// Then, define a class named Dog that extends Animal with an additional method:

// public bark(): string that returns "Woof!"
// Test the Dog class by creating an instance and calling its methods.

class Animal {
  constructor(private name: string) {}
  public getName(): string {
    return `${this.name}`;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  public bark(): string {
    return "Woof!";
  }
}

let dog = new Dog("Bingo");
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

class Vehicle {
  constructor(private make: string, private model: string) {}
  public getDetails(): string {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string, private numberOfDoors: number) {
    super(make, model);
  }

  public getCarDetails(): string {
    return super.getDetails() + ` ${this.numberOfDoors}`;
  }
}

let car = new Car("Honda", "12-AB", 2);
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

class Shape {
  public area(): number {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }
  public area(): number {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle(7, 6);
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

class Person {
  constructor(private firstName: string, private lastName: string) {}
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName: string, lastName: string, private studentId: string) {
    super(firstName, lastName);
  }
  public getFullName(): string {
    return super.getFullName() + ` ${this.studentId}`;
  }
}

let student = new Student("Hello", "world", "334");
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

class Employee {
  constructor(private employeeId: string, private department: string) {}
  public getEmployeeDetails(): string {
    return `${this.employeeId} ${this.department}`;
  }
}

class Manager extends Employee {
  constructor(
    employeeId: string,
    department: string,
    private numberOfReports: number,
    private region: string
  ) {
    super(employeeId, department);
  }
  public getEmployeeDetails(): string {
    return (
      super.getEmployeeDetails() + ` ${this.numberOfReports} ${this.region}`
    );
  }
}

let manager = new Manager("123", "Tech", 53, "SW");
console.log(manager);
console.log(manager.getEmployeeDetails());
