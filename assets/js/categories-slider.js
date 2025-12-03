// Слайдер для однієї секції (catagoryContainer)
function initializeSingleCategorySlider() {
    const container = document.getElementById('catagoryContainer');
    if (!container) return;
    
    const categories = ['Екшн', 'Пригоди', 'Комедія', 'Драма', 'Жахи', 'Наукова фантастика', 'Романтика', 'Трилер', 'Фентезі'];
    
    for (let i = 0; i < 9; i++) {
        const imgNumber = (i % 9) + 1;
        const categoryName = categories[i];
        
        const card = document.createElement('a');
        card.className = 'catagory-card';
        card.href = './open-page.html'; 
        card.innerHTML = `
            <img src="./assets/img/films-${imgNumber}.png" alt="${categoryName}">
            <div class="catagory-info">
                <p class="catagory-name">${categoryName}</p>
                <img src="./assets/icons/arrow-right.svg" alt="">
            </div>
        `;
        container.appendChild(card);
    }
    
    const sliderContainer = document.querySelector('.slider-container');
    const track = container;
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');
    const dots = document.querySelectorAll('.box-swipped div');
    
    if (track && prevBtn && nextBtn && sliderContainer) {
        let currentTranslate = 0;
        const cardWidth = 280;
        let visibleWidth = sliderContainer.offsetWidth;

        function updateButtons() {
            const trackWidth = track.scrollWidth;
            const maxTranslate = visibleWidth - trackWidth;

            prevBtn.disabled = currentTranslate === 0;
            nextBtn.disabled = currentTranslate <= maxTranslate;
            prevBtn.style.opacity = currentTranslate === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentTranslate <= maxTranslate ? '0.5' : '1';
            
            updateDots();
        }

        function updateDots() {
            const trackWidth = track.scrollWidth;
            const maxTranslate = visibleWidth - trackWidth;
            const totalScrollRange = Math.abs(maxTranslate);

            if (totalScrollRange === 0) return;

            const scrollPosition = Math.abs(currentTranslate) / totalScrollRange;
            const activeIndex = Math.min(
                Math.floor(scrollPosition * dots.length),
                dots.length - 1
            );

            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('highlighted-swipe');
                } else {
                    dot.classList.remove('highlighted-swipe');
                }
            });
        }

        nextBtn.addEventListener("click", () => {
            const trackWidth = track.scrollWidth;
            const maxTranslate = visibleWidth - trackWidth;
            if (currentTranslate > maxTranslate) {
                currentTranslate = Math.max(currentTranslate - cardWidth, maxTranslate);
                track.style.transform = `translateX(${currentTranslate}px)`;
                updateButtons();
            }
        });

        prevBtn.addEventListener("click", () => {
            if (currentTranslate < 0) {
                currentTranslate = Math.min(currentTranslate + cardWidth, 0);
                track.style.transform = `translateX(${currentTranslate}px)`;
                updateButtons();
            }
        });

        window.addEventListener("resize", () => {
            visibleWidth = sliderContainer.offsetWidth;
            updateButtons();
        });

        updateButtons();
    }
}

document.addEventListener('DOMContentLoaded', initializeSingleCategorySlider);