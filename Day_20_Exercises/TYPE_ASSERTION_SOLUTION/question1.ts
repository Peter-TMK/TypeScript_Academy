function getInputValue() {
  const inputElement = document.querySelector(
    "#inputField"
  ) as HTMLInputElement;
  console.log(inputElement.value);
}

const button = document.querySelector("#submitButton") as HTMLButtonElement;
button.addEventListener("click", getInputValue);
