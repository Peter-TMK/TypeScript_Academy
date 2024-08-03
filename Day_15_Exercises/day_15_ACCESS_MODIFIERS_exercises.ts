// Exercise 1: Private Properties
// Create a BankAccount class with the following private properties:

// accountNumber: string
// balance: number
// Add a constructor to initialize these properties.
// Add a public method deposit(amount: number) to update the balance.
// Add a public method getBalance() that returns the current balance.
// Attempt to access the balance property directly from outside the class and observe the compile-time error.

// Exercise 2: Protected Properties
// Create a Person class with the following properties:

// protected firstName: string
// protected lastName: string
// Add a constructor to initialize these properties.
// Create a Student class that extends the Person class and adds a public method getFullName() which returns
// the full name by accessing the protected properties.
// Instantiate a Student object and call the getFullName() method.

// Exercise 3: Public Methods
// Create an Employee class with the following properties:

// private id: number
// private name: string
// public salary: number
// Add a constructor to initialize these properties.
// Add a public method getDetails() that returns a string with the employee's details including the salary.
// Instantiate an Employee object and call the getDetails() method to print the employee details.

// Exercise 4: Access Modifiers in Constructor
// Create a Car class with the following properties:

// private make: string
// private model: string
// protected year: number
// Use the constructor to initialize these properties.
// Add a public method getCarDetails() that returns the car's make, model, and year.
// Create a SportsCar class that extends Car and adds a public method getCarYear() that returns the car's year.
// Instantiate a SportsCar object and call both getCarDetails() and getCarYear() methods.

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
