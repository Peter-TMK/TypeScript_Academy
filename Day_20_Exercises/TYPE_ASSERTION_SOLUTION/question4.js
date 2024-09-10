function getDescription() {
    var element = document.querySelector("#description");
    if (element instanceof HTMLTextAreaElement) {
        console.log(element.value);
    }
    else {
        console.log("Element is NOT a textarea");
    }
}
var descriptionButton = document.querySelector("#descriptionButton");
descriptionButton.addEventListener("click", getDescription);
