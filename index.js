const uploadButton = document.querySelector(".cu-upload-image");
const uploadModal = document.querySelector("#logo-upload");
const uploadButtonName = document.querySelector(".cu-upload-text");
const logoImage = document.querySelector(".cu-logo-image");
const cancelButton = document.querySelector(".cu-upload-cancel");
const colorPickBlue = document.querySelector(".cu-color-pick-blue");
const colorPickYellow = document.querySelector(".cu-color-pick-yellow");
const colorPickPink = document.querySelector(".cu-color-pick-pink");
const umbrellaImage = document.querySelector(".cu-umbrella-image");
const mainContainer = document.querySelector(".cu-main-container");
const loaderImage = document.querySelector(".cu-logo-loader");
const loaderImageSec = document.querySelector(".cu-logo-loader-sec");
let imageBase64;

uploadButton.addEventListener("click", () => {
  uploadModal.click();
});

// to upload same name file onchange handler fix
uploadModal.addEventListener("click", (e) => {
  e.target.value = null;
});

uploadModal.addEventListener("change", (e) => {
  imageBase64 = getBase64(e.target.files[0]);
});

cancelButton.addEventListener("click", () => {
  logoImage.src = "";
  imageBase64 = "";
  logoImage.style.visibility = "hidden";
  uploadButtonName.innerHTML = "Upload Logo";
  cancelButton.style.visibility = "hidden";
});

function getBase64(file) {
  umbrellaImage.style.display = "none";
  uploadButton.style.display = "none";
  loaderImage.style.display = "block";
  loaderImageSec.style.display = "block";
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    imageBase64 = reader.result;
    cancelButton.style.visibility = "visible";
    uploadButtonName.innerHTML = file.name;
    logoImage.src = imageBase64;
    logoImage.style.visibility = "visible";
    umbrellaImage.style.display = "block";
    uploadButton.style.display = "block";
    loaderImage.style.display = "none";
    loaderImageSec.style.display = "none";
  };
  reader.onerror = (error) => console.log(error);
}

colorPickBlue.addEventListener("click", () => {
  umbrellaImage.src = "./assets/Blue_umbrella.png";
  mainContainer.style.backgroundColor = "#7bceef4f";
  colorPickBlue.style.borderWidth = "0.5em";
  colorPickPink.style.borderWidth = "0.3em";
  colorPickYellow.style.borderWidth = "0.3em";
});
colorPickPink.addEventListener("click", () => {
  umbrellaImage.src = "./assets/Pink_umbrella.png";
  mainContainer.style.backgroundColor = "#d8318a4d";
  colorPickBlue.style.borderWidth = "0.3em";
  colorPickPink.style.borderWidth = "0.5em";
  colorPickYellow.style.borderWidth = "0.3em";
});
colorPickYellow.addEventListener("click", () => {
  umbrellaImage.src = "./assets/Yellow_umbrella.png";
  mainContainer.style.backgroundColor = "#fedb6752";
  colorPickBlue.style.borderWidth = "0.3em";
  colorPickPink.style.borderWidth = "0.3em";
  colorPickYellow.style.borderWidth = "0.5em";
});
