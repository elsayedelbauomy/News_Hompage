const header =  document.querySelector("header");
const ul =  document.querySelector("ul");
const overLay =  document.querySelector(".overLay");
const mediaQuery = window.matchMedia("(max-width: 767px)");

    burrgerNav()


function  burrgerNav() {
    let img = document.createElement("img");
    img.src = "./assets/images/icon-menu.svg";
    img.style.width = "35px";
    header.append(img)
    img.addEventListener("click", function () {
        if (ul.classList.contains("none")) {
            ul.classList.remove("none");
            ul.classList.add("fixed");
            img.style.zIndex = "10000";
            img.src = "./assets/images/icon-menu-close.svg";
            overLay.classList.remove("none");
            overLay.style.zIndex = "1";
        }else {
            ul.classList.add("none");
            ul.classList.remove("fixed");
            img.src = "./assets/images/icon-menu.svg";
            overLay.classList.add("none");
        }
    });
}