// 1. Create a Generic Interface for Key-Value Pairs
// Define a generic interface KeyValuePair<K, V> that can hold a key of type K and a value of type V.
// Create a function that accepts an array of KeyValuePair objects and returns
// a new object with keys and values populated from the array.
// Test the function with different types of keys and values, such as
// string keys and number values, or number keys and boolean values.

// 2. Implement a Generic Collection Interface
// Create a generic interface Collection<T> that has methods for adding, removing, and retrieving items.
// Implement this interface in a class CustomCollection<T>. Ensure that the class maintains an
// internal list of items and provides the methods to manipulate the list.
// Test the class with different types of items, such as strings, numbers, or custom objects.

// 3. Design a Generic Interface for Searchable Objects
// Define a generic interface Searchable<T> with a method findItem(predicate: (item: T) => boolean): T | undefined.
// Implement this interface in a class SearchList<T> that allows searching through an array of items based on a predicate function.
// Test the SearchList class with different types, such as searching through an array of strings for a
// specific substring or through an array of numbers for a specific range.

// 4. Build a Generic Interface for Configurable Options
// Create a generic interface ConfigOptions<T> that uses index signatures to store configuration options as
// key-value pairs, where keys are strings and values are of type T.
// Write a function that accepts a ConfigOptions object and prints out each key and its corresponding value.
// Test this function with different configurations, such as boolean values or string values for the options.

// 5. Develop a Generic Interface for API Responses
// Define a generic interface ApiResponse<T> that represents the structure of an API response, including fields like
// data (of type T), status (string), and error (optional string).
// Create a function that simulates making an API call and returns a promise resolving to an ApiResponse<T>.
// Test this function with different types of data, such as an array of objects or a single object,
// ensuring that the correct type is used in the response.
