//*Burger
export const navigationLink = document.getElementsByClassName("navigation__link");
export const burgerBtn = document.getElementById("js-burger");
export const navigation = document.getElementById("js-navigation");

// Close menu after smooth scroll
export const closeMenu = () => {
  for (let i = 0; i < navigationLink.length; i++) {
    navigationLink[i].addEventListener("click", function (event) {
      event.preventDefault();
      burgerBtn.classList.remove("burger__active");
      navigation.classList.remove("open");
    });
  }
}

