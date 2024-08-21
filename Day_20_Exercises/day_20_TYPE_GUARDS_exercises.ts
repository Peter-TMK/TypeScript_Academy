// 1. Type Guard with typeof Operator
// Create a function calculate that takes two arguments a and b of type string | number.
// Use the typeof operator within the function to determine if both arguments are numbers or strings.
// If both are numbers, return their sum. If both are strings, return their concatenation.
// Throw an error if the arguments are of different types.

// 2. Type Guard with instanceof Operator
// Define two classes: Dog with a method bark() and Cat with a method meow().
// Create a function makeSound that takes a parameter of type Dog | Cat.
// Use the instanceof operator to determine if the parameter is a Dog or Cat,
// and call the appropriate method (bark or meow).

// 3. Type Guard with in Operator
// Define two interfaces: Admin with a property accessLevel and User with a property username.
// Create a function getDetails that takes a parameter of type Admin | User.
// Use the in operator to check if the parameter is an Admin or User, and return a string with the relevant details.

// 4. User-defined Type Guard
// Define two interfaces: Circle with a property radius and Square with a property sideLength.
// Create a user-defined type guard function isCircle that checks if an object is of type Circle.
// Write a function getArea that takes a parameter of type Circle | Square, uses the isCircle type guard to determine the type,
// and returns the area of the shape.

// 5. Combining Multiple Type Guards
// Define three classes: Employee with a method getSalary(), Manager with a method getBonus(), and Intern with a method getStipend().
// Create a function getCompensation that takes a parameter of type Employee | Manager | Intern.
// Use a combination of typeof, instanceof, and user-defined type guards to determine the type of the parameter
// and return the appropriate compensation (salary, bonus, or stipend).
