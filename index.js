// *Imports
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { burgerBtn, closeMenu, navigation } from "./js/burger.js";
import { faqCards } from "./js/faq-cards.js";
import { registration } from "./js/form.js";
import { colorOfCounter, counter, isModalShow } from "./js/helpers.js";
import { activateModal } from "./js/modal.js";
import { smoothScroll } from "./js/scroll.js";
import { swiper } from "./js/swiper.js";

// *Get DOM elements
// const firebaseConfig = {
//   apiKey: "AIzaSyDAuFR67cxQgUznM6H0haSXna_-NJcYvNU",
//   authDomain: "be-productive-369110.firebaseapp.com",
//   projectId: "be-productive-369110",
//   storageBucket: "be-productive-369110.appspot.com",
//   messagingSenderId: "609861695587",
//   appId: "1:609861695587:web:3e52448e369ce6e0ac2056",
//   measurementId: "G-GS7W4V65N0"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const registrationForm = document.getElementById("form");
const modal = document.getElementsByClassName("modal");
const modalBtn = document.getElementsByClassName("button--blue");

// *Event listeners
// Burger
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger__active");
  navigation.classList.toggle("open");
});

// Registration form
registrationForm.addEventListener("submit", registration);

// Close with keyboard
document.body.addEventListener("keyup", (e) => {
  if (e.keyCode === 27) {
    modal[0].classList.remove("modal__show");
  }
});

// First modal, to open form and subscribe
modalBtn[1].addEventListener("click", () => {
  isModalShow(1, 0);
  colorOfCounter(0, 1);
});

// modalBtn[2].addEventListener("click", () => {
//   window.open('man-1.jpg')
// })


// *Call functions
activateModal();
closeMenu();
faqCards();
counter();

// *MAP initalization
window.initMap = function () {
  // The location
  const sanF = { lat: 37.76938682871913, lng: -122.43901124992408 };
  // The map, centered at the location
  new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    mapId: "c8084414b14662b7",
    center: sanF,
  });
};
