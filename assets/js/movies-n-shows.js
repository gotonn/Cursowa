// Слайдер для багатьох секцій
function initializeSliders() {
    const sliders = document.querySelectorAll('.catagories');

    sliders.forEach((slider, index) => {
        const track = slider.querySelector('.catagories-wrapper');
        const prevBtn = slider.querySelector('.prevBtn');
        const nextBtn = slider.querySelector('.nextBtn');
        const dots = slider.querySelectorAll('.box-swipped div');

        if (track && prevBtn && nextBtn) {
            let currentTranslate = 0;
            const cardWidth = 280;
            const sliderContainer = slider.querySelector('.slider-container');
            let visibleWidth = sliderContainer.offsetWidth;
            const totalDots = dots.length;

            function updateButtons() {
                const trackWidth = track.scrollWidth;
                const maxTranslate = visibleWidth - trackWidth;

                prevBtn.disabled = currentTranslate === 0;
                nextBtn.disabled = currentTranslate <= maxTranslate;

                prevBtn.style.opacity = currentTranslate === 0 ? '0.5' : '1';
                nextBtn.style.opacity = currentTranslate <= maxTranslate ? '0.5' : '1';

                updateSwipeIndicator();
            }

            function updateSwipeIndicator() {
                const trackWidth = track.scrollWidth;
                const maxTranslate = visibleWidth - trackWidth;
                const totalScrollRange = Math.abs(maxTranslate);

                if (totalScrollRange === 0) return;

                const scrollPosition = Math.abs(currentTranslate) / totalScrollRange;
                const activeIndex = Math.min(
                    Math.floor(scrollPosition * totalDots),
                    totalDots - 1
                );

                dots.forEach((dot, dotIndex) => {
                    if (dotIndex === activeIndex) {
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
    });
}


const sectionsConfig = [
    { title: 'Наші жанри', type: 'movies' },
    { title: 'Популярні Топ 10 у жанрах', type: 'movies' },
    { title: 'Зараз у трендах', type: 'movies' },
    { title: 'Нові релізи', type: 'movies' },
    { title: 'Обов\'язково до перегляду: Фільми', type: 'movies' },
    { title: 'Наші жанри', type: 'shows' },
    { title: 'Популярні Топ 10 у жанрах', type: 'shows' },
    { title: 'Зараз у трендах', type: 'shows' },
    { title: 'Нові релізи', type: 'shows' },
    { title: 'Обов\'язково до перегляду: Серіали', type: 'shows' }
];

const cardTemplates = {
    'Our Genres': (imgNumber, categoryName, index) => `
        <img src="./assets/img/films-${imgNumber}.png" alt="${categoryName}">
        <div class="catagory-info">
            <p class="catagory-name">${categoryName}</p>
            <img src="./assets/icons/arrow-right.svg" alt="">
        </div>
    `,

    'Popular Top 10 In Genres': (imgNumber, categoryName, index) => `
        <img src="./assets/img/films-${imgNumber}.png" alt="${categoryName}">
        <div class="catagory-info">
            <div class="popular-info">
                <p class="top-text">Топ 10 з</p>
                <p class="catagory-name">${categoryName}</p>
            </div>
            <img src="./assets/icons/arrow-right.svg" alt="">
        </div>
    `,

    'Trending Now': (imgNumber, categoryName, index) => `
        <img src="./assets/img/film-${imgNumber}.png" alt="${categoryName}">
        <div class="catagory-info add-gap">
            <div class="catagory-info-wrapper">
                <img src="./assets/icons/clock.svg" alt="Час">
                <div class="duration">
                    <p>${Math.floor(Math.random() * 3 + 1)}г ${Math.floor(Math.random() * 59)}хв</p>
                </div>
            </div>
            <div class="catagory-info-wrapper">
                <img src="./assets/icons/eye.svg" alt="Перегляди">
                <div class="duration">
                    <p>${Math.floor(Math.random() * 10 + 1)}Т</p>
                </div>
            </div>
        </div>
    `,

    'New Releases': (imgNumber, categoryName, index) => {
        const currentYear = new Date().getFullYear();
        const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
        const randomMonth = months[Math.floor(Math.random() * 12)];
        return `
        <img src="./assets/img/film-${imgNumber}.png" alt="${categoryName}">
        <div class="catagory-info add-gap justify-center">
            <div class="catagory-info-wrapper">
                <p>Випущено ${Math.floor(Math.random() * 28 + 1)} ${randomMonth} ${currentYear - Math.floor(Math.random() * 2)}</p>
            </div>
        </div>
    `;
    },

    'Must-Watch': (imgNumber, categoryName, index) => `
        <img class="big-banner" src="./assets/img/film-${imgNumber}.png" alt="${categoryName}">
        <div class="catagory-info add-gap">
            <div class="catagory-info-wrapper">
                <img src="./assets/icons/clock.svg" alt="Час">
                <div class="duration">
                    <p>${Math.floor(Math.random() * 3 + 1)}г ${Math.floor(Math.random() * 59)}хв</p>
                </div>
            </div>
            <div class="catagory-info-wrapper">
                ${'<img src="./assets/icons/full-star.svg" alt="Зірка">'.repeat(5)}
                <div class="duration">
                    <p>${Math.floor(Math.random() * 30 + 11)}Т</p>
                </div>
            </div>
        </div>
    `
};

cardTemplates['Must-Watch Movies'] = cardTemplates['Must-Watch'];
cardTemplates['Must-Watch Shows'] = cardTemplates['Must-Watch'];

function createSections() {
    const moviesContainer = document.getElementById('moviesContainer');
    const showsContainer = document.getElementById('showsContainer');

    sectionsConfig.forEach((section, index) => {
        const sectionElement = createSectionElement(section.title, index);

        if (section.type === 'movies') {
            moviesContainer.appendChild(sectionElement);
        } else {
            showsContainer.appendChild(sectionElement);
        }
    });
}

function createSectionElement(title, index) {
    const section = document.createElement('section');
    section.className = 'catagories';
    section.innerHTML = `
        <div class="text-box">
            <div>
                <h2>${title}</h2>
            </div>
            <div class="custom-nav">
                <button class="prevBtn"><img src="./assets/icons/arrow-left.svg" alt=""></button>
                <div class="box-swipped">
                    <div class="highlighted-swipe"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <button class="nextBtn"><img src="./assets/icons/arrow-right.svg" alt=""></button>
            </div>
        </div>
        <div class="slider-container">
            <div class="catagories-wrapper" data-section="${title}">
                <!-- Картки будуть додані через JS -->
            </div>
        </div>
    `;

    return section;
}

function createAllCategoryCards() {
    const categories = ['Екшн', 'Пригоди', 'Комедія', 'Драма', 'Жахи', 'Наукова фантастика', 'Романтика', 'Трилер', 'Фентезі'];
    const sliderTracks = document.querySelectorAll('.catagories-wrapper');

    const sectionImageTypes = {
        'Our Genres': { type: 'films', count: 9 },
        'Popular Top 10 In Genres': { type: 'films', count: 9 },
        'Trending Now': { type: 'film', count: 14 },
        'New Releases': { type: 'film', count: 14 },
        'Must-Watch Movies': { type: 'film', count: 14 },
        'Must-Watch Shows': { type: 'film', count: 14 }
    };

    sliderTracks.forEach((sliderTrack) => {
        const sectionTitle = sliderTrack.dataset.section;
        const template = cardTemplates[sectionTitle] || cardTemplates['Our Genres'];
        const imageConfig = sectionImageTypes[sectionTitle] || { type: 'films', count: 9 };

        const availableNumbers = Array.from({ length: imageConfig.count }, (_, i) => i + 1);
        const shuffledNumbers = shuffleArray([...availableNumbers]);

        const uniqueNumbers = shuffledNumbers.slice(0, 9);

        for (let i = 0; i < 9; i++) {
            const imgNumber = uniqueNumbers[i];
            const categoryName = categories[i];

            const card = document.createElement('a'); 
            card.className = 'catagory-card';
            card.href = './open-page.html'; 

            let cardHTML = template(imgNumber, categoryName, i);

            if (imageConfig.type === 'films' && cardHTML.includes('film-')) {
                cardHTML = cardHTML.replace(/film-/g, 'films-');
            } else if (imageConfig.type === 'film' && cardHTML.includes('films-')) {
                cardHTML = cardHTML.replace(/films-/g, 'film-');
            }

            card.innerHTML = cardHTML;
            sliderTrack.appendChild(card);
        }
    });
}

function initializeSingleCategorySlider() {
    const container = document.getElementById('catagoryContainer');
    if (!container) return;

    const categories = ['Екшн', 'Пригоди', 'Комедія', 'Драма', 'Жахи', 'Наукова фантастика', 'Романтика', 'Трилер', 'Фентезі'];
    const availableNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
    const shuffledNumbers = shuffleArray([...availableNumbers]);

   const uniqueNumbers = shuffledNumbers.slice(0, 9);

    for (let i = 0; i < 9; i++) {
        const imgNumber = uniqueNumbers[i];
        const categoryName = categories[i];

        const card = document.createElement('a'); // Змінили div на a
        card.className = 'catagory-card';
        card.href = './open-page.html'; // Додали посилання
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
        const totalDots = dots.length;

        function updateButtons() {
            const trackWidth = track.scrollWidth;
            const maxTranslate = visibleWidth - trackWidth;

            prevBtn.disabled = currentTranslate === 0;
            nextBtn.disabled = currentTranslate <= maxTranslate;
            prevBtn.style.opacity = currentTranslate === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentTranslate <= maxTranslate ? '0.5' : '1';

            updateSwipeIndicator();
        }

        function updateSwipeIndicator() {
            const trackWidth = track.scrollWidth;
            const maxTranslate = visibleWidth - trackWidth;
            const totalScrollRange = Math.abs(maxTranslate);

            if (totalScrollRange === 0) return;

            const scrollPosition = Math.abs(currentTranslate) / totalScrollRange;
            const activeIndex = Math.min(
                Math.floor(scrollPosition * totalDots),
                totalDots - 1
            );

            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle('highlighted-swipe', dotIndex === activeIndex);
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

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function setupTabSwitching() {
    const planTypeElements = document.querySelectorAll('.plan-type p');

    planTypeElements.forEach(element => {
        element.addEventListener('click', function () {
            const isMovies = this.textContent === 'Movies';

            document.querySelectorAll('.plan-type p').forEach(p => {
                p.classList.toggle('highlighted-choise', p.textContent === this.textContent);
            });

            document.querySelector('.movies').classList.toggle('d-none', !isMovies);
            document.querySelector('.shows').classList.toggle('d-none', isMovies);
        });
    });
}

function initializePage() {
    if (document.getElementById('catagoryContainer') && !document.getElementById('moviesContainer')) {
        initializeSingleCategorySlider();
    }

    else if (document.getElementById('moviesContainer')) {
        createSections();
        createAllCategoryCards();
        setupTabSwitching();
        initializeSliders();
    }
}


document.addEventListener('DOMContentLoaded', initializePage);