$(document).ready(function () {


    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const carouselImages = document.querySelector('.carousel-images');
    let offset = 0;
    const imageWidth = document.querySelector('.carousel-images img').clientWidth;
    let autoScrollInterval;

    const scrollNext = () => {
        offset -= imageWidth + 50; // Adjust to match padding between images
        if (Math.abs(offset) >= carouselImages.scrollWidth - (imageWidth*6)) {
            offset = 0;
        }
        carouselImages.style.transform = `translateX(${offset}px)`;
    };

    const scrollPrev = () => {
        if (offset === 0) {
            offset = -(carouselImages.scrollWidth - imageWidth);
        } else {
            offset = 0; // Adjust to match padding between images
        }
        carouselImages.style.transform = `translateX(${offset}px)`;
    };

    nextBtn.addEventListener('click', () => {
        clearInterval(autoScrollInterval); // Pause auto-scroll when manual navigation is used
        scrollNext();
        startAutoScroll(); // Restart auto-scroll
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(autoScrollInterval); // Pause auto-scroll when manual navigation is used
        scrollPrev();
        startAutoScroll(); // Restart auto-scroll
    });

    const startAutoScroll = () => {
        autoScrollInterval = setInterval(scrollNext, 3000); // Auto-scroll every 3 seconds
    };

    // Start auto-scroll on page load
    startAutoScroll();

});