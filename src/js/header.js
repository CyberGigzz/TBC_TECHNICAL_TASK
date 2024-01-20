function createNav() {
  const nav = document.createElement("nav");

  //First
  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "მთავარი";

  //TBC IT
  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "TBC IT";

  //TBC x USAID
  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "TBC x USAID";

  //risks
  const risks = document.createElement("button");
  risks.classList.add("button-nav");
  risks.textContent = "რისკები";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  nav.appendChild(risks);

  return nav;
}

export function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant_name");
  restaurantName.textContent = "Khachapuri House";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}
