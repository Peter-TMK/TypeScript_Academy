// Exercise 1: Basic String Literal Type
// Declare a variable direction of type 'up' | 'down' | 'left' | 'right'.
// Assign it the value 'up' and log it to the console.
// Then, try to assign it an invalid value like 'forward' and observe the compiler error.
var direction;
direction = "up";
direction = "down";
console.log(direction);
var currentStatus = "pending";
console.log(currentStatus);
// Exercise 3: Function Parameter with String Literal Type
// Define a function handleMouseEvent that accepts a parameter event of
// type 'click' | 'dblclick' | 'mouseup' | 'mousedown'.
// Inside the function, log the event to the console.
// Test the function by calling it with different valid event types and log the results.
var handleMouseEvent = function (param) { return console.log(param); };
handleMouseEvent("click");
handleMouseEvent("dblclick");
handleMouseEvent("mouseup");
handleMouseEvent("mousedown");
// Exercise 4: Union of String Literal Types
// Declare a variable color of type 'red' | 'green' | 'blue'.
// Assign it the value 'green' and log it to the console.
// Then, attempt to assign it an invalid value like 'yellow' and observe the compiler error.
// let color: "red" | "green" | "blue" = "blue";
var color;
color = "green";
console.log(color);
var user = {
    name: "user1",
    role: "admin"
};
console.log(user);
