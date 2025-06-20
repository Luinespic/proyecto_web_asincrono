import "./style.css";
import Header from "./components/Header/header";
import Main from "./Components/Main/main";

const pageBuild = () => {
  Header();
  Main();
  getPhotos("dog");
  addSearchListener();
};

const getPhotos = async (keyword) => {
  const url = `https://api.unsplash.com/search/photos?client_id=DzAareXPVr-vl_h08LmNTeLe1Gb1bpt7o93YDFqieL4&page=1&query=${keyword}&per_page=30`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const photos = data.results;
    printPhotos(photos);
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
};

const printPhotos = (photos) => {
  const picturesWrapper = document.querySelector("#pictures-wrapper");
  picturesWrapper.innerHTML = "";

  for (const photo of photos) {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${photo.urls.small}" alt="${
      photo.alt_description || "Imagen sin descripción"
    }" />
    `;
    picturesWrapper.appendChild(li);
  }
};

let debounceTimeout;

const addSearchListener = () => {
  const searchInput = document.querySelector("#search-bar input");
  searchInput.addEventListener("input", (event) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      const keyword = event.target.value.trim();
      if (keyword) {
        getPhotos(keyword);
        console.log(keyword);
      } else {
        getPhotos("dog");
      }
    }, 400);
  });
};

pageBuild();
