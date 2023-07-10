const submit = document.querySelector('button[type="submit"]');
const gratitudeSection = document.querySelector(".gratitude-section");
const ratingSection = document.querySelector(".rating-section");
const ratingBtn = document.querySelectorAll(".rate");
const ratingEl = document.querySelector(".rating");

for (let btn = 0; btn < ratingBtn.length; btn++) {
  ratingEl.textContent = 0;
  ratingBtn[btn].addEventListener("click", function () {
    if (btn === 0) {
      ratingEl.textContent = 1;
    } else if (btn === 1) {
      ratingEl.textContent = 2;
    } else if (btn === 2) {
      ratingEl.textContent = 3;
    } else if (btn === 3) {
      ratingEl.textContent = 4;
    } else if (btn === 4) {
      ratingEl.textContent = 5;
    }
  });
}

const showMessage = function () {
  ratingSection.classList.add("hide");
  gratitudeSection.classList.remove("hide");
};
submit.addEventListener("click", showMessage);
