// 1. Generic Function for Array Filtering
// Create a generic function filterArray<T> that takes an array of any type T and a callback function as arguments.
// The callback function should return a boolean value.
// The filterArray function should return a new array containing only the elements that pass the callback function’s test.

function filterArray<T>(arr: T[], cb: (arg: T) => boolean): T[] {
  return arr.filter(cb);
}

const num = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNum = filterArray(num, (num) => num % 2 === 0);
let oddNum = filterArray(num, (num) => num % 2 !== 0);
console.log("EvenNum: ", evenNum);
console.log("OddNum: ", oddNum);

const fruits = ["apple", "kiwi", "guava", "pineapple"];
let longFruits = filterArray(fruits, (fruit) => fruit.length > 4);
let shortFruits = filterArray(fruits, (fruit) => fruit.length <= 4);
console.log("LongFruits: ", longFruits);
console.log("ShortFruits: ", shortFruits);

// 2. Generic Function for Merging Objects
// Develop a generic function combineObjects<U, V> that accepts two objects of different types U and V as arguments
// and returns a new object that merges the properties of both.
// Ensure that the returned object has the correct type that includes all properties from both objects.

function combineObjects<U, V>(object1: U, object2: V): U & V {
  return {
    ...object1,
    ...object2,
  };
}
let combinedResult = combineObjects({ car: "Toyota" }, { model: "SUV" });
console.log(combinedResult);

// 3. Generic Stack Class
// Implement a generic Stack<T> class that allows you to push and pop elements of any type T.
// The push method should add an element to the stack.
// The pop method should remove and return the top element from the stack.
// The peek method should return the top element without removing it.
// Ensure that the stack maintains type safety.

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

// Example usage:
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.peek()); // Output: 2
console.log(numberStack.pop()); // Output: 2
console.log(numberStack.peek()); // Output: 1

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.peek()); // Output: "world"
console.log(stringStack.pop()); // Output: "world"
console.log(stringStack.peek()); // Output: "hello"

// 4. Generic Function for Array Reversal
// Write a generic function reverseArray<T> that accepts an array of any type T and returns a new array with the elements in reverse order.
// Ensure that the function is type-safe and maintains the original type of the array elements.

function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

const names = ["Alice", "Bob", "Charlie"];
const reversedNames = reverseArray(names);
console.log(reversedNames); // Output: ["Charlie", "Bob", "Alice"]

// 5. Generic Function for Key-Value Pair
// Create a generic function createKeyValuePair<K, V> that accepts a key of type K and a value of type V,
// and returns an object with a single key-value pair.
// The returned object should have the key as K and the value as V, ensuring type safety.

function createKeyValuePair<K, V>(key: K, val: V): { key: K; val: V } {
  return { key, val };
}

// Example usage:
const keyValuePair = createKeyValuePair("name", "Alice");
console.log(keyValuePair); // Output: { key: "name", value: "Alice" }

const numericPair = createKeyValuePair(1, 100);
console.log(numericPair); // Output: { key: 1, value: 100 }
