    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = getRandomSlideIndex();

    // Function to generate a random slide index
    function getRandomSlideIndex() {
        return Math.floor(Math.random() * slides.length);
    }

    // Function to show the current slide
    function showSlide() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    // Function to show the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide();
    }

    // Function to show the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide();
    }

    // Initialize the carousel by showing a random slide
    showSlide();

    // Event listeners for the previous and next buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
