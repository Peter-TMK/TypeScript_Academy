// Exercise 1: Declaring Boolean Variables
// Declare three boolean variables: isPending, isComplete, and hasErrors.
// Assign values to them and log the results to the console.
var isPending = false;
var isComplete = true;
var hasErrors = false;
console.log(isPending, isComplete, hasErrors);
// Exercise 2: Using Boolean Operators
// Create boolean expressions using the logical AND (&&), OR (||), and NOT (!) operators
// with the boolean variables from Exercise 1. Log the results to the console.
var isPending2 = false;
var isComplete2 = true;
var hasErrors2 = false;
console.log(isPending2 || isComplete2);
console.log(isComplete2 && hasErrors2);
// Exercise 3: Type Annotations
// Declare boolean variables with explicit type annotations.
// Initialize them with values and log the results to the console.
var fruits = "kiwi";
var carNumber = 12345;
var isDayLight = true;
console.log(fruits, carNumber, isDayLight);
// Exercise 4: Boolean Function Parameters
// Create a function named toggleStatus that takes a boolean parameter status and returns the
// negated value of status. Test the function by passing in both true and false and log the results to the console.
function toggleStatus(status) {
    return !status;
}
console.log(toggleStatus(false));
// Exercise 5: Conditional Statements
// Write a function named checkStatus that takes two boolean parameters: isComplete and hasErrors.
// The function should return a string message based on the following conditions:
// If isComplete is true and hasErrors is false, return "Task completed successfully."
// If isComplete is false, return "Task is still pending."
// If hasErrors is true, return "Task encountered errors."
// Test the function with different combinations of isComplete and hasErrors
// and log the results to the console.
function checkStatus(isComplete, hasErrors) {
    var message = "Task completed successfully.";
    var message2 = "Task is still pending.";
    var message3 = "Task encountered errors.";
    if (isComplete && hasErrors === false) {
        return message;
    }
    if (isComplete === false) {
        return message2;
    }
    if (hasErrors === true) {
        return message3;
    }
    return "";
}
console.log(checkStatus(true, false));
console.log(checkStatus(false));
console.log(checkStatus(true));
// These exercises will help you get hands-on experience with TypeScript's boolean data type,
// including declaring variables, using boolean operators, working with type annotations,
// and writing functions that take and return boolean values.
