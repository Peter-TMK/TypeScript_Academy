// Exercise 1: Raising an Error
// Create a function raiseError that takes a string message as an argument
// and always throws an error with that message. The return type of the function should be never.
function raiseError(message) {
    throw new Error(message);
}
// console.log(raiseError("hello"));
// Exercise 2: Indefinite Loop
// Write a function infiniteLoop that contains an indefinite loop and never returns.
// The return type of the function should be never.
// function infiniteLoop(): never {
//   while (true) {}
// }
// infiniteLoop();
// Exercise 3: Type Guard with Never
// Create a function checkType that takes an argument of type string | number | boolean.
// The function should return true if the argument is a string, false if it's a number,
// and throw an error if it's a boolean. Use the never type to handle the boolean case.
// function checkType(params: string | number | boolean): boolean {
//   if (typeof params === "string") {
//     return true;
//   } else if (typeof params === "number") {
//     return false;
//   }
//   throw new Error("Invalid type!");
// }
// console.log(checkType("hello"));
// console.log(checkType(false));
// Exercise 4: Future-proofing with Never
// Write a function processInput that takes an argument of type string | number.
// The function should return true if the argument is a string, false if it's a number,
// and call a raiseError function if the argument is of any other type.
// Use the never type for the raiseError function.
// function processInput(params: string | number): boolean {
//   if (typeof params === "string") {
//     return true;
//   } else if (typeof params === "number") {
//     return false;
//   }
//   return raiseError("Invalid type again!");
// }
// console.log(processInput(true));
// Exercise 5: Never Type vs. Void Type
// Create two functions: logMessage and raiseError.
// The logMessage function should take a string message and log it to the console, with a return type of void.
// The raiseError function should take a string message and throw an error with that message,
// with a return type of never.
// Write a function handleInput that takes a boolean argument.
// If the argument is true, it should call logMessage;
// if the argument is false, it should call raiseError.
function logMessage(msg) {
    console.log(msg);
}
function handleInput(msg1) {
    if (msg1 === true) {
        logMessage("Condition is true");
    }
    else if (msg1 === false) {
        raiseError("Condition is true");
    }
}
console.log(handleInput(false));
