document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".home-page")) {
    document.addEventListener("scroll", () => {
      menuFijo();
    });
  }
});

function menuFijo() {
  if (window.scrollY >= 100) {
    document.querySelector(".barra").classList.add("fijo");
  } else {
    document.querySelector(".barra").classList.remove("fijo");
  }
}
