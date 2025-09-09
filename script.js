// Mobile Navbar toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => navLinks.classList.remove("show"))
);

const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Switch emoji
    if(body.classList.contains('dark-mode')){
      toggleButton.textContent = '☀️';
    } else {
      toggleButton.textContent = '🌙';
    }
  });