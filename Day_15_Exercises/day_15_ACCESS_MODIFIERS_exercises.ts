// Exercise 1: Private Properties
// Create a BankAccount class with the following private properties:

// accountNumber: string
// balance: number
// Add a constructor to initialize these properties.
// Add a public method deposit(amount: number) to update the balance.
// Add a public method getBalance() that returns the current balance.
// Attempt to access the balance property directly from outside the class and observe the compile-time error.

class BankAccount {
  constructor(private accountNumber: string, private balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount: number) {
    return (this.balance += amount);
  }
  getBalance() {
    return this.balance;
  }
}

const bankAccount = new BankAccount("1234", 700);

console.log(bankAccount.deposit(350));
console.log(bankAccount.getBalance());
// console.log(bankAccount.balance);

// Exercise 2: Protected Properties
// Create a Person class with the following properties:

// protected firstName: string
// protected lastName: string
// Add a constructor to initialize these properties.
// Create a Student class that extends the Person class and adds a public method getFullName() which returns
// the full name by accessing the protected properties.
// Instantiate a Student object and call the getFullName() method.

class Person {
  constructor(protected firstName: string, protected lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends Person {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const student = new Student("Dev", "on");
console.log(student.getFullName());

// Exercise 3: Public Methods
// Create an Employee class with the following properties:

// private id: number
// private name: string
// public salary: number
// Add a constructor to initialize these properties.
// Add a public method getDetails() that returns a string with the employee's details including the salary.
// Instantiate an Employee object and call the getDetails() method to print the employee details.

class Employee {
  constructor(private id: number, private name: string, public salary: number) {
    this.id;
    this.name;
    this.salary;
  }
  public getDetails(): string {
    return `${this.id} ${this.name} ${this.salary}`;
  }
}

const employee = new Employee(123, "Lorry", 234);
console.log(employee.getDetails());

// Exercise 4: Access Modifiers in Constructor
// Create a Car class with the following properties:

// private make: string
// private model: string
// protected year: number
// Use the constructor to initialize these properties.
// Add a public method getCarDetails() that returns the car's make, model, and year.
// Create a SportsCar class that extends Car and adds a public method getCarYear() that returns the car's year.
// Instantiate a SportsCar object and call both getCarDetails() and getCarYear() methods.

class Car {
  constructor(
    private make: string,
    private model: string,
    protected year: number
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  public getCarDetails(): string {
    return `${this.make} ${this.model} ${this.year}`;
  }
}

class SportsCar extends Car {
  constructor(make: string, model: string, year: number) {
    super(make, model, year);
  }

  public getCarYear(): string {
    return `${this.year}`;
  }
}

const sportsCar = new SportsCar("Honda", "abc", 123);
console.log(sportsCar.getCarDetails());
console.log(sportsCar.getCarYear());

// Exercise 5: Mixed Access Modifiers
// Create a LibraryBook class with the following properties:

// private title: string
// protected author: string
// public isbn: string
// Use the constructor to initialize these properties.
// Add a public method getBookInfo() that returns the book's title and ISBN.
// Add a protected method getAuthor() that returns the book's author.
// Create a Library class that contains a method printBookDetails(book: LibraryBook) which accesses
// the public and protected methods of LibraryBook.
// Instantiate a LibraryBook object and use the Library class to print its details.

class LibraryBook {
  constructor(
    private title: string,
    protected author: string,
    public isbn: string
  ) {
    this.title;
    this.author;
    this.isbn;
  }
  public getBookInfo(): string {
    return `${this.title} ${this.isbn}`;
  }
  protected getAuthor(): string {
    return `${this.author}`;
  }
}

class Library {
  printBookDetails(book: LibraryBook): void {
    console.log(book.getBookInfo());
  }
}

const libraryBook = new LibraryBook("ABC", "DEV", "1234");
const library = new Library();
library.printBookDetails(libraryBook);
