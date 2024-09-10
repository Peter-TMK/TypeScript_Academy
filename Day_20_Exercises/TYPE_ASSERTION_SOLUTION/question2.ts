function checkBoxStatus() {
  const checkbox = <HTMLInputElement>document.querySelector("#checkbox");
  if (checkbox.checked) {
    console.log("Checkbox is checked");
  } else {
    console.log("Checkbox is NOT checked");
  }
}

const checkButton = <HTMLButtonElement>document.querySelector("#checkButton");
checkButton.addEventListener("click", checkBoxStatus);
