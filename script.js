// =========================
// 8ASPIRE - Wizard Theme
// =========================

// Navbar berubah saat discroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(8,8,15,.95)";
    } else {
        header.style.background = "rgba(8,8,15,.65)";
    }
});

// Animasi card
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
    card.style.transition = ".8s ease";

    observer.observe(card);

});

// Hero Fade
const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    hero.style.opacity = 1 - window.scrollY / 800;

});

// Smooth Scroll
document.querySelectorAll("a").forEach(link=>{

    if(link.hash){

        link.addEventListener("click",(e)=>{

            const target=document.querySelector(link.hash);

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    }

});

// Console Message
console.log("⚡ Welcome to 8ASPIRE ⚡");
