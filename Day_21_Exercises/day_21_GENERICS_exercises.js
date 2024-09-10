// 1. Generic Function for Array Filtering
// Create a generic function filterArray<T> that takes an array of any type T and a callback function as arguments.
// The callback function should return a boolean value.
// The filterArray function should return a new array containing only the elements that pass the callback function’s test.
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
function filterArray(arr, cb) {
    return arr.filter(cb);
}
var num = [1, 2, 3, 4, 5, 6, 7, 8];
var evenNum = filterArray(num, function (num) { return num % 2 === 0; });
var oddNum = filterArray(num, function (num) { return num % 2 !== 0; });
console.log("EvenNum: ", evenNum);
console.log("OddNum: ", oddNum);
var fruits = ["apple", "kiwi", "guava", "pineapple"];
var longFruits = filterArray(fruits, function (fruit) { return fruit.length > 4; });
var shortFruits = filterArray(fruits, function (fruit) { return fruit.length <= 4; });
console.log("LongFruits: ", longFruits);
console.log("ShortFruits: ", shortFruits);
// 2. Generic Function for Merging Objects
// Develop a generic function combineObjects<U, V> that accepts two objects of different types U and V as arguments
// and returns a new object that merges the properties of both.
// Ensure that the returned object has the correct type that includes all properties from both objects.
function combineObjects(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
var combinedResult = combineObjects({ car: "Toyota" }, { model: "SUV" });
console.log(combinedResult);
// 3. Generic Stack Class
// Implement a generic Stack<T> class that allows you to push and pop elements of any type T.
// The push method should add an element to the stack.
// The pop method should remove and return the top element from the stack.
// The peek method should return the top element without removing it.
// Ensure that the stack maintains type safety.
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    return Stack;
}());
// Example usage:
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.peek()); // Output: 2
console.log(numberStack.pop()); // Output: 2
console.log(numberStack.peek()); // Output: 1
var stringStack = new Stack();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.peek()); // Output: "world"
console.log(stringStack.pop()); // Output: "world"
console.log(stringStack.peek()); // Output: "hello"
// 4. Generic Function for Array Reversal
// Write a generic function reverseArray<T> that accepts an array of any type T and returns a new array with the elements in reverse order.
// Ensure that the function is type-safe and maintains the original type of the array elements.
function reverseArray(arr) {
    return arr.reverse();
}
// Example usage:
var numbers = [1, 2, 3, 4, 5];
var reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
var names = ["Alice", "Bob", "Charlie"];
var reversedNames = reverseArray(names);
console.log(reversedNames); // Output: ["Charlie", "Bob", "Alice"]
// 5. Generic Function for Key-Value Pair
// Create a generic function createKeyValuePair<K, V> that accepts a key of type K and a value of type V,
// and returns an object with a single key-value pair.
// The returned object should have the key as K and the value as V, ensuring type safety.
function createKeyValuePair(key, val) {
    return { key: key, val: val };
}
// Example usage:
var keyValuePair = createKeyValuePair("name", "Alice");
console.log(keyValuePair); // Output: { key: "name", value: "Alice" }
var numericPair = createKeyValuePair(1, 100);
console.log(numericPair); // Output: { key: 1, value: 100 }
