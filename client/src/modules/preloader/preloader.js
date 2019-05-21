import logo from "./logo.png";
import "./styles.css";

const preloader = () => {
  const container = document.createElement("div");
  let lastContainer = container;
  const addNode = () => {
    container.className = "preloader";
    container.innerHTML = `
        <div class="image__container">
          <img src=${logo} alt='wait' />
          <div class="animation__container">
              <div class="animation"></div>
          </div>
        </div>`;
    document.body.appendChild(container);
    lastContainer = container;
  };

  const delNode = () => {
    lastContainer.remove();
  };

  return { addNode, delNode };
};

export default preloader;
