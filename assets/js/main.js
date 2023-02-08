let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 0)
})

let burger = document.querySelector(".burger"),
    lines = document.querySelectorAll(".line"),
    navbar = document.querySelector(".header_inner_list"),
    closer = document.querySelector(".closer"),
    header_inner_item = document.querySelectorAll(".header_inner_item")

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

header_inner_item.forEach((item) => {
    item.addEventListener("click", () => {
        lines.forEach((item) => {
            item.classList.remove("changed")
        });
        navbar.classList.remove("opened")
        closer.classList.remove("changed")
    })
})