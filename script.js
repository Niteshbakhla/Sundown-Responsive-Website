// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });


let container = document.querySelector(".elem-Container");
let elem = document.querySelectorAll(".elem");
let imgBox = document.querySelector(".fixed-container");


elem.forEach(img => {
    container.addEventListener("mouseenter", () => {
        imgBox.style.visibility = "visible";
        imgBox.style.pointerEvents = "none"
    })
    container.addEventListener("mouseleave", () => {
        imgBox.style.visibility = "hidden";
    })
    img.addEventListener("mouseenter", () => {
        let box = img.getAttribute("data-image")
        imgBox.style.backgroundImage = `url('${box}')`
    })
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let menu = document.querySelector("nav h3");
let fullScreen = document.querySelector("#fullScreen");
let img = document.querySelector("nav img");
let value = true;
menu.addEventListener('click', () => {
    if (value) {
        fullScreen.style.top = "0";
        img.style.opacity = 0
        value = false;
    } else {
        fullScreen.style.top = "-100%"
        img.style.opacity = 1
        value = true;
    }
})

setTimeout(() => {
    let loader = document.querySelector(".loader");
    loader.style.top = "-300%"
}, 4000);


let goal = document.querySelector("#goal");
let main = document.querySelector(".main")
main.addEventListener("mousemove", (e) => {
    gsap.to(goal, {
        left: e.x,
        top: e.y
    })
})