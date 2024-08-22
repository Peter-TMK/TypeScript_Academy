// Exercise 1: Basic Getter and Setter
// Define a class named Product with the following properties:

// private _name: string
// private _price: number
// Create getter and setter methods for both properties.
// Ensure that the setter for _price validates that the price is a positive number.
// Test the class by creating an instance and using the getters and setters.

class Product {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  public get name(): string {
    return this._name;
  }

  public set name(thisName: string) {
    if (thisName.length === 0) {
      throw new Error("Input a valid name!");
    }
    this._name = thisName;
  }

  public get price(): number {
    return this._price;
  }

  public set price(thisPrice: number) {
    if (thisPrice <= 0) {
      throw new Error("Price should be a valid amount");
    }
    this._price = thisPrice;
  }
}

let product = new Product("Hello", 123);
console.log("General ", product);
product.price = 34;
// console.log(product.name);
console.log("General2 ", product);
console.log("Price ", product.price);

// Exercise 2: Complex Validation in Setter
// Define a class named User with the following properties:

// private _username: string
// private _password: string
// Create getter and setter methods for both properties.
// Ensure that the setter for _password validates that the password is at
// least 8 characters long
// and contains at least one number and one uppercase letter(optional).
// Test the class by creating an instance and using the getters and setters.

class User {
  private _username: string;
  private _password: string;

  constructor(username: string, password: string) {
    this._username = username;
    this._password = password;
  }

  public get username(): string {
    return this._username;
  }

  public set username(thisUserName: string) {
    if (thisUserName.length === 0) {
      throw new Error("Input a valid username!");
    }
    this._username = thisUserName;
  }

  public get password(): string {
    return this._password;
  }

  public set password(thisPassword: string) {
    if (thisPassword.length < 8) {
      throw new Error("Password should be at least 8 characters long!");
    }
    this._password = thisPassword;
  }
}

let user = new User("Hof", "12345");

console.log(user);
user.password = "12345678";
console.log(user.username);
console.log(user.password);

// Exercise 3: Getter with Computed Property
// Define a class named Rectangle with the following properties:

// private _width: number
// private _height: number
// Create getter and setter methods for both properties.
// Additionally, create a getter method area that returns the computed area of the rectangle.
// Test the class by creating an instance and using the getters and setters.

class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  public get width(): number {
    return this._width;
  }

  public set width(thisWidth: number) {
    this._width = thisWidth;
  }

  public get height(): number {
    return this._height;
  }

  public set height(thisHeight: number) {
    this._height = thisHeight;
  }

  public get area(): number {
    return this._height * this._width;
  }

  //   public set area(thisHeight: number, thisWidth: number) {
  //     this._height = thisHeight;
  //     this._width = thisWidth;
  //   }
}

let myRectangle = new Rectangle(5, 10);

console.log(`Width: ${myRectangle.width}`); // Output: Width: 5
console.log(`Height: ${myRectangle.height}`); // Output: Height: 10
console.log(`Area: ${myRectangle.area}`); // Output: Area: 50

// Setting new values
myRectangle.width = 7;
myRectangle.height = 3;

console.log(`New Width: ${myRectangle.width}`); // Output: New Width: 7
console.log(`New Height: ${myRectangle.height}`); // Output: New Height: 3
console.log(`New Area: ${myRectangle.area}`); // Output: New Area: 21

// Exercise 4: Combining Multiple Getters and Setters
// Define a class named BankAccount with the following properties:

// private _accountNumber: string
// private _balance: number
// private _ownerName: string
// Create getter and setter methods for all properties.
// Ensure that the setter for _balance validates that the balance is non-negative.
// Test the class by creating an instance and using the getters and setters.

class BankAccount {
  private _accountNumber: string;
  private _balance: number;
  private _ownerName: string;

  constructor(accountNumber: string, balance: number, ownerName: string) {
    this._accountNumber = accountNumber;
    this._balance = balance;
    this._ownerName = ownerName;
  }

  public get accountNumber(): string {
    return this._accountNumber;
  }

  public set accountNumber(thisAccountNumber: string) {
    this._accountNumber = thisAccountNumber;
  }

  public get balance(): number {
    return this._balance;
  }

  public set balance(thisBalance: number) {
    if (thisBalance <= 0) {
      throw new Error("Invalid value!");
    }
    this._balance = thisBalance;
  }

  public get ownerName(): string {
    return this._ownerName;
  }

  public set ownerName(thisOwnerName: string) {
    this._ownerName = thisOwnerName;
  }
}
let bankAccount = new BankAccount("890", 500, "Tech");
console.log(bankAccount);
console.log(bankAccount.accountNumber);
console.log(bankAccount.balance);
console.log(bankAccount.ownerName);

bankAccount.accountNumber = "123";
bankAccount.balance = 2600;
bankAccount.ownerName = "Dev";

console.log(bankAccount.accountNumber);
console.log(bankAccount.balance);
console.log(bankAccount.ownerName);

// Exercise 5: Full Name Getter and Setter
// Define a class named Employee with the following properties:

// private _firstName: string
// private _lastName: string
// Create getter and setter methods for both properties.
// Additionally, create a getter method fullName that returns the concatenated first and last name,
// and a setter method fullName that accepts a full name string and splits it into first and last name.
// Test the class by creating an instance and using the getters and setters.

class Employee {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(thisFirstName: string) {
    this._firstName = thisFirstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(thisLastName: string) {
    this._lastName = thisLastName;
  }

  public get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  public set fullName(thisFullName: string) {
    let part = thisFullName.split(" ");
    this._firstName = part[0];
    this._lastName = part[1];
  }
}

let employee = new Employee("Jane", "Doe");

employee.fullName = "Jane Smith";
console.log(employee.fullName); //   "Jane Smith"
