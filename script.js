const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;

        if (top > offset) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});
const buttons = document.querySelectorAll("button, .btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";

        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});
let index = 0;

const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".carousel .card");
const dots = document.querySelectorAll(".dot");

function updateCarousel() {
    track.style.transform = `translateX(-${index * 270}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

function goToSlide(i) {
    index = i;
    updateCarousel();
}