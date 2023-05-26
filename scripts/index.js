const nav = document.getElementById("nav");
const navBtn = document.getElementById("menu")

navBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (navBtn.name === "menu-sharp") {
        navBtn.name = "close-sharp";
    } else {
        navBtn.name = "menu-sharp";
    } 
})