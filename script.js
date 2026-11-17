// Mobile navigation menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

// Close menu after selecting a navigation link
document.querySelectorAll("#navMenu a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("show");
  });
});

// Show or hide additional travel information
document.querySelectorAll(".info-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    const info = button.nextElementSibling;

    if (info.textContent === "") {
      info.textContent = button.dataset.info;
      button.textContent = "Show Less";
    } else {
      info.textContent = "";
      button.textContent = "Travel Information";
    }
  });
});

// Update copyright year automatically
document.getElementById("year").textContent = new Date().getFullYear();
