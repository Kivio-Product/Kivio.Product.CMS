$(document).ready(function () {
    // Function to initialize slick for desktop or mobile
    function initSlick(selector) {
        $(selector + ' .carousel').slick({
            infinite: true,         // Enables endless looping
            slidesToShow: 1,  // Number of visible slides based on parameter
            slidesToScroll: 1,      // How many slides to scroll per click
            autoplay: true,         // Enable autoplay
            autoplaySpeed: 2000,    // Delay between slides (in ms)
            arrows: false,          // Show navigation arrows
            dots: true,             // Show dots below the carousel
            centerMode: true, // Center the active slide
            variableWidth: true,    // Enable variable width for slides
            responsive: [
                {
                    breakpoint: 768, // Mobile settings
                    settings: {
                        slidesToShow: 1,  // Show 1 slide on smaller screens
                        centerMode: true
                    }
                }
            ]
        });
    }

    // Function to handle carousel switching based on viewport width
    function handleCarousel() {
        var screenWidth = $(window).width();

        if (screenWidth < 768) {
            // Initialize mobile slick carousel if not already initialized
            if (!$('.carousel-mobile .carousel').hasClass('slick-initialized')) {
                initSlick('.carousel-mobile');
            }
            // Hide the desktop carousel and show the mobile carousel
            $('.desktop-viewport').hide();
            $('.mobile-viewport').show();
        } else {
            // Destroy mobile slick carousel if initialized
            if ($('.carousel-mobile .carousel').hasClass('slick-initialized')) {
                $('.carousel-mobile .carousel').slick('unslick');
            }
            // Hide the mobile carousel and show the desktop carousel
            $('.mobile-viewport').hide();
            $('.desktop-viewport').show();
        }
    }

    // Initialize the correct carousel on page load
    handleCarousel();

    // Re-check on window resize and adjust the carousel accordingly
    $(window).resize(function () {
            handleCarousel();
    });
});
