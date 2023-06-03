/* ==========================================================================
   Swiper.js
   ========================================================================== */
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  grabCursor: true,  
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

/* =================================================
 iOSでの高さ調整のため
=================================================== */
document.addEventListener("DOMContentLoaded", function () {
  function getViewportHeight() {
    return Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
  }

  function setElementHeightToViewport(element) {
    var viewportHeight = getViewportHeight();
    element.style.height = viewportHeight + "px";
  }

  var element = document.querySelector(".p-mv");
  if (element) {
    setElementHeightToViewport(element);
  }
});
