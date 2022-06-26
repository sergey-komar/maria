$(function () {
    $('.question-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500)
    });

    $('.slider__box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1090,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },
        ]
    });

       // MOBILE BTN
        const navIcon = document.querySelector('.nav-icon');
        const nav = document.querySelector('.menu__list');

        navIcon.addEventListener("click", function () {
        // document.querySelector('.nav-icon').classList.toggle('active');

        this.classList.toggle("nav-icon--active");

        nav.classList.toggle('nav--active');
        });
});