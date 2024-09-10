function checkBoxStatus() {
    var checkbox = document.querySelector("#checkbox");
    if (checkbox.checked) {
        console.log("Checkbox is checked");
    }
    else {
        console.log("Checkbox is NOT checked");
    }
}
var checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", checkBoxStatus);
