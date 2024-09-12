// 1. Create a Generic Interface for Key-Value Pairs
// Define a generic interface KeyValuePair<K, V> that can hold a key of type K and a value of type V.
// Create a function that accepts an array of KeyValuePair objects and returns
// a new object with keys and values populated from the array.
// Test the function with different types of keys and values, such as
// string keys and number values, or number keys and boolean values.
function fetchData(data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({
                data: data,
                status: "success",
                error: undefined
            });
        }, 1000);
    });
}
// Test with an array of objects
fetchData([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
]).then(function (response) {
    console.log(response);
    // { data: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], status: 'success', error: undefined }
});
// Test with a single object
fetchData({ id: 3, name: "Charlie" }).then(function (response) {
    console.log(response);
    // { data: { id: 3, name: 'Charlie' }, status: 'success', error: undefined }
});
