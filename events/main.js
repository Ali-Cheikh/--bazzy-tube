// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });
// Countdown Timer
function updateCountdown() {
  const eventDate = new Date("2026-12-31T00:00:00").getTime(); // Replace with actual date
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML =
      "<div class='text-4xl font-bold'>EVENT STARTED!</div>";
  }
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

document.querySelectorAll(".view-full-image").forEach((button) => {
  button.addEventListener("click", function () {
    const imageUrl = button.closest(".group").querySelector("img").src;
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    modalImage.src = imageUrl;
    modal.classList.remove("hidden");
  });
});

// Close modal when clicking outside the image
document
  .getElementById("image-modal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      this.classList.add("hidden");
    }
  });
