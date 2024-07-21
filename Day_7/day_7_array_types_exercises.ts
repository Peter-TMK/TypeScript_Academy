// Exercise 1: Declare and Initialize an Array
// Declare an array named hobbies that holds string values and initialize it with at least three hobbies.
// Log the hobbies array to the console.

const hobbies: string[] = ["swimming", "reading", "singing"];
console.log(hobbies);

// Exercise 2: Add Elements to an Array
// Using the hobbies array from Exercise 1, add two more hobbies
// using both index notation and the push() method. Log the updated hobbies array to the console.

hobbies[3] = "playing";
console.log(hobbies);

hobbies.push("coding");
console.log(hobbies);

// Exercise 3: Type Inference and Type Checking
// Declare an array named languages and initialize it with
// string values representing programming languages.
// Try to add a number to the languages array and observe the TypeScript error.
// Then, extract the first element from the languages array and log its type using typeof.

const languages: string[] = ["Python", "Java", "JavaScript"];
console.log(languages);

// languages.push(2);
console.log(languages);

console.log(typeof languages[0]);

// Exercise 4: Array Methods
// Using the languages array from Exercise 3, perform the following operations:

// Use the forEach() method to log each language to the console.
languages.forEach((language) => console.log(language));

// Use the map() method to create a new array with all languages in uppercase
// and log the new array to the console.
languages.map((language) => console.log(language.toUpperCase()));

// Use the filter() method to create a new array with languages that contain
// the letter 'a' and log the new array to the console.

const newLanguagesArray = languages.filter((language) =>
  language.includes("a")
);

console.log(newLanguagesArray);

// Exercise 5: Mixed Type Array
// Declare an array named mixedValues that holds both string and number values.
// Initialize it with at least two strings and two numbers.
// Log the mixedValues array to the console.
// Then, use the reduce() method to concatenate all string values and log the result to the console.

const mixedValues: (string | number)[] = [
  "Python",
  9,
  "Java",
  "JavaScript",
  12,
];

const mixedValuesConcatenateString = mixedValues.reduce((acc, val) => {
  if (typeof val === "string") {
    return acc + val;
  }
  return acc;
}, "");

console.log(mixedValuesConcatenateString);

// These exercises will help you practice declaring and initializing arrays,
// adding elements, type inference, and using various array methods in TypeScript.
