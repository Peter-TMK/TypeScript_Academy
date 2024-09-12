// 1. Create a Generic Interface for Key-Value Pairs
// Define a generic interface KeyValuePair<K, V> that can hold a key of type K and a value of type V.
// Create a function that accepts an array of KeyValuePair objects and returns
// a new object with keys and values populated from the array.
// Test the function with different types of keys and values, such as
// string keys and number values, or number keys and boolean values.

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

function createObjectFromPairs<K, V>(
  pairs: KeyValuePair<K, V>[]
): Record<K, V> {
  const result: Record<K, V> = {} as Record<K, V>;
  pairs.forEach((pair) => {
    result[pair.key] = pair.value;
  });
  return result;
}

// Test with string keys and number values
const stringNumberPairs: KeyValuePair<string, number>[] = [
  { key: "age", value: 25 },
  { key: "height", value: 175 },
];
console.log(createObjectFromPairs(stringNumberPairs)); // { age: 25, height: 175 }

// Test with number keys and boolean values
const numberBooleanPairs: KeyValuePair<number, boolean>[] = [
  { key: 1, value: true },
  { key: 2, value: false },
];
console.log(createObjectFromPairs(numberBooleanPairs)); // { '1': true, '2': false }

// 2. Implement a Generic Collection Interface
// Create a generic interface Collection<T> that has methods for adding, removing, and retrieving items.
// Implement this interface in a class CustomCollection<T>. Ensure that the class maintains an
// internal list of items and provides the methods to manipulate the list.
// Test the class with different types of items, such as strings, numbers, or custom objects.

interface Collection<T> {
  add(item: T): void;
  remove(item: T): void;
  getAll(): T[];
}

class CustomCollection<T> implements Collection<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    this.items = this.items.filter((i) => i !== item);
  }

  getAll(): T[] {
    return this.items;
  }
}

// Test with strings
const stringCollection = new CustomCollection<string>();
stringCollection.add("apple");
stringCollection.add("banana");
stringCollection.remove("apple");
console.log(stringCollection.getAll()); // ["banana"]

// Test with numbers
const numberCollection = new CustomCollection<number>();
numberCollection.add(10);
numberCollection.add(20);
numberCollection.remove(10);
console.log(numberCollection.getAll()); // [20]

// 3. Design a Generic Interface for Searchable Objects
// Define a generic interface Searchable<T> with a method findItem(predicate: (item: T) => boolean): T | undefined.
// Implement this interface in a class SearchList<T> that allows searching through an array of items based on a predicate function.
// Test the SearchList class with different types, such as searching through an array of strings for a
// specific substring or through an array of numbers for a specific range.

interface Searchable<T> {
  findItem(predicate: (item: T) => boolean): T | undefined;
}

class SearchList<T> implements Searchable<T> {
  private items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  findItem(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }
}

// Test with strings
const stringSearchList = new SearchList<string>(["apple", "banana", "cherry"]);
const foundString = stringSearchList.findItem((item) => item.includes("ban"));
console.log(foundString); // "banana"

// Test with numbers
const numberSearchList = new SearchList<number>([10, 20, 30]);
const foundNumber = numberSearchList.findItem((item) => item > 15);
console.log(foundNumber); // 20

// 4. Build a Generic Interface for Configurable Options
// Create a generic interface ConfigOptions<T> that uses index signatures to store configuration options as
// key-value pairs, where keys are strings and values are of type T.
// Write a function that accepts a ConfigOptions object and prints out each key and its corresponding value.
// Test this function with different configurations, such as boolean values or string values for the options.

interface ConfigOptions<T> {
  [key: string]: T;
}

function printConfig<T>(config: ConfigOptions<T>): void {
  for (const key in config) {
    console.log(`${key}: ${config[key]}`);
  }
}

// Test with boolean values
const booleanConfig: ConfigOptions<boolean> = {
  darkMode: true,
  notifications: false,
};
printConfig(booleanConfig);

// Test with string values
const stringConfig: ConfigOptions<string> = {
  theme: "light",
  language: "en",
};
printConfig(stringConfig);

// 5. Develop a Generic Interface for API Responses
// Define a generic interface ApiResponse<T> that represents the structure of an API response, including fields like
// data (of type T), status (string), and error (optional string).
// Create a function that simulates making an API call and returns a promise resolving to an ApiResponse<T>.
// Test this function with different types of data, such as an array of objects or a single object,
// ensuring that the correct type is used in the response.

interface ApiResponse<T> {
  data: T;
  status: string;
  error?: string;
}

function fetchData<T>(data: T): Promise<ApiResponse<T>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        status: "success",
        error: undefined,
      });
    }, 1000);
  });
}

// Test with an array of objects
fetchData([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
]).then((response) => {
  console.log(response);
  // { data: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], status: 'success', error: undefined }
});

// Test with a single object
fetchData({ id: 3, name: "Charlie" }).then((response) => {
  console.log(response);
  // { data: { id: 3, name: 'Charlie' }, status: 'success', error: undefined }
});
