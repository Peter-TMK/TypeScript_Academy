// Exercise 1: Calculate Area
// Create a function named calculateArea that can calculate the area of different shapes.
// The function should be able to handle the following cases:
// Two arguments: radius (number) for calculating the area of a circle.
// Two arguments: width (number) and height (number) for calculating the area of a rectangle.
// One argument: side (number) for calculating the area of a square.
function calculateArea() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 1) {
        var arg = args[0];
        return Math.PI * arg * arg;
    }
    else if (args.length === 2) {
        var width = args[0], height = args[1];
        return width * height;
    }
    else {
        throw new Error("Invalid!");
    }
}
console.log(calculateArea(5)); // Circle with radius 5
console.log(calculateArea(4, 6)); // Rectangle with width 4 and height 6
console.log(calculateArea(3)); // Square with side 3
// Function implementation
function join() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 1 && Array.isArray(args[0])) {
        return args[0].join("");
    }
    else if (args.length === 2 &&
        Array.isArray(args[0]) &&
        Array.isArray(args[1])) {
        return args[0].concat(args[1]);
    }
    else {
        throw new Error("Invalid arguments");
    }
}
// Test cases
console.log(join(["Hello", " ", "World"])); // "Hello World"
console.log(join([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// Function implementation
function findElement(arg1, arg2) {
    if (Array.isArray(arg1) && typeof arg2 === "number") {
        return arg1.indexOf(arg2);
    }
    else if (typeof arg1 === "string" && typeof arg2 === "string") {
        return arg1.indexOf(arg2);
    }
    else {
        throw new Error("Invalid arguments");
    }
}
// Test cases
console.log(findElement([1, 2, 3, 4], 3)); // 2
console.log(findElement("Hello World", "o")); // 4
// Function implementation
function combine() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 2) {
        if (typeof args[0] === "number" && typeof args[1] === "number") {
            return args[0] + args[1];
        }
        else if (typeof args[0] === "string" && typeof args[1] === "string") {
            return args[0] + args[1];
        }
        else {
            throw new Error("Invalid arguments");
        }
    }
    else if (args.length === 3) {
        if (typeof args[0] === "number" &&
            typeof args[1] === "number" &&
            typeof args[2] === "string") {
            return "".concat(args[0], ", ").concat(args[1], ": ").concat(args[2]);
        }
        else {
            throw new Error("Invalid arguments");
        }
    }
    else {
        throw new Error("Invalid arguments");
    }
}
// Test cases
console.log(combine(1, 2)); // 3
console.log(combine("Hello", "World")); // "HelloWorld"
console.log(combine(1, 2, "result")); // "1, 2: result"
// Function implementation
function parseData() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 1 && typeof args[0] === "string") {
        return JSON.parse(args[0]);
    }
    else if (args.length === 2 &&
        typeof args[0] === "string" &&
        typeof args[1] === "string") {
        return args[0].split(args[1]);
    }
    else {
        throw new Error("Invalid arguments");
    }
}
// Test cases
console.log(parseData('{"name":"John","age":30}')); // { name: 'John', age: 30 }
console.log(parseData("name,age,city", ",")); // ["name", "age", "city"]
// function sum(a: number, b: number): number;
// function sum(a: number, b: number, c: number): number;
// function sum(a: number, b: number, c?: number): number {
//   if (c) return a + b + c;
//   return a + b;
// }
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2));
// Function overloads
// function calculateArea(radius: number): number;
// function calculateArea(width: number, height: number): number;
// function calculateArea(side: number): number;
// // Function implementation
// function calculateArea(...args: number[]): number {
//   if (args.length === 1) {
//     const [radiusOrSide] = args;
//     return Math.PI * Math.pow(radiusOrSide, 2); // Assume it's a circle if only one argument is given
//   } else if (args.length === 2) {
//     const [width, height] = args;
//     return width * height; // Rectangle case
//   } else {
//     throw new Error("Invalid number of arguments");
//   }
// }
// // Using the function
// console.log(calculateArea(5)); // Circle with radius 5
// console.log(calculateArea(4, 6)); // Rectangle with width 4 and height 6
// console.log(calculateArea(3)); // Square with side 3
