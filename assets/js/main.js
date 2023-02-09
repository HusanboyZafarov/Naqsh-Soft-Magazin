let header = document.querySelector('header'),
    sotib_olish = document.querySelector(".sotib_olish"),
    sinab_korish = document.querySelector(".sinab_korish")

let form_opener = document.querySelectorAll(".form_opener"),
    form = document.querySelector(".form"),
    closers = document.querySelector(".closers")
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
    form.classList.remove("opened")
    closer.classList.toggle("changed")
})

closer.addEventListener("click", () => {
    lines.forEach((item) => {
        item.classList.toggle("changed")
    });
    navbar.classList.remove("opened")
    form.classList.remove("opened")
    closer.classList.remove("changed")
})

header_inner_item.forEach((item) => {
    item.addEventListener("click", () => {
        lines.forEach((item) => {
            item.classList.remove("changed")
        });
        navbar.classList.remove("opened")
        closer.classList.remove("changed")
        if (form.className == "opened") {
            closer.classList.add("changed")
        }
    })
})


let btns = document.querySelectorAll(".price_btns button")
btns.forEach((item) => {
    item.addEventListener("click", () => {
        btns.forEach((el) => {
            el.classList.remove("selected")
        });
        item.classList.add("selected")
    })
})

form_opener.forEach((item) => {
    item.addEventListener("click", () => {
        form.classList.add("opened")
        closer.classList.add("changed")
    })
});

closers.addEventListener("click", () => {
    form.classList.remove("opened")
    closer.classList.remove("changed")
})

sotib_olish.addEventListener("click", () => {
    closer.classList.add("changed")
})
sinab_korish.addEventListener("click", () => {
    closer.classList.add("changed")
})