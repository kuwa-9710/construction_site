/* ==========================================================================
   Swiper.js
   ========================================================================== */
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  grabCursor: true,
  loop: true,
});

/* ==========================================================================
   header navigation
   ========================================================================== */
const header = document.querySelector(".l-header");
const headerButton = document.querySelector(".l-header__button");
const headerWrapper = document.querySelector(".l-header__wrapper");

headerButton.addEventListener("click", () => {
  header.classList.toggle("active");
  headerButton.classList.toggle("active");
  headerWrapper.classList.toggle("active");
});
