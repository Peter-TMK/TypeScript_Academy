// Exercise 1: Basic String Literal Type
// Declare a variable direction of type 'up' | 'down' | 'left' | 'right'.
// Assign it the value 'up' and log it to the console.
// Then, try to assign it an invalid value like 'forward' and observe the compiler error.

let direction: "up" | "down" | "left" | "right";
direction = "up";
direction = "down";
console.log(direction);

// Exercise 2: String Literal Type Alias
// Create a type alias Status for the string literals 'success' | 'failure' | 'pending'.
// Declare a variable currentStatus of type Status and assign it the value 'pending'.
// Log the currentStatus to the console.

type Status = "success" | "failure" | "pending";

const currentStatus: Status = "pending";
console.log(currentStatus);

// Exercise 3: Function Parameter with String Literal Type
// Define a function handleMouseEvent that accepts a parameter event of
// type 'click' | 'dblclick' | 'mouseup' | 'mousedown'.
// Inside the function, log the event to the console.
// Test the function by calling it with different valid event types and log the results.

const handleMouseEvent = (
  param: "click" | "dblclick" | "mouseup" | "mousedown"
) => console.log(param);

handleMouseEvent("click");
handleMouseEvent("dblclick");
handleMouseEvent("mouseup");
handleMouseEvent("mousedown");

// Exercise 4: Union of String Literal Types
// Declare a variable color of type 'red' | 'green' | 'blue'.
// Assign it the value 'green' and log it to the console.
// Then, attempt to assign it an invalid value like 'yellow' and observe the compiler error.

// let color: "red" | "green" | "blue" = "blue";
let color: "red" | "green" | "blue";
color = "green";
console.log(color);

// Exercise 5: String Literal Type in an Object
// Create a type alias UserRole for the string literals 'admin' | 'editor' | 'viewer'.
// Define an object user with properties name (string) and role (UserRole).
// Initialize the user object and log it to the console.
// Then, try to assign an invalid role to the user object and observe the compiler error.

type UserRole = "admin" | "editor" | "viewer";

type User = {
  name: string;
  role: UserRole;
};

const user: User = {
  name: "user1",
  role: "admin",
};

console.log(user);
