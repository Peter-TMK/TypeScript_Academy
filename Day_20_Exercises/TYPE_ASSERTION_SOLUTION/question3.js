var price = "100";
// Type assertion with `unknown`
var priceAsNumber = price; // This won't work directly
// Correct approach
var validPrice = Number(price); // Converts string to number
console.log(validPrice); // Output: 100
