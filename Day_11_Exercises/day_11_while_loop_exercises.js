// Exercise 1: Print Numbers from 1 to n:
// Write a function named printNumbers that takes a number n as a parameter.
// Use a while loop to print all numbers from 1 to n.
// Test the function with different values of n.
function printNumbers(n) {
    var i = 1;
    while (i <= n) {
        console.log(i);
        i++;
    }
    return 0;
}
printNumbers(9);
// Exercise 2: Sum of Digits:
// Write a function named sumOfDigits that takes a number num as a parameter.
// Use a while loop to calculate the sum of its digits.
// Return the sum.
// Test the function with different values of num.
// console.log(Math.floor(298 / 100));
// console.log(298 % 100);
// function sumOfDigits(num: number) {
//   for (let i = 0; i <= num; i++) {
//   }
// }
// Exercise 3: Count Down:
// Write a function named countDown that takes a number n as a parameter.
// Use a while loop to print a countdown from n to 1.
// Print "Blastoff!" after the loop completes.
// Test the function with different values of n.
function countDown(n) {
    var i = n;
    while (i >= 1) {
        console.log(i);
        i--;
    }
    console.log("Blastoff!");
}
countDown(9);
// Exercise 4: Find the Factorial Using while:
// Write a function named factorialWhile that takes a number n as a parameter.
// Use a while loop to calculate the factorial of n.
// Return the factorial.
// Test the function with different values of n.
// Exercise 5: Repeat String:
// Write a function named repeatString that takes a string str and a number times as parameters.
// Use a while loop to concatenate the string str for times times.
// Return the concatenated string.
// Test the function with different values of str and times.
function repeatString(str, times) {
    var newStr = "";
    for (var i = 1; i <= times; i++) {
        // console.log(str + times);
        newStr += times;
    }
    return newStr;
}
repeatString("hello", 3);
console.log(48.7 / 67);
