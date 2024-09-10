let price: string = "100";

// Type assertion with `unknown`
let priceAsNumber: number = price as unknown as number; // This won't work directly

// Correct approach
let validPrice: number = Number(price); // Converts string to number
console.log(validPrice); // Output: 100
