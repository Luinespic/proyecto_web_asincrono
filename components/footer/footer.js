import "./footer.css";

const template = () => {
  `<p>Made with love by Lucía</p>`;
};

const footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default footer;
