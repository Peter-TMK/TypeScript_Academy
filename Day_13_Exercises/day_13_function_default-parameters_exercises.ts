// Exercise 1: Calculate Final Price
// Write a function named calculateFinalPrice that takes two parameters:
// price (number) and taxRate (number, default value = 0.1).
// The function should return the final price after adding the tax.
// If the taxRate is not provided, use the default value.

function calculateFinalPrice(price: number, taxRate: number = 0.1): number {
  return price + taxRate;
}
console.log(calculateFinalPrice(3, 0.09));
console.log(calculateFinalPrice(3));

// Exercise 2: Greet User
// Write a function named greetUser that takes two parameters:
// name (string) and greeting (string, default value = "Hello").
// The function should return a string in the format "greeting, name!".
// If the greeting is not provided, use the default value.

function greetUser(name: string, greeting: string = "Hello"): string {
  return greeting + " " + name;
}
console.log(greetUser("Dev", "Hi"));
console.log(greetUser("Dev"));

// Exercise 3: Generate Full Name
// Write a function named getFullName that takes three parameters:
// firstName (string), lastName (string, default value = "Doe"), and middleName (optional string).
// The function should return the full name in the format "firstName middleName lastName".
// If middleName is not provided, it should be omitted from the result.

function getFullName(
  firstName: string,
  lastName: string = "Doe",
  middleName?: string
): string {
  if (typeof middleName !== "undefined") {
    return `${firstName} ${middleName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
}

console.log(getFullName("Dev", "Jane", "Stocks"));
console.log(getFullName("Dev"));

// Exercise 4: Compute Interest
// Write a function named computeInterest that takes three parameters:
// principal (number), rate (number, default value = 0.05), and time (number, default value = 1).
// The function should return the interest computed using the formula principal * rate * time.
// If the rate or time is not provided, use the default values.

function computeInterest(
  principal: number,
  rate: number = 0.05,
  time: number = 1
): number {
  return principal * rate * time;
}
console.log(computeInterest(2, 3, 4));
console.log(computeInterest(2));

// Exercise 5: Schedule Meeting
// Write a function named scheduleMeeting that takes three parameters:
// date (string), time (string, default value = "10:00 AM"), and location (string, default value = "Office").
// The function should return a string in the format "Meeting scheduled on date at time in location.".
// If time or location is not provided, use the default values.

function scheduleMeeting(
  date: string,
  time: string = "10:00 AM",
  location: string = "Office"
): string {
  return `Meeting scheduled on ${date} at ${time} in the ${location}.`;
}

console.log(scheduleMeeting("August 3rd"));

// Instructions:
// Define each function with appropriate type annotations for parameters and return types.
// Implement the logic as described in each exercise.
// Test each function with different inputs to ensure they work as expected.
// Ensure that default parameters are correctly handled and that the function behavior changes appropriately
// based on whether the default parameter is provided or not.
