// *Helpers
const getCounter = document.getElementsByClassName("modal__num");

export function colorOfCounter(modalId, counterId) {
  if (modal[modalId].classList.contains("modal__show")) {
    getCounter[counterId].style.color = "black";
  }
}

export function counter() {
  getCounter[3].addEventListener("click", () => {
    isModalShow(1, 0);
    colorOfCounter(0, 1);
  });

  getCounter[0].addEventListener("click", () => {
    isModalShow(0, 1);
  });
}

export function isModalShow(idHide, idShow) {
  modal[idHide].classList.remove("modal__show");
  modal[idShow].classList.add("modal__show");
}
