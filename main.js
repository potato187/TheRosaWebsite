/* select element */
const selectElement = (element) => {
  return document.querySelector(element);
};
const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const body = selectElement("body");
const menuToggler = selectElement(".menu-toggle");
const btnScrollTop = selectElement("#scroll-top");

menuToggler.addEventListener("click", () => {
  body.classList.toggle("open");
});

btnScrollTop.addEventListener("click", handleScrollTop);
/* Scroll reveal */

window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 400,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 400,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 500,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 500,
});
