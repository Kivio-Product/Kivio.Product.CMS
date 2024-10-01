$(document).ready(function () {
    // Function to initialize slick for desktop or mobile
    function initSlick(selector) {
        var amountOfImages = $(selector).data('amount-of-images') || 1;  // Default to 1 if undefined
        var centeredImages = $(selector).data('centered-images') || false;

        $(selector + ' .carousel').slick({
            infinite: true,         // Enables endless looping
            slidesToShow: amountOfImages,  // Number of visible slides based on parameter
            slidesToScroll: 1,      // How many slides to scroll per click
            autoplay: true,         // Enable autoplay
            autoplaySpeed: 2000,    // Delay between slides (in ms)
            arrows: false,          // Show navigation arrows
            dots: true,             // Show dots below the carousel
            centerMode: centeredImages, // Center the active slide
            variableWidth: true,    // Enable variable width for slides
            responsive: [
                {
                    breakpoint: 768, // Mobile settings
                    settings: {
                        slidesToShow: 1,  // Show 1 slide on smaller screens
                        centerMode: centeredImages
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
            // Destroy desktop slick carousel if initialized
            if ($('.carousel-desktop .carousel').hasClass('slick-initialized')) {
                $('.carousel-desktop .carousel').slick('unslick');
            }
            // Hide the desktop carousel and show the mobile carousel
            $('.carousel-desktop').hide();
            $('.carousel-mobile').show();
        } else {
            // Initialize desktop slick carousel if not already initialized
            if (!$('.carousel-desktop .carousel').hasClass('slick-initialized')) {
                initSlick('.carousel-desktop');
            }
            // Destroy mobile slick carousel if initialized
            if ($('.carousel-mobile .carousel').hasClass('slick-initialized')) {
                $('.carousel-mobile .carousel').slick('unslick');
            }
            // Hide the mobile carousel and show the desktop carousel
            $('.carousel-mobile').hide();
            $('.carousel-desktop').show();
        }
    }

    // Initialize the correct carousel on page load
    handleCarousel();

    // Re-check on window resize and adjust the carousel accordingly
    $(window).resize(function () {
        if(amountOfImages==4){
            handleCarousel();
        }
    });
});
