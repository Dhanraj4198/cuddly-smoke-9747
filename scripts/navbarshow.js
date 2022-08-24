document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown_menu-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown_menu]") != null) return;
  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown_menu]");
    currentDropdown.classList.toggle("active");
  }
  document.querySelectorAll("[data-dropdown_menu].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
