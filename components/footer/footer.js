import "./footer.css";

const template = () => `<p>Made with love by Lucía</p>`;

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
