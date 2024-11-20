const menuBtn = document.querySelector(".burger");
const navlinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  console.log("hello");
  navlinks.classList.toggle("nav-active");
});
