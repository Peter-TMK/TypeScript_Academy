// Exercise 1: Function Type Declaration
// Declare a variable named multiply with a function type that accepts two number parameters and returns a number.
// Then assign a function to this variable that multiplies the two numbers.
// const multiply = function (num1: number, num2: number): number
var multiply;
multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(4, 5));
// Exercise 2: String Manipulation Function Type
// Declare a variable named concatStrings with a function type that accepts two string parameters and returns a string.
// Assign a function to this variable that concatenates the two strings with a space in between.
var concatStrings;
concatStrings = function (str1, str2) {
    return "".concat(str1, " ").concat(str2);
};
console.log(concatStrings("Hi", "mlady"));
// Exercise 3: Boolean Check Function Type
// Declare a variable named isPositive with a function type that accepts a number parameter and returns a boolean.
// Assign a function to this variable that checks if the number is positive.
var isPositive;
isPositive = function (num) {
    return num > 0 ? true : false;
};
console.log(isPositive(6));
console.log(isPositive(0));
// Exercise 4: Array Sum Function Type
// Declare a variable named sumArray with a function type that accepts an array of number and returns a number.
// Assign a function to this variable that sums all the numbers in the array.
var sumArray;
sumArray = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(sumArray([1, 2, 3, 4, 5]));
// Exercise 5: Object Property Check Function Type
// Declare a variable named hasProperty with a function type that accepts an object and a string (property name) as parameters
// and returns a boolean. Assign a function to this variable that checks if the object has the specified property.
var hasProperty;
hasProperty = function (obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
};
var city = { name: "Lagos", population: "200+" };
console.log(hasProperty(city, "name"));
console.log(hasProperty(city, "population"));
console.log(hasProperty(city, "pop"));
// Instructions:
// Define each function type with appropriate type annotations for parameters and return types.
// Assign appropriate functions to each variable to match the declared function types.
// Test each function with different inputs to ensure they work as expected.
// Ensure that each function's implementation adheres to the type constraints specified.
