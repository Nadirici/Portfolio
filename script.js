function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hicon");

    //attribution de la classe open aux éléments ayant les classes .menu-links et .hicon
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}