function getDescription() {
  const element = document.querySelector("#description");

  if (element instanceof HTMLTextAreaElement) {
    console.log(element.value);
  } else {
    console.log("Element is NOT a textarea");
  }
}

const descriptionButton = document.querySelector(
  "#descriptionButton"
) as HTMLButtonElement;
descriptionButton.addEventListener("click", getDescription);
