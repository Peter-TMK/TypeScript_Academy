const printMe = console.log;
// Exercise 1: String Declarations
// Declare variables to hold different strings using both single quotes and double quotes.
// Assign values to them and log the results to the console.

const firstName: string = "Excel";
const lastName: string = "Peter";

printMe(firstName, lastName);

// Exercise 2: Template Strings
// Create a multi-line string using template strings (backticks).
// Log the result to the console to observe the correct formatting.

const multiLine: string = `
Lorem Ipsum
Lorem Ipsum
Lorem Ipsum
Lorem Ipsum
`;
printMe(multiLine);

// Exercise 3: String Interpolation
// Declare variables for first name and job title.
// Use template strings to create a profile description that includes these variables.
// Log the result to the console.

const first_name: string = "Excel";
const job_title: string = "software developer";

printMe(`${firstName} is a ${job_title}`);

// Exercise 4: Combining Strings
// Declare variables to hold first name and last name.
// Combine them into a full name using both concatenation (with +) and template strings.
// Log both results to the console.

const firstname: string = "Excel";
const lastname: string = "Peter";
const fullName: string = firstname + " " + lastname;
const fullName2: string = `${firstname} ${lastname}`;

printMe(fullName);
printMe(fullName2);

// Exercise 5: String Methods
// Declare a string variable and use various string methods such as length,
// toUpperCase(), toLowerCase(), indexOf(), and substring(). Log the results to the console.

const loremIpsum: string = `Lorem, ipsum dolor sit amet consectetur adipisicing elit
Nesciunt nulla, sapiente distinctio dolores dicta cum eaque voluptatum accusamus
illo dolor unde modi eos dignissimos qui, corrupti deserunt quos libero error.
`;
printMe(loremIpsum.length);
printMe(loremIpsum.toUpperCase());
printMe(loremIpsum.toLowerCase());
printMe("Index of: ", loremIpsum.indexOf("dolor"));
printMe(loremIpsum.substring(2));
