const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menu = document.getElementsByClassName("menu-c")[0];
var toTop = document.querySelector(".to-top");              //const and var work the same. 
//const toTop =document.querySelector(".to-top");

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
})

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})