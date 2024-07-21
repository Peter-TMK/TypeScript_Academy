// Exercise 1: Raising an Error
// Create a function raiseError that takes a string message as an argument
// and always throws an error with that message. The return type of the function should be never.

// Exercise 2: Indefinite Loop
// Write a function infiniteLoop that contains an indefinite loop and never returns.
// The return type of the function should be never.

// Exercise 3: Type Guard with Never
// Create a function checkType that takes an argument of type string | number | boolean.
// The function should return true if the argument is a string, false if it's a number,
// and throw an error if it's a boolean. Use the never type to handle the boolean case.

// Exercise 4: Future-proofing with Never
// Write a function processInput that takes an argument of type string | number.
// The function should return true if the argument is a string, false if it's a number,
// and call a raiseError function if the argument is of any other type.
// Use the never type for the raiseError function.

// Exercise 5: Never Type vs. Void Type
// Create two functions: logMessage and raiseError.
// The logMessage function should take a string message and log it to the console, with a return type of void.
// The raiseError function should take a string message and throw an error with that message,
// with a return type of never.
// Write a function handleInput that takes a boolean argument.
// If the argument is true, it should call logMessage;
// if the argument is false, it should call raiseError.
