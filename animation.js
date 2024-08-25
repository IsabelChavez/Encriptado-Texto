// Toggle button
const toggleBtn = document.querySelector(".toggle-state");

toggleBtn.addEventListener("input", () => {
  document.querySelector("body").classList.toggle("dark");
});