// Бургер-меню
function initBurgerMenu() {
    const burgerMenuOpen = document.getElementById("burgerMenuOpen");
    const headerNav = document.getElementById("headerNav");
    const burgerMenuClose = document.getElementById("burgerMenuClose");

    if (burgerMenuOpen && headerNav && burgerMenuClose) {
        burgerMenuOpen.addEventListener("click", () => {
            headerNav.classList.add("header-nav__open");
            burgerMenuClose.classList.remove("d-none");
        });

        burgerMenuClose.addEventListener("click", () => {
            headerNav.classList.remove("header-nav__open");
            burgerMenuClose.classList.add("d-none");
        });
    }
}

document.addEventListener('DOMContentLoaded', initBurgerMenu);