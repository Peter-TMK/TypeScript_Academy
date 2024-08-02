// Exercise 1: Temperature Check:
// Write a function named checkTemperature that takes a temperature in Celsius as a parameter.
// If the temperature is above 30, return "It's hot".
// If the temperature is between 15 and 30 inclusive, return "It's warm".
// If the temperature is below 15, return "It's cold".
// Test the function with different temperature values.
function checkTemperature(celcius) {
    if (celcius > 30) {
        return "It's hot";
    }
    else if (celcius > 15 && celcius < 31) {
        return "It's warm";
    }
    else {
        return "It's cold";
    }
}
console.log(checkTemperature(35));
console.log(checkTemperature(16));
console.log(checkTemperature(12));
// Exercise 2: Number Classification:
// Write a function named classifyNumber that takes a number as a parameter.
// If the number is positive, return "Positive number".
// If the number is negative, return "Negative number".
// If the number is zero, return "Zero".
// Test the function with positive, negative, and zero values.
function classifyNumber(num) {
    if (num > 0) {
        return "Positive number";
    }
    else if (num < 0) {
        return "Negative number";
    }
    else if (num === 0) {
        return "Zero";
    }
}
console.log(classifyNumber(0));
console.log(classifyNumber(10));
console.log(classifyNumber(-1));
// Exercise 3: Age Group Determination:
// Write a function named determineAgeGroup that takes an age as a parameter.
// If the age is 0 to 12 inclusive, return "Child".
// If the age is 13 to 19 inclusive, return "Teenager".
// If the age is 20 to 64 inclusive, return "Adult".
// If the age is 65 or above, return "Senior".
// Test the function with different age values.
function determineAgeGroup(age) {
    if (age >= 0 && age <= 12) {
        return "Child";
    }
    else if (age >= 13 && age <= 19) {
        return "Teenager";
    }
    else if (age >= 20 && age <= 64) {
        return "Adult";
    }
}
console.log(determineAgeGroup(5));
console.log(determineAgeGroup(14));
console.log(determineAgeGroup(27));
console.log(determineAgeGroup(0));
// Exercise 4: Grade Evaluation:
// Write a function named evaluateGrade that takes a score (0-100) as a parameter.
// If the score is 90 or above, return "A".
// If the score is 80 to 89 inclusive, return "B".
// If the score is 70 to 79 inclusive, return "C".
// If the score is 60 to 69 inclusive, return "D".
// If the score is below 60, return "F".
// Test the function with different score values.
var evaluateGrade = function (score) {
    if (score >= 90 && score <= 100) {
        return "A";
    }
    else if (score >= 80 && score <= 89) {
        return "B";
    }
    else if (score >= 70 && score <= 79) {
        return "C";
    }
    else if (score >= 60 && score <= 69) {
        return "D";
    }
    else if (score < 60 && score >= 0) {
        return "F";
    }
    else {
        return "Insert a valid score";
    }
};
console.log(evaluateGrade(59));
console.log(evaluateGrade(62));
console.log(evaluateGrade(75));
console.log(evaluateGrade(87));
console.log(evaluateGrade(90));
console.log(evaluateGrade(99));
console.log(evaluateGrade(101));
// console.log(evaluateGrade("b"));
console.log(evaluateGrade(-2));
// Exercise 5: Time of Day Greeting:
// Write a function named greetBasedOnTime that takes an hour (0-23) as a parameter.
// If the hour is between 6 and 11 inclusive, return "Good morning".
// If the hour is between 12 and 17 inclusive, return "Good afternoon".
// If the hour is between 18 and 21 inclusive, return "Good evening".
// If the hour is between 22 and 5 inclusive, return "Good night".
// Test the function with different hour values.
var greetBasedOnTime = function (hour) {
    if (hour >= 6 && hour <= 11) {
        return "Good morning";
    }
    else if (hour >= 12 && hour <= 17) {
        return "Good afternoon";
    }
    else if (hour >= 18 && hour <= 21) {
        return "Good evening";
    }
    else if ((hour >= 0 && hour <= 5) || (hour >= 22 && hour <= 23)) {
        return "Good night";
    }
};
console.log(greetBasedOnTime(4));
console.log(greetBasedOnTime(23));
