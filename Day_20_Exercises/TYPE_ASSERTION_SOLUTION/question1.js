function getInputValue() {
    var inputElement = document.querySelector("#inputField");
    console.log(inputElement.value);
}
var button = document.querySelector("#submitButton");
button.addEventListener("click", getInputValue);
