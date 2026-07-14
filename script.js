
// =========================
// 8ASPIRE Wizard Theme
// =========================

// Navbar berubah saat scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.8)";
    } else {
        header.style.background = "rgba(0,0,0,0.35)";
    }
});

// Animasi muncul saat discroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s ease";
    observer.observe(card);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

// Hero fade saat scroll
const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    hero.style.opacity = 1 - window.scrollY / 700;

});
