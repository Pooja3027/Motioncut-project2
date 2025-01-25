let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const thumbnails = document.querySelectorAll(".thumbnails img");

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? "block" : "none";
        thumbnails[i].classList.toggle("active-thumb", i === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 5000);

// Initial Display
showSlide(currentIndex);

// Touch Swipe Support
let startX;
const sliderContainer = document.querySelector(".slider-container");

sliderContainer.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
});

sliderContainer.addEventListener("touchend", (event) => {
    let endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) {
        nextSlide();
    } else if (endX - startX > 50) {
        prevSlide();
    }
});
