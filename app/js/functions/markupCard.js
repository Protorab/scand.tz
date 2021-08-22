import blink from "./blink";
const markupCard = () => {
  const markupCards = document.querySelectorAll(".markup-card");
  if (markupCards.length > 0) {
    markupCards.forEach((item) => {
      item.addEventListener("mouseenter", (e) => {
        blink(e, "1500");
      });
      item.addEventListener("click", (e) => {
        blink(e, "1500");
      });
    });
  }
};

export default markupCard;
