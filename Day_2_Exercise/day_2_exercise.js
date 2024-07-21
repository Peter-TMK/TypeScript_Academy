// Exercise 1: Primitive Types
// Create variables of each primitive type in TypeScript and log them to the console.
// Ensure that TypeScript correctly identifies each type.
// Solution 1: Primitive Types
var aName = "Paul";
var isOpen = true;
var age = 18;
console.log(aName);
console.log(isOpen);
console.log(age);
////////////////////////////////////////////////////////////
// Exercise 2: Type Inference
// TypeScript can infer types even if you don't explicitly specify them.
// Create variables and let TypeScript infer their types, then log their types to the console.
// Solution 2: Type Inference
// Using variables declared from solution 1
console.log(typeof aName);
console.log(typeof isOpen);
console.log(typeof age);
var person = {
    name: "Paul",
    age: 18,
    email: "paul@me.co"
};
console.log(person);
console.log(typeof person);
////////////////////////////////////////////////////////////////////
// Exercise 4: Function Types
// Write a function that takes two numbers and returns their sum.
// Specify the types of the parameters and the return type.
// Solution 4: Function Types
function numSum(score1, score2) {
    console.log(score1 + score2);
    return score1 + score2;
}
numSum(6, 5);
////////////////////////////////////////////////////////////////////
// Exercise 5: Type Errors
// Create a variable with a specific type and then try to assign a value of a different type to it.
// Observe the error that TypeScript provides.
// Solution 5: Type Errors
var model;
model = "Lenovo";
console.log(model);
model = true;
console.log(model);
////////////////////////////////////////////////////////////////////
