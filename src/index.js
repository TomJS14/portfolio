/** @format */

import "./styles.css";
import wavingHand from "./openHand.svg";
import webDesign from "./website-design.png";
const main = document.querySelector(".main");

function RenderPage() {
  //create container
  const container = document.createElement("div");
  container.classList.add("container");

  //Slide 1 elements
  const slideOne = document.createElement("div");
  const slideOneHeader = document.createElement("h2");
  slideOneHeader.textContent = "Hi! I'm Tom";
  slideOneHeader.classList.add("hello");
  const messageContainer = document.createElement("div");
  slideOne.classList.add("slides");
  slideOne.classList.add("slideOne");

  //Hand icon
  const myHand = document.createElement("object");
  myHand.data = wavingHand;
  myHand.type = "image/svg+xml";
  myHand.classList.add("waving");

  //message box
  const messageBox = document.createElement("div");
  messageBox.textContent = "Placeholder";
  messageBox.classList.add("projectContainer");

  //append elements
  slideOne.appendChild(slideOneHeader);
  slideOne.appendChild(myHand);
  slideOne.appendChild(messageBox);
  container.appendChild(slideOne);

  //Night mode button
  const nightSwitch = document.createElement("button");
  nightSwitch.classList.add("LightMode");
  nightSwitch.classList.add("nightSwitch");
  nightSwitch.textContent = "Light mode";
  slideOne.appendChild(nightSwitch);

  //content message
  const message = document.createElement("h1");
  message.textContent = "Check out my projects";
  message.classList.add("message");
  slideOne.appendChild(message);

  message.addEventListener("mouseenter", handleHover);
  message.addEventListener("mouseleave", handleHover);

  //slide 2 & elements
  const slideTwo = document.createElement("div");
  const slideTwoHeader = document.createElement("h2");
  /* const slideTwoImage = document.createElement("img"); */
  const slideTwoImage = new Image();
  slideTwoImage.src = webDesign;

  slideTwoHeader.textContent = "I'm a developer";
  slideTwoHeader.classList.add("hello");
  slideTwo.classList.add("slides");
  slideTwo.classList.add("slideTwo");

  slideTwo.appendChild(slideTwoHeader);
  slideTwo.appendChild(slideTwoImage);
  container.appendChild(slideTwo);

  //append everything to main
  main.appendChild(container);

  return container;
}

const pageContainer = RenderPage();

function handleHover() {
  // Calculate the scroll position based on the message's hover state
  const scrollPosition = this.classList.contains("hovered")
    ? 0
    : this.clientHeight + 300; //Adjust the height value
  //set to scroll to the above position smoothly
  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });

  //toggle the hovered class to reverse the scroll??
  /* this.classList.toggle("hovered"); */
}

const nightSwitch = pageContainer.querySelector(".nightSwitch");
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

//projects container
