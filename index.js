var owl = $('.owl-carousel');

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