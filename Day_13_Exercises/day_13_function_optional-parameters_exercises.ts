// Exercise 1: Greeting Function
// Write a function named greet that takes two parameters: name (string) and greeting (optional string).
// If the greeting is provided, the function should return a string in the format "greeting, name!".
// If the greeting is not provided, the function should return "Hello, name!".

function greet(name: string, greeting?: string): string {
  if (typeof greeting !== "undefined") {
    return `${greeting} ${name}!`;
  }
  return `${name}!`;
}
console.log(greet("Dev", "Hello"));
console.log(greet("Dev"));

// Exercise 2: Calculate Area
// Write a function named calculateArea that takes two parameters: length (number) and width (optional number).
// If the width is provided, the function should return the area of the rectangle.
// If the width is not provided, the function should return the area of a square (length * length).

function calculateArea(length: number, width?: number): number {
  if (typeof width !== "undefined") {
    return length * width;
  }
  return length * length;
  //   return typeof `${length} `;
}

console.log(calculateArea(5, 6));
console.log(calculateArea(5));

// Exercise 3: Display User Info
// Write a function named displayUserInfo that takes three parameters:
// username (string), email (string), and age (optional number).
// The function should return a string that displays the user's information.
// If the age is provided, include it in the string; otherwise, exclude it.

function displayUserInfo(
  username: string,
  email: string,
  age?: number
): string {
  if (typeof age !== "undefined") {
    return `Username: ${username}\nEmail: ${email}\nAge: ${age}`;
  }
  return `Username: ${username}\nEmail: ${email}`;
}

console.log(displayUserInfo("Dev", "dev@g.co", 11));
console.log(displayUserInfo("Dev", "dev@g.co"));

// Exercise 4: Concatenate Strings
// Write a function named concatenate that takes three parameters:
// str1 (string), str2 (string), and separator (optional string).
// If the separator is provided, the function should return the concatenation of str1, separator, and str2.
// If the separator is not provided, the function should return the concatenation of str1 and str2 with a space in between.

function concatenate(str1: string, str2: string, seperator?: string): string {
  if (typeof seperator !== "undefined") {
    return `${str1}${seperator}${str2} `;
  }

  return `${str1} ${str2} `;
}

console.log(concatenate("hello", "TS", "-"));
console.log(concatenate("hello", "TS"));

// Exercise 5: Calculate Discount
// Write a function named calculateDiscount that takes two parameters:
// price (number) and discount (optional number).
// The function should return the price after applying the discount.
// If the discount is provided, subtract it from the price.
// If the discount is not provided, assume a default discount of 10%.

function calculateDiscount(price: number, discount?: number): number {
  if (typeof discount !== "undefined") {
    const discountPrice = price * discount;
    return price - discountPrice;
  }
  const discountPrice = price * 0.1;
  return price - discountPrice;
}

console.log(calculateDiscount(800, 0.2));
console.log(calculateDiscount(800));

// Instructions:
// Define each function with appropriate type annotations for parameters and return types.
// Implement the logic as described in each exercise.
// Test each function with different inputs to ensure they work as expected.
// Ensure that optional parameters are correctly handled and that the function behavior changes appropriately based on whether the optional parameter is provided or not.
