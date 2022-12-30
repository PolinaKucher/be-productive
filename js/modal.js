import { colorOfCounter } from "./helpers.js";

// *Modal
const closeModal = document.getElementsByClassName("modal__close");
const modal = document.getElementsByClassName("modal");
const openModal = document.getElementsByClassName("button--demo");

export const activateModal = () => {
  // Open modal
  for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", function (event) {
      event.preventDefault();
      modal[1].classList.add("modal__show");
      colorOfCounter(1, 2);
    });
  }
  // Close modal
  for (let i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener("click", () => {
      modal[i].classList.remove("modal__show");
    });
  }
};
