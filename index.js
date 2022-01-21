var owl = $('.owl-carousel');
let menuBtn = document.querySelector("#menu-btn");

$(document).ready(function(){
    owl.owlCarousel();
});


owl.owlCarousel({
    items:1,
    loop:true,
    dots: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
});

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    let navUl = document.querySelector("nav>ul");
    navUl.classList.toggle('navUl');
}