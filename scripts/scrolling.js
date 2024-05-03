// Get the container element
const container = document.querySelector('.slideshow-container');

// Get all the slide elements
const slides = document.querySelectorAll('.MySlides');

// Set the initial slide index
let currentSlideIndex = 0;

// Function to slide the slides to the left
function slideLeft() {
    // Calculate the new slide index
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    // Calculate the new translateX value
    const translateY = -currentSlideIndex * 100;

    // Apply the transform style to slide the slides
    container.style.transform = `translateY(${translateY}%)`;
}

// Set the interval for automatic sliding
setInterval(slideLeft, 3000);