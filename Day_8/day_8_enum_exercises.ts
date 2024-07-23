// Exercise 1: Basic Enum Declaration and Usage
// Declare an enum named Color with the following members: Red, Green, and Blue.
// Then, create a variable named favoriteColor of type Color and assign it the value Color.Green.
// Log the favoriteColor to the console.

enum Color {
  Red,
  Green,
  Blue,
}

const favoriteColor = Color.Green;
console.log(favoriteColor);

// Exercise 2: Enum in a Function
// Declare an enum named Day with the following members:
// Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.
// Create a function named isWeekend that takes a Day enum as an argument and
// returns true if the day is either Saturday or Sunday, otherwise returns false.
// Call the function with Day.Sunday and log the result to the console.

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Day) {
  const dDay = day === Day.Sunday ? true : false;
  return dDay;
}

console.log(isWeekend(Day.Sunday));
console.log(isWeekend(Day.Friday));

// Exercise 3: Specifying Enum Members' Numbers
// Declare an enum named Priority with the following members: Low with value 1,
// Medium with value 2, and High with value 3.
// Create a variable named taskPriority of type Priority and assign it the value Priority.High.
// Log the taskPriority to the console.

enum Priority {
  Low = 1,
  Medium,
  High,
}

const taskPriority: Priority = Priority.High;
console.log(taskPriority);

// Exercise 4: Enum with a Switch Case
// Declare an enum named Season with the following members: Spring, Summer, Autumn, and Winter.
// Create a function named getSeasonActivities that takes a Season enum as an argument and
// returns a string describing an activity for each season. Use a switch case to handle each season.
// Call the function with Season.Winter and log the result to the console.

enum Season {
  Spring,
  Summer,
  Autumn,
  Winter,
}

function getSeasonActivities(season: Season) {
  let seasonDescribe;
  switch (season) {
    case Season.Spring:
      seasonDescribe = "T'is Spring";
      break;
    case Season.Summer:
      seasonDescribe = "T'is Summer";
      break;
    case Season.Autumn:
      seasonDescribe = "T'is Autumn";
      break;
    case Season.Winter:
      seasonDescribe = "T'is Winter";
      break;

    default:
      seasonDescribe = "Season of the year!";
      break;
  }
  return seasonDescribe;
}

console.log(getSeasonActivities(Season.Winter));

// Exercise 5: Enum for Approval Status
// Declare an enum named ApprovalStatus with the following members:
// Draft, Submitted, Approved, and Rejected.
// Create an object named request with the properties id (number), status (ApprovalStatus), and description (string).
// Initialize the request object with id as 1, status as ApprovalStatus.Submitted,
// and description as "Pending approval". Log the request object to the console.

enum ApprovalStatus {
  Draft,
  Submitted,
  Approved,
  Rejected,
}

const request = {
  id: 1,
  status: ApprovalStatus.Submitted,
  description: "Pending approval",
};

console.log(request);
console.log({ ...request, status: ApprovalStatus[request.status] });
