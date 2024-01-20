/** @format */

import "./styles.css";
import background from "./gradientBG.jpg";
import wavingHand from "./waveHandVector.png";
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
  const myHand = new Image();
  myHand.src = wavingHand;
  myHand.classList.add("waving");
  element.appendChild(myHand);
  return element;
}

main.appendChild(RenderComponent());
