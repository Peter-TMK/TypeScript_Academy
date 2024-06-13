// let message: string = "Hello tsc tut";
// // console.log(message);
function getProduct(id) {
    return {
        id: id,
        name: "".concat(id, " beautiful cars"),
        price: 2999.99
    };
}
function showProduct(name, price) {
    console.log("".concat(name, " have price: $").concat(price));
}
var product = getProduct(5);
showProduct(product.name, product.price);
