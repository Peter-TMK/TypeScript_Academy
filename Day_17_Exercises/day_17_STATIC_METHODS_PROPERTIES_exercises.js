// Exercise 1: Static Property Initialization
// Define a class named Counter with the following:
// A static property count initialized to 0.
// A constructor that increments the count property by 1 each time a new instance of the class is created.
// Create three instances of the Counter class and log the value of Counter.count to the console.
// Verify that it shows the expected count value.
var Counter = /** @class */ (function () {
    function Counter() {
        Counter.headCount++;
    }
    Counter.getHeadCount = function () {
        return Counter.headCount;
    };
    Counter.headCount = 0;
    return Counter;
}());
var counter = new Counter();
var counter2 = new Counter();
console.log(Counter);
console.log(Counter.getHeadCount());
// Exercise 2: Static Method for Utility
// Define a class named MathUtilities with the following:
// A static method square that takes a number as an argument and returns its square.
// A static method cube that takes a number as an argument and returns its cube.
// Call the static methods square and cube directly using the class name and log the results to the console.
var MathUtilities = /** @class */ (function () {
    function MathUtilities() {
    }
    MathUtilities.square = function (num) {
        return num * num;
    };
    MathUtilities.cube = function (num) {
        return num * num * num;
    };
    return MathUtilities;
}());
console.log(MathUtilities.square(4));
console.log(MathUtilities.cube(5));
// Exercise 3: Static Method with Static Property
// Define a class named Library with the following:
// A private static property books initialized to an empty array.
// A static method addBook that takes a book title as an argument and adds it to the books array.
// A static method getBooks that returns the list of books in the books array.
// Add a few books using the addBook method and retrieve the list of books using the getBooks method. Log the results to the console.
var Library = /** @class */ (function () {
    function Library() {
    }
    Library.addBook = function (bookTitle) {
        this.books.push(bookTitle);
    };
    Library.getBooks = function () {
        return this.books;
    };
    // private static books: string[] = [];
    Library.books = [];
    return Library;
}());
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
var User = /** @class */ (function () {
    function User() {
        User.userCount++;
    }
    User.getUserCount = function () {
        return User.userCount;
    };
    User.userCount = 0;
    return User;
}());
var user = new User();
var user2 = new User();
var user3 = new User();
var user4 = new User();
var user5 = new User();
// console.log(User);
console.log(User.getUserCount());
// Exercise 5: Static Configuration Class
// Define a class named Config with the following:
// A private static property settings initialized to an empty object.
// A static method setSetting that takes a key and value as arguments and sets the key-value pair in the settings object.
// A static method getSetting that takes a key as an argument and returns the corresponding value from the settings object.
// Set and retrieve various settings using the setSetting and getSetting methods, and log the results to the console.
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.setSetting = function (key, value) {
        this.gear[key] = value;
    };
    Config.getSetting = function (key) {
        return this.gear;
    };
    Config.gear = {};
    return Config;
}());
console.log(Config);
// Setting various configuration settings
Config.setSetting("apiUrl", "https://api.example.com");
Config.setSetting("timeout", 5000);
Config.setSetting("theme", "dark");
// Retrieving and logging the configuration settings
console.log(Config.getSetting("apiUrl")); // Output: "https://api.example.com"
console.log(Config.getSetting("timeout")); // Output: 5000
console.log(Config.getSetting("theme")); // Output: "dark"
