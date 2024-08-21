// Exercise 1: Basic Inheritance
// Define a class named Animal with the following properties and methods:

// private name: string
// constructor(name: string)
// public getName(): string
// Then, define a class named Dog that extends Animal with an additional method:

// public bark(): string that returns "Woof!"
// Test the Dog class by creating an instance and calling its methods.

// Exercise 2: Inheritance with Additional Properties
// Define a class named Vehicle with the following properties and methods:

// private make: string
// private model: string
// constructor(make: string, model: string)
// public getDetails(): string that returns "Make: make, Model: model"
// Then, define a class named Car that extends Vehicle with an additional property:

// private numberOfDoors: number
// The Car class should have its own constructor that calls the parent constructor and initializes the numberOfDoors property.
// Add a method public getCarDetails(): string that returns "Make: make, Model: model, Doors: numberOfDoors"

// Test the Car class by creating an instance and calling its methods.

// Exercise 3: Method Overriding
// Define a class named Shape with the following method:

// public area(): number that returns 0
// Then, define a class named Rectangle that extends Shape with the following properties and methods:

// private width: number
// private height: number
// constructor(width: number, height: number)
// Override the area() method to return the area of the rectangle.
// Test the Rectangle class by creating an instance and calling the area() method.

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
