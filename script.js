document.addEventListener("DOMContentLoaded", () => {

    const title = document.querySelector(".hero h1");

    title.animate([
        {
            opacity:0,
            transform:"translateY(-30px)"
        },
        {
            opacity:1,
            transform:"translateY(0)"
        }
    ],{
        duration:1500,
        easing:"ease-out"
    });

});
