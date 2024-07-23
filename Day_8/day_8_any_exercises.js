// Exercise 1: Parsing JSON with any
// Write a function parseJson that takes a JSON string and parses it using JSON.parse().
// Assign the parsed value to a variable with the any type and log the latitude and longitude properties
// to the console. Example JSON string: {"latitude": 51.5074, "longitude": -0.1278}.
function parseJson(jsonString) {
    var jsonParsed = JSON.parse(jsonString);
    console.log(jsonParsed);
}
parseJson("{\"latitude\": 51.5074, \"longitude\": -0.1278}");
// Exercise 2: Implicit Typing with any
// Declare a variable named data without specifying a type.
// Assign it different types of values (number, string, and object) and log each value to the console.
// Observe the behavior of TypeScript's implicit typing.
var data = [24, "Alpha", { h: 5, k: true }];
var data2 = [24, "Alpha", { h: 5, k: true }];
data.forEach(function (element) {
    console.log(element);
});
// data2.forEach((element) => {
//   console.log(element);
// });
// Exercise 3: Handling Dynamic User Input
// Create a function processInput that takes a user input of type any and logs a different message
// based on the type of the input (number, string, or object).
// Use the typeof operator to determine the type of the input.
function processInput(input) {
    if (typeof input === "number") {
        console.log("Input is a number:", input);
    }
    else if (typeof input === "string") {
        console.log("Input is a string:", input);
    }
    else if (typeof input === "object" && input !== null) {
        console.log("Input is an object:", input);
    }
    else {
        console.log("Input type is not supported:", input);
    }
}
// Test cases
processInput(42); // Input is a number: 42
processInput("Hello, world!"); // Input is a string: Hello, world!
processInput({ name: "John", age: 30 }); // Input is an object: { name: "John", age: 30 }
processInput(null); // Input type is not supported: null
processInput(undefined); // Input type is not supported: undefined
// Exercise 4: Calling Methods on any Type
// Declare a variable result of type any. Assign it a number and call the toFixed method.
// Then, assign it a string and call the toUpperCase method. Log the results to the console.
var result = 8;
console.log(result.toFixed());
result = "Eight";
console.log(result.toUpperCase());
// Exercise 5: Comparing any and object Types
// Declare two variables, one of type any and the other of type object.
// Assign both variables the value 10.123. Try to call the toFixed method on both variables
// and observe the behavior. Log any errors to the console.
var aType = 10.123;
// const bType: object = 10.123;
console.log(aType.toFixed());
// console.log(bType.toFixed());
