document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.arrow-left');
    const nextBtn = document.querySelector('.arrow-right');
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = cards[0].clientWidth;
        const newTransformValue = -currentIndex * (cardWidth + 16); // 16, card arası boşluk
        carousel.style.transform = `translateX(${newTransformValue}px)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 3; // Geriye sarma, 3 görünür kart var
        }
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 3) {
            currentIndex++;
        } else {
            currentIndex = 0; // İlk elemana git
        }
        updateCarousel();
    });

    updateCarousel();
});
