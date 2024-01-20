/** @format */

import "./styles.css";
import background from "./gradientBG.jpg";
import wavingHand from "./openHand.svg";
const main = document.querySelector(".main");

function RenderComponent() {
  const element = document.createElement("div");
  element.textContent = "Hi! I'm Tom";
  element.classList.add("hello");
  //Background element
  const myBackground = new Image();
  myBackground.src = background;
  myBackground.classList.add("backgroundImg");
  element.appendChild(myBackground);
  //Hand icon
  const myHand = document.createElement("object");
  myHand.data = wavingHand;
  myHand.type = "image/svg+xml";
  myHand.classList.add("waving");
  element.appendChild(myHand);

  //Call to content

  return element;
}

main.appendChild(RenderComponent());

//Night mode button

const nightSwitch = document.createElement("button");
nightSwitch.classList.add("LightMode");
nightSwitch.classList.add("nightSwitch");
nightSwitch.textContent = "Light mode";
main.appendChild(nightSwitch);

//content message
const message = document.createElement("div");
message.textContent = "Check out my projects";
message.classList.add("message");
main.appendChild(message);

nightSwitch.addEventListener("click", DarkModeToggle);

function DarkModeToggle(myHand) {
  const objectElement = document.querySelector(".waving");
  const svgDoc = objectElement.contentDocument; //access the svg document
  const pathElement = svgDoc.querySelector("path");
  if (nightSwitch.classList.contains("darkMode")) {
    nightSwitch.classList.remove("darkMode");
    nightSwitch.classList.add("lightMode");
    nightSwitch.textContent = "Light Mode";
    main.classList.remove("dark");
    pathElement.style.fill = "black"; //update the fill of the svg
  } else {
    nightSwitch.classList.remove("lightMode");
    nightSwitch.classList.add("darkMode");
    nightSwitch.textContent = "Dark Mode";
    main.classList.add("dark");
    pathElement.style.fill = "white"; //update the fill of the svg
  }
}
