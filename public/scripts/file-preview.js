const filePickerElement = document.getElementById("image"); // "image" because that is thje id of the input we are grabbing.
const imagePreviewElement = document.getElementById("image-preview"); //same reason as above

function showPreview() {
  const files = filePickerElement.files;
  if (!files || files.length === 0) {
    // checking if there are any files added
    imagePreviewElement.style.display = "none";
    return;
    // console.log("nothin");
  }

  const pickedFile = files[0]; // picking the very first file

  imagePreviewElement.src = URL.createObjectURL(pickedFile); // generates a URL to the pickedFile, LOCALLY, which will then be the source of our preview.
  imagePreviewElement.style.display = "block";
}

filePickerElement.addEventListener("change", showPreview); // listens to whenever that changes.
