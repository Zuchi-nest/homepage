const requestUrl =
  "https://api.unsplash.com/search/photos?query=mountainlandscape&client_id=pr0uoxZ3v5CVRZzAh3AIuv4bv_A5ngl5JaQfgENNsoQ";
const imageToDisplay = document.querySelector(".imageToDisplay");

// getImagesButton.addEventListener("click", async () => {
//   let randomImage = await getNewImage();
//   imageToDisplay.src = randomImage;
// });

async function getNewImage() {
  let randomNumber = Math.floor(Math.random() * 10);
  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return allImages.urls.regular;
    });
}

let randomImage = await getNewImage();
imageToDisplay.src = randomImage;
