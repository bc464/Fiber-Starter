// INFORM USERS ABOUT SIGN-UP EXAMPLE
alert(
  "the SIGN UP button is ACTIVE and wll take you to an EXAMPLE. to get back to the HOME page click on the FIBER logo"
);
// MAKE MOBILE NAVIGATION WORK
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
