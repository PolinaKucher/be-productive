// *FAQ cards
const collapse = document.getElementsByClassName("faq-card__head");

export function faqCards() {
  for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function () {
      this.classList.toggle("active");

      const content = this.nextElementSibling;
      if (content.style.height) {
        content.style.height = null;
      } else {
        content.style.height = content.scrollHeight + "px";
      }
    });
  }
}