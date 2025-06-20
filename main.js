import "./style.css";
import Header from "./components/Header/header";
import Main from "./Components/Main/main";

let currentKeyword = "dog";
let currentPage = 1;
let isFetching = false;
let debounceTimeout;

const pageBuild = () => {
  Header();
  Main();
  getPhotos(currentKeyword);
  addSearchListener();
  addInfiniteScroll();
};

const getPhotos = async (keyword, append = false) => {
  const url = `https://api.unsplash.com/search/photos?client_id=DzAareXPVr-vl_h08LmNTeLe1Gb1bpt7o93YDFqieL4&page=${currentPage}&query=${keyword}&per_page=30`;
  try {
    isFetching = true;
    const response = await fetch(url);
    const data = await response.json();
    const photos = data.results;
    printPhotos(photos, append);
    isFetching = false;
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
};

const printPhotos = (photos, append = false) => {
  const picturesWrapper = document.querySelector("#pictures-wrapper");
  if (!append) {
    picturesWrapper.innerHTML = "";
  }

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

const addSearchListener = () => {
  const searchInput = document.querySelector("#search-bar input");
  searchInput.addEventListener("input", (event) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      const keyword = event.target.value.trim();
      currentKeyword = keyword || "dog";
      currentPage = 1;
      getPhotos(currentKeyword);
    }, 400);
  });
};

const addInfiniteScroll = () => {
  const main = document.querySelector("main");
  main.addEventListener("scroll", () => {
    if (
      main.scrollTop + main.clientHeight >= main.scrollHeight - 200 &&
      !isFetching
    ) {
      currentPage++;
      getPhotos(currentKeyword, true);
    }
  });
};

pageBuild();
