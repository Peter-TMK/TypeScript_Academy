// 1. Using setTimeout
// Create a function delayedGreeting() that logs "Hello, world!" to the console after a 2-second delay using setTimeout.
// Modify the function to accept a delay parameter, allowing the delay duration to be specified when calling the function.

// 2. Working with Promises
// Write a function fetchUserData(userId) that returns a promise.
// The promise should resolve with the message "User data for [userId] fetched" after a 1-second delay.
// If the userId is not provided, the promise should reject with the message "Invalid userId".
// Use the .then() and .catch() methods to handle the resolved and rejected states of the promise.

// 3. Async/Await
// Create an async function getWeather(city) that simulates fetching weather data.
// Inside the function, create a promise that resolves with the message "Weather data for [city]" after a 1.5-second delay.
// Use await to wait for the promise to resolve, then log the result to the console.
// Handle errors using try...catch inside the async function.

// 4. Chaining Promises
// Write three functions: stepOne(), stepTwo(), and stepThree().
// Each function returns a promise that resolves with a message after a delay (e.g., "Step one complete" after 1 second, "Step two complete" after 1.5 seconds, etc.).
// Chain these promises together so that stepOne() starts first, followed by stepTwo(), and then stepThree().
// Log a final message to the console when all steps are complete.

// 5. Parallel Execution with Promise.all
// Create three functions: fetchUser(), fetchPosts(), and fetchComments().
// Each function returns a promise that resolves with a simulated message after different delays (e.g., "User fetched", "Posts fetched", and "Comments fetched").
// Use Promise.all to run these functions in parallel.
// Log the results to the console once all promises are resolved. Handle any potential errors with .catch().
