// Exercise 1: Basic Enum Declaration and Usage
// Declare an enum named Color with the following members: Red, Green, and Blue.
// Then, create a variable named favoriteColor of type Color and assign it the value Color.Green.
// Log the favoriteColor to the console.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log(favoriteColor);
// Exercise 2: Enum in a Function
// Declare an enum named Day with the following members:
// Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.
// Create a function named isWeekend that takes a Day enum as an argument and
// returns true if the day is either Saturday or Sunday, otherwise returns false.
// Call the function with Day.Sunday and log the result to the console.
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function isWeekend(day) {
    var dDay = day === Day.Sunday ? true : false;
    return dDay;
}
console.log(isWeekend(Day.Sunday));
console.log(isWeekend(Day.Friday));
// Exercise 3: Specifying Enum Members' Numbers
// Declare an enum named Priority with the following members: Low with value 1,
// Medium with value 2, and High with value 3.
// Create a variable named taskPriority of type Priority and assign it the value Priority.High.
// Log the taskPriority to the console.
var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
})(Priority || (Priority = {}));
var taskPriority = Priority.High;
console.log(taskPriority);
// Exercise 4: Enum with a Switch Case
// Declare an enum named Season with the following members: Spring, Summer, Autumn, and Winter.
// Create a function named getSeasonActivities that takes a Season enum as an argument and
// returns a string describing an activity for each season. Use a switch case to handle each season.
// Call the function with Season.Winter and log the result to the console.
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
function getSeasonActivities(season) {
    var seasonDescribe;
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
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Draft"] = 0] = "Draft";
    ApprovalStatus[ApprovalStatus["Submitted"] = 1] = "Submitted";
    ApprovalStatus[ApprovalStatus["Approved"] = 2] = "Approved";
    ApprovalStatus[ApprovalStatus["Rejected"] = 3] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
var request = {
    id: 1,
    status: ApprovalStatus.Submitted,
    description: "Pending approval"
};
console.log(request);
console.log(__assign(__assign({}, request), { status: ApprovalStatus[request.status] }));
