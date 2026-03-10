const navLinks = document.querySelectorAll(".navText a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(item => item.classList.remove("aktive"));
    this.classList.add("aktive");
  });
});

const btn = document.getElementById("btn");

btn.addEventListener("mouseenter", () => {
  btn.classList.add("active");
});

btn.addEventListener("mouseleave", () => {
  btn.classList.remove("active");
});