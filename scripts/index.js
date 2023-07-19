const nav = document.getElementById("nav");
const navOpenBtn = document.querySelector(".nav-open-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

function openNav(open, close) {
  open.addEventListener("click", () => {
    nav.classList.add("active");
    close.style.display = "block";
    open.style.display = "none";
  });

  close.addEventListener("click", () => {
    nav.classList.remove("active");
    open.style.display = "block";
    close.style.display = "none";
  });
}

openNav(navOpenBtn, navCloseBtn);

// navBtn.addEventListener("click", () => {
//   if (navBtn.name === "menu-sharp") {
//     navBtn.name = "close-sharp";

//     nav.classList.toggle("active");
//   } else {
//     navBtn.name = "menu-sharp";

//     nav.classList.toggle("active");
//   }
// });
