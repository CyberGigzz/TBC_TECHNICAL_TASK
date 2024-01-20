import { createHeader } from "./header";

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  const mainElement = createMain();
  const headerElement = createHeader();

  mainElement.appendChild(headerElement);
  content.appendChild(mainElement);
}

initializeWebsite();
