// Mobile Navbar toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => navLinks.classList.remove("show"))
);
