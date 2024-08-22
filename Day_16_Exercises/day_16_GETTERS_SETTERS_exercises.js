// Exercise 1: Basic Getter and Setter
// Define a class named Product with the following properties:
// private _name: string
// private _price: number
// Create getter and setter methods for both properties.
// Ensure that the setter for _price validates that the price is a positive number.
// Test the class by creating an instance and using the getters and setters.
var Product = /** @class */ (function () {
    function Product(name, price) {
        this._name = name;
        this._price = price;
    }
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (thisName) {
            if (thisName.length === 0) {
                throw new Error("Input a valid name!");
            }
            this._name = thisName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (thisPrice) {
            if (thisPrice <= 0) {
                throw new Error("Price should be a valid amount");
            }
            this._price = thisPrice;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var product = new Product("Hello", 123);
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
var User = /** @class */ (function () {
    function User(username, password) {
        this._username = username;
        this._password = password;
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (thisUserName) {
            if (thisUserName.length === 0) {
                throw new Error("Input a valid username!");
            }
            this._username = thisUserName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (thisPassword) {
            if (thisPassword.length < 8) {
                throw new Error("Password should be at least 8 characters long!");
            }
            this._password = thisPassword;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User("Hof", "12345");
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
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this._width = width;
        this._height = height;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (thisWidth) {
            this._width = thisWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (thisHeight) {
            this._height = thisHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this._height * this._width;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
var myRectangle = new Rectangle(5, 10);
console.log("Width: ".concat(myRectangle.width)); // Output: Width: 5
console.log("Height: ".concat(myRectangle.height)); // Output: Height: 10
console.log("Area: ".concat(myRectangle.area)); // Output: Area: 50
// Setting new values
myRectangle.width = 7;
myRectangle.height = 3;
console.log("New Width: ".concat(myRectangle.width)); // Output: New Width: 7
console.log("New Height: ".concat(myRectangle.height)); // Output: New Height: 3
console.log("New Area: ".concat(myRectangle.area)); // Output: New Area: 21
// Exercise 4: Combining Multiple Getters and Setters
// Define a class named BankAccount with the following properties:
// private _accountNumber: string
// private _balance: number
// private _ownerName: string
// Create getter and setter methods for all properties.
// Ensure that the setter for _balance validates that the balance is non-negative.
// Test the class by creating an instance and using the getters and setters.
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance, ownerName) {
        this._accountNumber = accountNumber;
        this._balance = balance;
        this._ownerName = ownerName;
    }
    Object.defineProperty(BankAccount.prototype, "accountNumber", {
        get: function () {
            return this._accountNumber;
        },
        set: function (thisAccountNumber) {
            this._accountNumber = thisAccountNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (thisBalance) {
            if (thisBalance <= 0) {
                throw new Error("Invalid value!");
            }
            this._balance = thisBalance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "ownerName", {
        get: function () {
            return this._ownerName;
        },
        set: function (thisOwnerName) {
            this._ownerName = thisOwnerName;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var bankAccount = new BankAccount("890", 500, "Tech");
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
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Employee.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (thisFirstName) {
            this._firstName = thisFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (thisLastName) {
            this._lastName = thisLastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return "".concat(this._firstName, " ").concat(this._lastName);
        },
        set: function (thisFullName) {
            var part = thisFullName.split(" ");
            this._firstName = part[0];
            this._lastName = part[1];
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee("Jane", "Doe");
employee.fullName = "Jane Smith";
console.log(employee.fullName); //   "Jane Smith"
