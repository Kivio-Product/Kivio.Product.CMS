$(document).ready(function () {

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const imageWidth = images[0].clientWidth;
    const padding = 20; // Adjust padding between images
    const totalImages = images.length;
    let offset = 0;
    let currentImageIndex = 0;
    let autoScrollInterval;

    // Variables for dragging
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let startTime = 0;

    // Scroll to next image
    const scrollNext = () => {
        if (currentImageIndex < totalImages - 1) {
            currentImageIndex++;
            offset -= imageWidth + padding;
        } else {
            currentImageIndex = 0;
            offset = 0;
        }
        carouselImages.style.transform = `translateX(${offset}px)`;
    };

    // Scroll to previous image
    const scrollPrev = () => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            offset += imageWidth + padding;
        } else {
            currentImageIndex = totalImages - 1;
            offset = -(imageWidth + padding) * (totalImages - 1);
        }
        carouselImages.style.transform = `translateX(${offset}px)`;
    };

    // Add event listeners for next/prev buttons
    nextBtn.addEventListener('click', () => {
        clearInterval(autoScrollInterval);
        scrollNext();
        startAutoScroll();
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(autoScrollInterval);
        scrollPrev();
        startAutoScroll();
    });

    const startAutoScroll = () => {
        autoScrollInterval = setInterval(scrollNext, 3000); // Auto-scroll every 3 seconds
    };

    // Start auto-scroll on page load
    startAutoScroll();

    // Drag Functionality
    const dragStart = (event) => {
        clearInterval(autoScrollInterval); // Pause auto-scroll during drag
        isDragging = true;
        startPosition = getPositionX(event);
        prevTranslate = offset; // Store the previous translate position
        startTime = event.timeStamp;
        carouselImages.style.cursor = 'grabbing';
        carouselImages.addEventListener('mousemove', dragMove); // Only add mousemove when dragging starts
        carouselImages.addEventListener('touchmove', dragMove); // Only add touchmove when dragging starts
    };

    const dragMove = (event) => {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + (currentPosition - startPosition); // Calculate new position
            carouselImages.style.transform = `translateX(${currentTranslate}px)`; // Update transform
        }
    };

    const dragEnd = () => {
        if (!isDragging) return; // Prevent unnecessary execution if not dragging

        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;

        // Move to next or previous image if dragged enough
        if (movedBy < -100 && currentImageIndex < totalImages - 1) {
            scrollNext();
        } else if (movedBy > 100 && currentImageIndex > 0) {
            scrollPrev();
        } else {
            carouselImages.style.transform = `translateX(${offset}px)`; // Return to original position if drag is minimal
        }

        carouselImages.style.cursor = 'grab';
        startAutoScroll(); // Restart auto-scroll after drag ends

        // Remove mousemove and touchmove event listeners after dragging ends
        carouselImages.removeEventListener('mousemove', dragMove);
        carouselImages.removeEventListener('touchmove', dragMove);
    };

    // Helper function to get the current X position (for mouse or touch)
    const getPositionX = (event) => {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    };

    // Add event listeners for drag start and drag end
    carouselImages.addEventListener('mousedown', dragStart);
    carouselImages.addEventListener('touchstart', dragStart);
    window.addEventListener('mouseup', dragEnd);
    window.addEventListener('touchend', dragEnd);

    // Set cursor to grab initially
    carouselImages.style.cursor = 'grab';

});