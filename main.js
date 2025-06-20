import "./style.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

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

/*
param	            Description
query	            Search terms.
page	            Page number to retrieve. (Optional; default: 1)
per_page	        Number of items per page. (Optional; default: 10)
order_by	        How to sort the photos. (Optional; default: relevant). Valid values are latest and relevant.
collections	      Collection ID(‘s) to narrow search. Optional. If multiple, comma-separated.
content_filter	  Limit results by content safety. (Optional; default: low). Valid values are low and high.
color	            Filter results by color. Optional. Valid values are: black_and_white, black, white, yellow, orange, red, purple, magenta, green, teal, and blue.
orientation	      Filter by photo orientation. Optional. (Valid values: landscape, portrait, squarish) 

fetch(
  "https://api.unsplash.com/search/photos?client_id=DzAareXPVr-vl_h08LmNTeLe1Gb1bpt7o93YDFqieL4&page=1&query=dog"
)
  .then((res) => {
    const img = document.querySelector("#prueba");
    console.log(res);
  })
  .catch((err) => console.log(err));*/
