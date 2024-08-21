// 1. Generic Function with Object Constraint
// Create a generic function combineObjects<U extends object, V extends object> that merges two objects.
// The function should only accept arguments that are objects. Ensure that non-object types are not allowed.
// Test the function with different object types and verify that it correctly merges their properties while maintaining type safety.

// 2. Constrained Property Accessor
// Implement a generic function getProperty<T, K extends keyof T>(obj: T, key: K) that takes an object obj and a key key, and returns the value corresponding to the key. The key should be constrained to only those properties that exist in the object.
// Try accessing both existing and non-existing properties to see how TypeScript enforces the constraints.

// 3. Generic Function with Array Constraint
// Develop a generic function getFirstElement<T extends Array<any>>(arr: T) that returns the first element of an array. Ensure that the function only accepts arrays and not other data types.
// Test the function with arrays of different types (e.g., number[], string[], etc.) to ensure it works correctly with all array types.

// 4. Object Type Checker
// Write a generic function isObjectType<T>(item: T): boolean that returns true if the item is of type object and false otherwise. The function should work only with objects or arrays and should reject any primitive types.
// Use the function to check various types (e.g., number, string, array, object) and observe how TypeScript handles type checking.

// 5. Extend with Interface Constraint
// Define an interface Nameable with a name property of type string. Then, create a generic function getName<T extends Nameable>(item: T): string that returns the name of the item. Ensure that only objects implementing the Nameable interface are allowed.
// Test the function with different objects to ensure that only those with a name property can be passed in, and others result in a compile-time error.
