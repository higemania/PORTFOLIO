let objToggleBtn = document.querySelector(".navbar__toggle-btn");
let objMenu = document.querySelector(".navbar__menu");

objToggleBtn.addEventListener("click", {
    objMenu.classList.toggle('active');
});