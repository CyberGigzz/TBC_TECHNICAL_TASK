// import TBC from "../assets/833px-TBC_Bank_logo.svg.png";

import TBC from "../assets/screenshot.png";

// Screenshot from 2024-01-24 22-23-57

function createNav() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  ul.id = "primary-navigation";
  ul.classList.add("flex");

  const buttonNames = ["მთავარი", "TBC IT", "TBC x USAID", "რისკები"];
  const buttonClasses = [
    "button-nav",
    "button-nav",
    "button-nav button-nav_active",
    "button-nav",
  ];

  for (let i = 0; i < buttonNames.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const span = document.createElement("span");

    span.textContent = buttonNames[i];
    a.classList = buttonClasses[i];

    // Add aria-hidden="true" to the span element
    span.setAttribute("aria-hidden", "true");

    a.appendChild(span);
    li.appendChild(a);

    // Add active class to all li elements
    li.classList.add("list");

    // Add an additional active class to the third li element
    if (i === 2) {
      li.classList.add("active");
    }

    // Add list class to all li elements
    li.classList.add("list");

    ul.appendChild(li);
  }

  // Add input with type checkbox and ID check
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "check";
  nav.appendChild(input);

  // Add label with for=check class=checkbtn
  const label = document.createElement("label");
  label.htmlFor = "check";
  label.classList.add("checkbtn");

  // In that label add i with class= fas fa-bars
  const i = document.createElement("i");
  i.classList.add("fas", "fa-bars");
  label.appendChild(i);

  nav.appendChild(label);
  nav.appendChild(ul);
  return nav;
}

export function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");

  const logoImage = document.createElement("img");
  logoImage.classList.add("header_img");

  logoImage.src = TBC;
  logoImage.alt = "Logo Image";

  logoDiv.appendChild(logoImage);

  wrapper.appendChild(logoDiv);
  wrapper.appendChild(createNav());

  header.appendChild(wrapper);

  return header;
}
