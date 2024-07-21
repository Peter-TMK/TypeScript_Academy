// Exercise 1: Basic Type Inference
// Declare a variable and initialize it with a string value. Observe the inferred type by TypeScript.
// Then, try assigning a number to this variable and see the TypeScript error.

let aString = "hello";
aString = 55;

// Exercise 2: Function Parameter Type Inference
// Write a function that takes a parameter with a default value. Observe the inferred type of the parameter by TypeScript.
// Then, try assigning a value of a different type to this parameter and see the TypeScript error.

function namer(weight = 23) {
  return weight;
}
namer("typescript");

// Exercise 3: Return Type Inference
// Create a function that takes a number as an argument and returns the square of the number.
// Observe the inferred return type by TypeScript.
// Then, explicitly annotate the return type and see if it matches the inferred type.

function productNum(num): number {
  return num ** 2;
}

// Exercise 4: Best Common Type Algorithm
// Declare an array with elements of different types and observe the inferred type by TypeScript.
// Add elements of different types to the array and see how TypeScript updates the inferred type.

const myArray = [3, "boy", true];
myArray;

// Exercise 5: Contextual Typing
// Add an event listener for the 'click' event on a document and log the event parameter.
// Observe the inferred type by TypeScript.
// Then, change the event to 'scroll' and try to access a property that is not available on the UIEvent type to see the TypeScript error.

document.addEventListener("click", function (event) {
  console.log(event);
  console.log(event.button); // This should work as 'button' is a property of MouseEvent
});

document.addEventListener("scroll", function (event) {
  console.log(event);
  console.log(event.button); // This should cause a TypeScript error as 'button' is not a property of UIEvent
});

// These exercises will help reinforce your understanding of type inference,
// function parameter inference, return type inference, the best common type algorithm,
// and contextual typing in TypeScript.

// tsc day_4_type_inference_exercise.ts
// ts-node day_4_type_inference_exercise.ts
