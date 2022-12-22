(function ($) {
    "use strict";



    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $('.fixed-top').css('top', $('.navbar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.navbar').height()) {
            $('.fixed-top').addClass('bg-dark').css('top', 0);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.navbar').height());
        }
    });


    // Fixed Navbar
    $('.fixed-sale').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-sale').addClass('bg-dark').css('top', 0);
        } else {
            $('.fixed-sale').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('fast');
        } else {
            $('.back-to-top').fadeOut('fast');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 100, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    $('[data-toggle="counter-up1"]').counterUp({
        delay: 500,
        time: 10000,
        beginAt: 5,

    });


    // Testimonials carousel
    // use loop, basic, responsive,
    $(".product-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Parallaxie
    $('.parallaxie').parallaxie({
        speed: 0.5,
        offset: 50,

    });


})(jQuery);




// function count(el){
//     var numberEl= el.querySelector('.number')
//     var to= parseInt(numberEl.innerText)
//     var count= 0
//     var interval= 1000
//     var step= 3

//     let counting= setInterval(() => {
//         count += step
//         if(count > to){
//             clearInterval(counting)
//             numberEl.innerText= to
//         }
//         else{
//             numberEl.innerText= Math.round(count)
//         }
//     }, interval);
// }

// listCounter.forEach(item => {
//     count(item)
// })


//-- Rating start ------
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = () => {
        widget.style.display = "block";
        post.style.display = "none";
    }
    return false;
}
// -- END rating -------

//----Search -----
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick= function(){
    search.classList.toggle('active')
}
//----END search -----








