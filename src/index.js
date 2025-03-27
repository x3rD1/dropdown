import "./style.css";

document.addEventListener("click", (e) => {
  const link = e.target.matches("[data-dropdown-link]");

  if (!link && e.target.closest("[data-dropdown]") !== null) return;

  let currentDropDown;
  if (link) {
    currentDropDown = e.target.closest("[data-dropdown]");
    currentDropDown.classList.toggle("show");
  }

  document.querySelectorAll("[data-dropdown].show").forEach((dropdown) => {
    if (dropdown === currentDropDown) return;
    dropdown.classList.remove("show");
  });
});
