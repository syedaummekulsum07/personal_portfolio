// Mobile nav toggle
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close nav on link click (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form demo (front-end only)
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "Thank you! Your message has been recorded locally.";
  formMessage.style.color = "#22c55e";
  contactForm.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 4000);
});
