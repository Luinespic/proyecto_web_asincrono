import "./style.css";

const initBuild = () => {
  footer();
};

initBuild();

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
