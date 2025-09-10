// Mobile Navbar toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => navLinks.classList.remove("show"))
);

const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("inverted");

  if (body.classList.contains("inverted")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

// contact work
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const submitButton = this.querySelector('button[type="submit"]');
  submitButton.disabled = true; // Disable button immediately
  submitButton.textContent = 'Sending...'; // Optional: show feedback

  emailjs.sendForm('service_i0rivhl', 'template_evqh0k2', this)
    .then(function() {
      alert('✅ Message sent successfully!');
      submitButton.textContent = 'Send Message'; // Reset button text
      document.getElementById('contact-form').reset(); // Clear the form
    }, function(error) {
      console.error('EmailJS Error:', error);
      alert('❌ Failed to send message. Please try again later.');
      submitButton.disabled = false; // Re-enable button if sending fails
      submitButton.textContent = 'Send Message'; // Reset text
    });
});