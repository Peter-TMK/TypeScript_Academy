// Exercise 1: Day of the Week:
// Write a function named getDayOfWeek that takes a number (0-6) representing the day of the week.
// Use a switch...case statement to return the corresponding
// day name ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday").
// Test the function with different day numbers.
function getDayOfWeek(day) {
    switch (day) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Entry!");
            break;
    }
    return "";
}
console.log(getDayOfWeek(4));
// Exercise 2: Fruit Color:
// Write a function named getFruitColor that takes a string representing a fruit name.
// Use a switch...case statement to return the color of the fruit
// ("Apple" -> "Red", "Banana" -> "Yellow", "Grapes" -> "Purple", "Orange" -> "Orange").
// Include a default case to return "Unknown" for any fruit not listed.
// Test the function with different fruit names.
var getFruitColor = function (fruitName) {
    switch (fruitName) {
        case "Apple":
            console.log("Red");
            break;
        case "Banana":
            console.log("Yellow");
            break;
        case "Grapes":
            console.log("Purple");
            break;
        case "Orange":
            console.log("Orange");
            break;
        default:
            console.log("Unknown");
            break;
    }
    return "";
};
console.log(getFruitColor("Apple"));
// Exercise 3: Grade Evaluation:
// Write a function named evaluateGrade that takes a letter grade ('A', 'B', 'C', 'D', 'F').
// Use a switch...case statement to return a corresponding message
// ("A" -> "Excellent", "B" -> "Good", "C" -> "Average", "D" -> "Below Average", "F" -> "Fail").
// Test the function with different grade letters.
function evaluateGrade(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Average");
            break;
        case "D":
            console.log("Below Average");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid Grade");
            break;
    }
    return "";
}
console.log(evaluateGrade("A"));
// Exercise 4: Simple Calculator:
// Write a function named simpleCalculator that takes three parameters:
// num1 (number), num2 (number), and operation (string representing '+', '-', '*', '/').
// Use a switch...case statement to perform the corresponding arithmetic operation and return the result.
// Include a default case to return "Invalid operation" for any operation not listed.
// Test the function with different numbers and operations.
function simpleCalculator(num1, num2, op) {
    switch (op) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            if (num1 !== 0 && num2 !== 0) {
                return num1 / num2;
            }
            else {
                return "Cannot divide by zero";
            }
            //   console.log('zero not allowed!')
            break;
        default:
            console.log("Invalid Operation");
            break;
    }
}
console.log(simpleCalculator(10, 5, "+")); // 15
console.log(simpleCalculator(10, 5, "-")); // 5
console.log(simpleCalculator(10, 5, "*")); // 50
console.log(simpleCalculator(10, 5, "/")); // 2
console.log(simpleCalculator(10, 0, "/")); // Cannot divide by zero
console.log(simpleCalculator(10, 5, "%")); // Invalid operation
console.log(simpleCalculator(10, 5, "x")); // Invalid operation
// Exercise 5: Season Determination:
// Write a function named getSeason that takes a number (1-12) representing a month.
// Use a switch...case statement to return the corresponding season
// ("Winter", "Spring", "Summer", "Fall").
// December, January, February -> "Winter"
// March, April, May -> "Spring"
// June, July, August -> "Summer"
// September, October, November -> "Fall"
// Test the function with different month numbers.
function getSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "Winter";
            break;
        case 3:
        case 4:
        case 5:
            return "Spring";
            break;
        case 6:
        case 7:
        case 8:
            return "Summer";
            break;
        case 9:
        case 10:
        case 11:
            return "Fall";
            break;
        default:
            return "Invalid Entry";
            break;
    }
    return "";
}
console.log("Start: ", getSeason(1));
console.log(getSeason(2));
console.log(getSeason(3));
console.log(getSeason(4));
console.log(getSeason(5));
console.log(getSeason(6));
console.log(getSeason(7));
console.log(getSeason(8));
console.log(getSeason(9));
console.log(getSeason(10));
console.log(getSeason(11));
console.log(getSeason(12));
