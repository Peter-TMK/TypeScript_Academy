// Exercise 1: Type Annotations for Variables and Constants
// Create variables and constants with type annotations for string, number, and boolean types.
// Initialize them with appropriate values and try assigning values of different types to see TypeScript errors.
var fruit = "pear";
var vegetable = "onion";
var point = 45;
console.log(fruit);
console.log(vegetable);
console.log(point);
// Exercise 2: Array Type Annotations
// Declare an array of numbers with type annotations. Initialize it with some numeric values and try
// adding a string to the array to observe the TypeScript error.
var myNums = [4, 2, 7, 9, 1];
// add a sting in the array
// const myNums: number[] = [4, 2, "ui", 9, 1];
console.log(myNums);
var car = {
    make: "Ford",
    model: "11-22",
    year: 2024
};
console.log(car);
// Exercise 4: Function Argument Type Annotations
// Write a function that takes two parameters, a string and a number, and returns a string.
// Use type annotations for the parameters and the return type.
function city(name, population) {
    console.log("".concat(name, " has over ").concat(population, " people in size"));
    return "".concat(name, " has over ").concat(population, " people in size");
}
city("Lagos", 2000000);
// Exercise 5: Function Type Annotations
// Create a variable to store a function that takes a boolean parameter and returns a string.
// Use type annotations to define this function type.
// Assign a valid function to this variable and observe TypeScript errors if you try to assign an invalid function.
var techStack = function (language) {
    console.log("Programming is ".concat(language));
    return "Programming is ".concat(language);
};
techStack(true);
