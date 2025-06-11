import "./main.css";

const template = () => `
  <div id="search-wrapper">
    <div id="search-bar">
      <svg height="16" viewBox="0 0 24 24" width="16">
        <path d="M17.33 18.74a10 10 0 1 1 1.41-1.41l4.47 4.47-1.41 1.41zM11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16"></path>
      </svg>      
      <input type="text" placeholder="Buscar" />
    </div>
  </div>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>
  <p>Hola, bienvenido a la página principal</p>

`;

const Main = () => {
  document.querySelector("main").innerHTML = template();
};

export default Main;
