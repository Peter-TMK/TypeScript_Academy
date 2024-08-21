// 1. Basic Type Assertion with as Keyword
// Create an HTML page with an input element of type text and a button.
// Write a TypeScript function that retrieves the input element using querySelector() and uses type assertion to access the value property.
// Display the value in the console when the button is clicked.

// 2. Type Assertion Using the <> Operator
// Create a TypeScript function that selects a checkbox input element from the DOM using querySelector().
// Use the <> operator to assert the element's type to HTMLInputElement.
// Write a function that checks if the checkbox is checked or not and logs the result to the console.

// 3. Handling Incompatible Types
// Declare a variable price of type string and assign it a numeric string value.
// Use type assertion to attempt to treat this string as a number.
// Modify the assertion to use unknown first, then convert it to a number type.
// Verify that the code compiles without errors.

// 4. Avoiding Runtime Errors
// Write a TypeScript function that selects an element with a specific ID (e.g., #description) from the DOM.
// Use type assertion to treat the selected element as an HTMLTextAreaElement.
// Implement a check that ensures the element is indeed a text area before accessing its value property to prevent runtime errors.

// 5. Preventing Unexpected Behaviors
// Create a TypeScript function that retrieves an HTML element using querySelector() and uses type assertion to treat it as an HTMLImageElement.
// Attempt to change the src property of the element.
// Test the function with an element that isn’t an image (e.g., a div).
// Observe the behavior and think about how to avoid such situations in your code.
