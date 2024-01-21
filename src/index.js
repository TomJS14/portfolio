/** @format */

import "./styles.css";
import wavingHand from "./openHand.svg";
import battleshipIcon from "./marine.png";
import landingPageIcon from "./landing-page.png";
import etchIcon from "./drawing-board.png";
import libaryIcon from "./book.png";
import toDoIcon from "./task-list.png";
import weatherIcon from "./weather.png";
import githubIcon from "./github.png";
import linkedInIcon from "./linkedin-logo.png";
import emailIcon from "./email.png";
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
  messageBox.textContent = "Nice to meet you!";
  messageBox.classList.add("messageBox");

  //Night mode button
  const nightSwitch = document.createElement("button");
  nightSwitch.classList.add("default");
  nightSwitch.classList.add("nightSwitch");
  nightSwitch.textContent = "Lights off";
  slideOne.appendChild(nightSwitch);

  //append elements
  slideOne.appendChild(slideOneHeader);
  slideOne.appendChild(myHand);
  slideOne.appendChild(messageBox);
  container.appendChild(slideOne);

  //content message
  const message = document.createElement("h1");
  message.textContent = "Check out my projects";
  message.classList.add("message");
  slideOne.appendChild(message);

  message.addEventListener("mouseenter", handleHover);
  message.addEventListener("mouseleave", handleHover);

  /* //slide 2 & elements
  const slideTwo = document.createElement("div");
  const slideTwoHeader = document.createElement("h2");
  const slideTwoImage = new Image();
  slideTwoImage.src = webDesign;
  slideTwoImage.classList.add("developerImage");
  slideTwoHeader.textContent = "I'm a developer";
  slideTwoHeader.classList.add("hello");
  slideTwo.classList.add("slides");
  slideTwo.classList.add("slideTwo"); */

  /* //append slide two
  slideTwo.appendChild(slideTwoHeader);
  slideTwo.appendChild(slideTwoImage);
  container.appendChild(slideTwo); */

  //slide 3 & elements
  const slideThree = document.createElement("div");
  slideThree.classList.add("slides");
  slideThree.classList.add("slideThree");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectContainer");
  //card one
  const cardOne = document.createElement("a");
  cardOne.classList.add("projectCard");
  const cardOneHeader = document.createElement("h2");
  cardOneHeader.textContent = "Battleships";
  cardOne.href = "https://tomjs14.github.io/battleships/";
  cardOne.target = "_blank";
  const cardOneImage = new Image();
  cardOneImage.src = battleshipIcon;
  cardOneImage.classList.add("projectIcon");
  //card two
  const cardTwo = document.createElement("a");
  cardTwo.classList.add("projectCard");
  const cardTwoHeader = document.createElement("h2");
  cardTwoHeader.textContent = "Etch a Sketch";
  cardTwo.href = "https://tomjs14.github.io/etch-a-sketch/";
  cardTwo.target = "_blank";
  const cardTwoImage = new Image();
  cardTwoImage.src = etchIcon;
  cardTwoImage.classList.add("projectIcon");
  //card three
  const cardThree = document.createElement("a");
  cardThree.classList.add("projectCard");
  const cardThreeHeader = document.createElement("h2");
  cardThreeHeader.textContent = "Landing Page";
  cardThree.href = "https://tomjs14.github.io/sign-up-form/";
  cardThree.target = "_blank";
  const cardThreeImage = new Image();
  cardThreeImage.src = landingPageIcon;
  cardThreeImage.classList.add("projectIcon");
  //card four
  const cardFour = document.createElement("a");
  cardFour.classList.add("projectCard");
  const cardFourHeader = document.createElement("h2");
  cardFourHeader.textContent = "Weather App";
  cardFour.href = "https://tomjs14.github.io/weather-app/";
  cardFour.target = "_blank";
  const cardFourImage = new Image();
  cardFourImage.src = weatherIcon;
  cardFourImage.classList.add("projectIcon");
  //card five
  const cardFive = document.createElement("a");
  cardFive.classList.add("projectCard");
  const cardFiveHeader = document.createElement("h2");
  cardFiveHeader.textContent = "Library";
  cardFive.href = "https://tomjs14.github.io/library/";
  cardFive.target = "_https://tomjs14.github.io/library/";
  const cardFiveImage = new Image();
  cardFiveImage.src = libaryIcon;
  cardFiveImage.classList.add("projectIcon");
  //card six
  const cardSix = document.createElement("a");
  cardSix.classList.add("projectCard");
  const cardSixHeader = document.createElement("h2");
  cardSixHeader.textContent = "To Do App";
  cardSix.href = "https://tomjs14.github.io/to-do/";
  cardSix.target = "_blank";
  const cardSixImage = new Image();
  cardSixImage.src = toDoIcon;
  cardSixImage.classList.add("projectIcon");

  //append cards
  cardOne.appendChild(cardOneHeader);
  cardOne.appendChild(cardOneImage);
  cardTwo.appendChild(cardTwoHeader);
  cardTwo.appendChild(cardTwoImage);
  cardThree.appendChild(cardThreeHeader);
  cardThree.appendChild(cardThreeImage);
  cardFour.appendChild(cardFourHeader);
  cardFour.appendChild(cardFourImage);
  cardFive.appendChild(cardFiveHeader);
  cardFive.appendChild(cardFiveImage);
  cardSix.appendChild(cardSixHeader);
  cardSix.appendChild(cardSixImage);
  projectContainer.appendChild(cardOne);
  projectContainer.appendChild(cardTwo);
  projectContainer.appendChild(cardThree);
  projectContainer.appendChild(cardFour);
  projectContainer.appendChild(cardFive);
  projectContainer.appendChild(cardSix);

  slideThree.appendChild(projectContainer);
  container.appendChild(slideThree);

  //slide 4 & elements
  const slideFour = document.createElement("div");
  const slideFourHeader = document.createElement("h2");
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("iconContainer");

  //links
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/TomJS14";
  githubLink.target = "_blank"; // opens link in a new tab

  const linkedInLink = document.createElement("a");
  linkedInLink.href = "https://linkedin.com";
  linkedInLink.target = "_blank"; // opens link in a new tab

  const emailLink = document.createElement("a");
  emailLink.href = "https://gmail.com";
  emailLink.target = "_blank"; // opens link in a new tab

  //icons
  const linkedInImage = new Image();
  linkedInImage.src = linkedInIcon;
  linkedInImage.classList.add("icon");
  const githubImage = new Image();
  githubImage.src = githubIcon;
  githubImage.classList.add("icon");
  const emailImage = new Image();
  emailImage.src = emailIcon;
  emailImage.classList.add("icon");
  slideFourHeader.textContent = "How to find me";
  slideFourHeader.classList.add("hello");
  slideFour.classList.add("slides");
  slideFour.classList.add("slideFour");

  //append slide 4
  githubLink.appendChild(githubImage);
  linkedInLink.appendChild(linkedInImage);
  emailLink.appendChild(emailImage);

  iconContainer.appendChild(linkedInLink);
  iconContainer.appendChild(githubLink);
  iconContainer.appendChild(emailLink);
  slideFour.appendChild(slideFourHeader);
  slideFour.appendChild(iconContainer);

  container.appendChild(slideFour);

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

function DarkModeToggle() {
  //switch to filters for background gradient?
  const objectElement = document.querySelector(".waving");
  const slideOne = document.querySelector(".slideOne");
  const slideThree = document.querySelector(".slideThree");
  const slideFour = document.querySelector(".slideFour");
  const icons = document.querySelectorAll(".icon");
  const svgDoc = objectElement.contentDocument; //access the svg document
  const pathElement = svgDoc.querySelector("path");
  if (nightSwitch.classList.contains("darkMode")) {
    nightSwitch.classList.remove("darkMode");
    nightSwitch.classList.add("lightMode");
    nightSwitch.textContent = "Lights On";
    slideOne.classList.add("dark");
    /* slideTwo.classList.add("dark"); */
    slideThree.classList.add("dark");
    slideFour.classList.add("dark");
    icons.forEach((icon) => {
      icon.classList.add("darkIcon");
    });

    pathElement.style.fill = "white"; //update the fill of the svg
  } else if (nightSwitch.classList.contains("default")) {
    nightSwitch.classList.remove("default");
    nightSwitch.classList.remove("darkMode");
    nightSwitch.classList.add("lightMode");
    nightSwitch.textContent = "Lights On";
    slideOne.classList.add("dark");
    icons.forEach((icon) => {
      icon.classList.add("darkIcon");
    });

    slideThree.classList.add("dark");
    slideFour.classList.add("dark");
    pathElement.style.fill = "white";
  } else {
    nightSwitch.classList.remove("lightMode");
    nightSwitch.classList.add("darkMode");
    nightSwitch.textContent = "Lights Off";
    slideOne.classList.remove("dark");
    icons.forEach((icon) => {
      icon.classList.remove("darkIcon");
    });

    slideThree.classList.remove("dark");
    slideFour.classList.remove("dark");
    pathElement.style.fill = "black"; //update the fill of the svg
  }
}
