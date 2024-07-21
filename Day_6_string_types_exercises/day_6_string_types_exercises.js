var printMe = console.log;
// Exercise 1: String Declarations
// Declare variables to hold different strings using both single quotes and double quotes.
// Assign values to them and log the results to the console.
var firstName = "Excel";
var lastName = "Peter";
printMe(firstName, lastName);
// Exercise 2: Template Strings
// Create a multi-line string using template strings (backticks).
// Log the result to the console to observe the correct formatting.
var multiLine = "\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum\n";
printMe(multiLine);
// Exercise 3: String Interpolation
// Declare variables for first name and job title.
// Use template strings to create a profile description that includes these variables.
// Log the result to the console.
var first_name = "Excel";
var job_title = "software developer";
printMe("".concat(firstName, " is a ").concat(job_title));
// Exercise 4: Combining Strings
// Declare variables to hold first name and last name.
// Combine them into a full name using both concatenation (with +) and template strings.
// Log both results to the console.
var firstname = "Excel";
var lastname = "Peter";
var fullName = firstname + " " + lastname;
var fullName2 = "".concat(firstname, " ").concat(lastname);
printMe(fullName);
printMe(fullName2);
// Exercise 5: String Methods
// Declare a string variable and use various string methods such as length,
// toUpperCase(), toLowerCase(), indexOf(), and substring(). Log the results to the console.
var loremIpsum = "Lorem, ipsum dolor sit amet consectetur adipisicing elit\nNesciunt nulla, sapiente distinctio dolores dicta cum eaque voluptatum accusamus\nillo dolor unde modi eos dignissimos qui, corrupti deserunt quos libero error.\n";
printMe(loremIpsum.length);
printMe(loremIpsum.toUpperCase());
printMe(loremIpsum.toLowerCase());
printMe("Index of: ", loremIpsum.indexOf("dolor"));
printMe(loremIpsum.substring(2));
