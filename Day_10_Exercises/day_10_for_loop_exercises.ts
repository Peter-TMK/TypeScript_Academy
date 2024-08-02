// Exercise 1: Sum of Numbers:
// Write a function named sumOfNumbers that takes a number n as a parameter.
// Use a for loop to calculate the sum of all numbers from 1 to n.
// Return the sum.
// Test the function with different values of n.

function sumOfNumbers(num: number) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(5));

// Exercise 2: Factorial Calculation:
// Write a function named factorial that takes a number n as a parameter.
// Use a for loop to calculate the factorial of n.
// Return the factorial.
// Test the function with different values of n.
// 0,1,1,2,3,5,...

function factorial(n: number) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(factorial(8));

// Exercise 3: Print Even Numbers:
// Write a function named printEvenNumbers that takes two numbers start and end as parameters.
// Use a for loop to print all even numbers between start and end (inclusive).
// Test the function with different ranges.

function printEvenNumbers(num1: number, num2: number): number {
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  return 0;
}
printEvenNumbers(2, 7);

// Exercise 4: Reverse a String:
// Write a function named reverseString that takes a string str as a parameter.
// Use a for loop to reverse the string.
// Return the reversed string.
// Test the function with different strings.

function reverseString(str: string): string {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseString("Hello"));

// Exercise 5: Multiplication Table:
// Write a function named multiplicationTable that takes a number n as a parameter.
// Use a for loop to print the multiplication table for the number n (from 1 to 10).
// Test the function with different values of n.

function multiplicationTable(n: number): number {
  for (let i = 1; i <= 10; i++) {
    // console.log(n, " x ", i, " = ", n * i);
    console.log(`${n} x ${i} = ${n * i}`);
  }
  return 0;
}
multiplicationTable(5);
