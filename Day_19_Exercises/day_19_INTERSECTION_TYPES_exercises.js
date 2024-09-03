// Exercise 1: Basic Intersection Type
// Create two interfaces, Car with properties make: string and model:
// string, and Engine with properties horsepower: number and type: string.
var carEngine = {
    make: "Honda",
    model: "12-R",
    horsepower: 23,
    type: "Saloon"
};
console.log(carEngine);
var manager = {
    name: "Alice",
    age: 35,
    position: "IT Manager",
    salary: 80000,
    department: "Information Technology"
};
console.log(manager);
var libraryItem = {
    title: "A new era",
    author: "Excel",
    publisher: "A-Z",
    year: 2024,
    inStock: true,
    copiesAvailable: 120
};
console.log(libraryItem);
var rectangleSquare = {
    width: 5,
    height: 6,
    sideLength: 2
};
console.log(rectangleSquare);
var CommunicationDevice = /** @class */ (function () {
    function CommunicationDevice() {
        this.message = "";
    }
    CommunicationDevice.prototype.sendMessage = function (message) {
        this.message = message;
        console.log(message);
    };
    CommunicationDevice.prototype.receiveMessage = function () {
        return this.message;
    };
    return CommunicationDevice;
}());
var communicationDevice = new CommunicationDevice();
communicationDevice.sendMessage("Hey Engineer!");
console.log(communicationDevice.receiveMessage());
