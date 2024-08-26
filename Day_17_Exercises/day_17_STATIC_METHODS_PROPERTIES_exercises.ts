// Exercise 1: Static Property Initialization
// Define a class named Counter with the following:

// A static property count initialized to 0.
// A constructor that increments the count property by 1 each time a new instance of the class is created.
// Create three instances of the Counter class and log the value of Counter.count to the console.
// Verify that it shows the expected count value.

class Counter {
  private static headCount: number = 0;
  constructor() {
    Counter.headCount++;
  }

  public static getHeadCount(): number {
    return Counter.headCount;
  }
}

let counter = new Counter();
let counter2 = new Counter();

console.log(Counter);
console.log(Counter.getHeadCount());

// Exercise 2: Static Method for Utility
// Define a class named MathUtilities with the following:

// A static method square that takes a number as an argument and returns its square.
// A static method cube that takes a number as an argument and returns its cube.
// Call the static methods square and cube directly using the class name and log the results to the console.

class MathUtilities {
  static square(num: number): number {
    return num * num;
  }

  static cube(num: number): number {
    return num * num * num;
  }
}

console.log(MathUtilities.square(4));
console.log(MathUtilities.cube(5));

// Exercise 3: Static Method with Static Property
// Define a class named Library with the following:

// A private static property books initialized to an empty array.
// A static method addBook that takes a book title as an argument and adds it to the books array.
// A static method getBooks that returns the list of books in the books array.
// Add a few books using the addBook method and retrieve the list of books using the getBooks method. Log the results to the console.

class Library {
  // private static books: string[] = [];
  private static books: Array<string> = [];

  static addBook(bookTitle: string): void {
    this.books.push(bookTitle);
  }

  static getBooks(): Array<string> {
    return this.books;
  }
}

console.log(Library);
Library.addBook("Alpha");
Library.addBook("Beta");
Library.addBook("Omega");
console.log(Library.getBooks());

// Exercise 4: Static Counter in a Class
// Define a class named User with the following:

// A static property userCount initialized to 0.
// A constructor that increments the userCount property by 1 each time a new instance of the class is created.
// A static method getUserCount that returns the current value of userCount.
// Create a few instances of the User class and call the getUserCount method to log the total number of users created.

class User {
  private static userCount: number = 0;
  constructor() {
    User.userCount++;
  }
  public static getUserCount(): number {
    return User.userCount;
  }
}

let user = new User();
let user2 = new User();
let user3 = new User();
let user4 = new User();
let user5 = new User();

// console.log(User);
console.log(User.getUserCount());

// Exercise 5: Static Configuration Class
// Define a class named Config with the following:

// A private static property settings initialized to an empty object.
// A static method setSetting that takes a key and value as arguments and sets the key-value pair in the settings object.
// A static method getSetting that takes a key as an argument and returns the corresponding value from the settings object.
// Set and retrieve various settings using the setSetting and getSetting methods, and log the results to the console.

class Config {
  private static gear: { [key: string]: any } = {};

  static setSetting(key: string, value: any): void {
    this.gear[key] = value;
  }
  static getSetting(key: string): any {
    return this.gear;
  }
}

console.log(Config);
// Setting various configuration settings
Config.setSetting("apiUrl", "https://api.example.com");
Config.setSetting("timeout", 5000);
Config.setSetting("theme", "dark");

// Retrieving and logging the configuration settings
console.log(Config.getSetting("apiUrl")); // Output: "https://api.example.com"
console.log(Config.getSetting("timeout")); // Output: 5000
console.log(Config.getSetting("theme")); // Output: "dark"
