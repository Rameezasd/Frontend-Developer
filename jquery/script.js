const menus = document.querySelector(".menus");
const menuItems = document.querySelectorAll(".menuItem");
const burger= document.querySelector(".burger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
 if (menus.classList.contains("showMenus")) {
menus.classList.remove("showMenus");
closeIcon.style.display = "none";
menuIcon.style.display = "block";
} else {
menus.classList.add("showMenus");
closeIcon.style.display = "block";
menuIcon.style.display = "none";
}
}

burger.addEventListener("click", toggleMenu);

menuItems.forEach(
function(menuItem) {
menusItem.addEventListener("click", toggleMenu);
}
)

