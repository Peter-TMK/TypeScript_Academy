// 1. Generic Function with Object Constraint
// Create a generic function combineObjects<U extends object, V extends object> that merges two objects.
// The function should only accept arguments that are objects. Ensure that non-object types are not allowed.
// Test the function with different object types and verify that it correctly merges their properties while maintaining type safety.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function combineObjects(obj, obj2) {
    return __assign(__assign({}, obj), obj2);
}
console.log(combineObjects({ name: "Hello" }, { age: 18 }));
// 2. Constrained Property Accessor
// Implement a generic function getProperty<T, K extends keyof T>(obj: T, key: K) that takes an object obj and a key key,
// and returns the value corresponding to the key. The key should be constrained to only those properties that exist in the object.
// Try accessing both existing and non-existing properties to see how TypeScript enforces the constraints.
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty({ fruit: "Orange" }, "fruit"));
// 3. Generic Function with Array Constraint
// Develop a generic function getFirstElement<T extends Array<any>>(arr: T) that returns the first element of an array.
// Ensure that the function only accepts arrays and not other data types.
// Test the function with arrays of different types (e.g., number[], string[], etc.) to ensure it works correctly with all array types.
// function getFirstElement<T extends Array<any>>(arr: T) {
function getFirstElement(arr) {
    return arr[0];
}
console.log("First Element: ", getFirstElement([1, 2, 3, 4, 5, 6]));
console.log("First Number: ", getFirstElement(["a", "b", "c", "d", "e"]));
// console.log("First Number: ", getFirstElement("a"));
// 4. Object Type Checker
// Write a generic function isObjectType<T>(item: T): boolean that returns true if the item is of type object and false otherwise.
// The function should work only with objects or arrays and should reject any primitive types.
// Use the function to check various types (e.g., number, string, array, object) and observe how TypeScript handles type checking.
function isObjectType(item) {
    return typeof item === "object" && item !== null && !Array.isArray(item);
}
// Test cases
console.log(isObjectType({ key: "value" })); // true (object)
console.log(isObjectType([1, 2, 3])); // false (array)
console.log(isObjectType(42)); // false (number)
console.log(isObjectType("hello")); // false (string)
console.log(isObjectType(null)); // false (null)
console.log(isObjectType(new Date())); // true (object)
function getName(item) {
    return item.name;
}
// Test cases
var person = { name: "John", age: 30 };
var animal = { name: "Max", type: "Dog" };
console.log(getName(person)); // "John"
console.log(getName(animal)); // "Max"
// Compile-time error examples (uncommenting below will show errors)
// const errorTest = { type: "Unknown" }; // No name property
// console.log(getName(errorTest)); // Error: Argument does not satisfy the constraint
// const num = 123; // Primitive type
// console.log(getName(num)); // Error: Argument does not satisfy the constraint
