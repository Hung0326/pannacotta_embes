(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500);
        return false;
    });

    $('.btt').click(function () {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            document.querySelector('.bth-navinator').classList.add('active')
        } else {
            document.querySelector('.bth-navinator').classList.remove('active')
        }
    });
})(jQuery);

