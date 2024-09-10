function changeImageSource() {
  const element = document.querySelector("#imageElement");

  // Ensure the element is actually an HTMLImageElement
  if (element instanceof HTMLImageElement) {
    element.src = "new-image.jpg"; // Change the image source
    console.log("Image source changed");
  } else {
    console.log("Element is NOT an image");
  }
}

const imageButton = document.querySelector("#imageButton") as HTMLButtonElement;
imageButton.addEventListener("click", changeImageSource);
