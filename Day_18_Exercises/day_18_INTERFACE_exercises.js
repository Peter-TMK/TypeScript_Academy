// Exercise 1: Interface for a Car
// Define an interface Car with the following properties:
function getCarInfo(car) {
    if (car.electric) {
        return "".concat(car.make, " ").concat(car.model, " ").concat(car.year, " ").concat(car.electric);
    }
    return "".concat(car.make, " ").concat(car.model, " ").concat(car.year);
}
// console.log(getCarInfo({"Honda", "11-BS", 2024, True}));
console.log(getCarInfo({ make: "Honda", model: "11-BS", year: 2024, electric: true }));
console.log(getCarInfo({ make: "Honda", electric: false, model: "11-BS", year: 2024 }));
console.log(getCarInfo({ make: "Honda", model: "11-BS", year: 2024 }));
function createUser(user) {
    return "".concat(user.id, " ").concat(user.username, " ").concat(user.email, " ").concat(user.password);
}
console.log(createUser({
    id: 1,
    username: "Excel",
    email: "Excel@g.co",
    password: "naso"
}));
var getBookInfo = function (book) {
    //   book.isbn = "12-78";
    return "".concat(book.title, " ").concat(book.author, " ").concat(book.isbn);
};
console.log(getBookInfo({ title: "A New Day", author: "Excel", isbn: "123-45" }));
var logger = function (message, level) {
    console.log("[".concat(message, "]: ").concat(level));
};
logger("System started successfully.", "info");
logger("Low disk space warning.", "warning");
logger("Unhandled exception occurred.", "error");
var StoreProduct = /** @class */ (function () {
    function StoreProduct(name, price) {
        this.name = name;
        this.price = price;
    }
    StoreProduct.prototype.display = function () {
        return "".concat(this.name, " ").concat(this.price);
    };
    return StoreProduct;
}());
var storeProduct = new StoreProduct("Hello", 4);
console.log(storeProduct.display());
