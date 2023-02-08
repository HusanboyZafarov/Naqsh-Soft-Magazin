let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 0)
})

let burger = document.querySelector(".burger"),
    lines = document.querySelectorAll(".line"),
    navbar = document.querySelector(".header_inner_list"),
    closer = document.querySelector(".closer")

burger.addEventListener("click", () => {
    lines.forEach((item) => {
        item.classList.toggle("changed")
    });
    navbar.classList.toggle("opened")
    closer.classList.toggle("changed")
})

closer.addEventListener("click", () => {
    lines.forEach((item) => {
        item.classList.toggle("changed")
    });
    navbar.classList.toggle("opened")
    closer.classList.toggle("changed")
})